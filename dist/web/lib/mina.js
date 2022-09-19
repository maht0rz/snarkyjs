// This is for an account where any of a list of public keys can update the state
import { Circuit, Ledger } from '../snarky.js';
import { Field, Bool } from './core.js';
import { UInt32, UInt64 } from './int.js';
import { PrivateKey, PublicKey } from './signature.js';
import { addMissingProofs, addMissingSignatures, partiesToJson, Party, ZkappStateLength, TokenId, CallForest, Authorization, SequenceEvents, } from './party.js';
import * as Fetch from './fetch.js';
import { assertPreconditionInvariants } from './precondition.js';
import { cloneCircuitValue } from './circuit_value.js';
import { snarkContext } from './proof_system.js';
import { Context } from './global-context.js';
import { emptyReceiptChainHash } from './hash.js';
export { createTransaction, BerkeleyQANet, LocalBlockchain, currentTransaction, setActiveInstance, transaction, currentSlot, getAccount, hasAccount, getBalance, getNetworkState, accountCreationFee, sendTransaction, fetchEvents, getActions, };
let currentTransaction = Context.create();
function reportGetAccountError(publicKey, tokenId) {
    if (tokenId === TokenId.toBase58(TokenId.default)) {
        return `getAccount: Could not find account for public key ${publicKey}`;
    }
    else {
        return `getAccount: Could not find account for public key ${publicKey} with the tokenId ${tokenId}`;
    }
}
function createTransaction(feePayer, f, { fetchMode = 'cached', isFinalRunOutsideCircuit = true } = {}) {
    if (currentTransaction.has()) {
        throw new Error('Cannot start new transaction within another transaction');
    }
    let feePayerKey = feePayer instanceof PrivateKey ? feePayer : feePayer?.feePayerKey;
    let fee = feePayer instanceof PrivateKey ? undefined : feePayer?.fee;
    let memo = feePayer instanceof PrivateKey ? '' : feePayer?.memo ?? '';
    let transactionId = currentTransaction.enter({
        sender: feePayerKey,
        parties: [],
        fetchMode,
        isFinalRunOutsideCircuit,
    });
    // run circuit
    // we have this while(true) loop because one of the smart contracts we're calling inside `f` might be calling
    // SmartContract.analyzeMethods, which would be running its methods again inside `Circuit.constraintSystem`, which
    // would throw an error when nested inside `Circuit.runAndCheck`. So if that happens, we have to run `analyzeMethods` first
    // and retry `Circuit.runAndCheck(f)`. Since at this point in the function, we don't know which smart contracts are involved,
    // we created that hack with a `bootstrap()` function that analyzeMethods sticks on the error, to call itself again.
    try {
        let err;
        while (true) {
            if (err !== undefined)
                err.bootstrap();
            try {
                snarkContext.runWith({ inRunAndCheck: true }, () => Circuit.runAndCheck(f));
                break;
            }
            catch (err_) {
                if (err_?.bootstrap)
                    err = err_;
                else
                    throw err_;
            }
        }
    }
    catch (err) {
        currentTransaction.leave(transactionId);
        throw err;
    }
    let otherParties = CallForest.toFlatList(currentTransaction.get().parties);
    try {
        // check that on-chain values weren't used without setting a precondition
        for (let party of otherParties) {
            assertPreconditionInvariants(party);
        }
    }
    catch (err) {
        currentTransaction.leave(transactionId);
        throw err;
    }
    let feePayerParty;
    if (feePayerKey !== undefined) {
        // if senderKey is provided, fetch account to get nonce and mark to be signed
        let senderAddress = feePayerKey.toPublicKey();
        let senderAccount = getAccount(senderAddress, TokenId.default);
        feePayerParty = Party.defaultFeePayer(senderAddress, feePayerKey, senderAccount.nonce);
        if (fee !== undefined) {
            feePayerParty.body.fee =
                fee instanceof UInt64 ? fee : UInt64.fromString(String(fee));
        }
    }
    else {
        // otherwise use a dummy fee payer that has to be filled in later
        feePayerParty = Party.dummyFeePayer();
    }
    let transaction = { otherParties, feePayer: feePayerParty, memo };
    currentTransaction.leave(transactionId);
    let self = {
        transaction,
        sign(additionalKeys) {
            self.transaction = addMissingSignatures(self.transaction, additionalKeys);
            return self;
        },
        async prove() {
            let { parties, proofs } = await addMissingProofs(self.transaction);
            self.transaction = parties;
            return proofs;
        },
        toJSON() {
            let json = partiesToJson(self.transaction);
            return JSON.stringify(json);
        },
        toGraphqlQuery() {
            return Fetch.sendZkappQuery(self.toJSON());
        },
        send() {
            return sendTransaction(self);
        },
    };
    return self;
}
const defaultAccountCreationFee = 1000000000;
/**
 * A mock Mina blockchain running locally and useful for testing.
 */
function LocalBlockchain({ accountCreationFee = defaultAccountCreationFee, } = {}) {
    const msPerSlot = 3 * 60 * 1000;
    const startTime = new Date().valueOf();
    const ledger = Ledger.create([]);
    let networkState = defaultNetworkState();
    function addAccount(pk, balance) {
        ledger.addAccount(pk, balance);
    }
    let testAccounts = [];
    for (let i = 0; i < 10; ++i) {
        const largeValue = '30000000000';
        const k = PrivateKey.random();
        const pk = k.toPublicKey();
        addAccount(pk, largeValue);
        testAccounts.push({ privateKey: k, publicKey: pk });
    }
    const events = {};
    const actions = {};
    return {
        accountCreationFee: () => UInt64.from(accountCreationFee),
        currentSlot() {
            return UInt32.fromNumber(Math.ceil((new Date().valueOf() - startTime) / msPerSlot));
        },
        hasAccount(publicKey, tokenId = TokenId.default) {
            return !!ledger.getAccount(publicKey, tokenId);
        },
        getAccount(publicKey, tokenId = TokenId.default) {
            let ledgerAccount = ledger.getAccount(publicKey, tokenId);
            if (ledgerAccount == undefined) {
                throw new Error(reportGetAccountError(publicKey.toBase58(), TokenId.toBase58(tokenId)));
            }
            else {
                return {
                    publicKey: publicKey,
                    tokenId,
                    balance: new UInt64(ledgerAccount.balance.value),
                    nonce: new UInt32(ledgerAccount.nonce.value),
                    appState: ledgerAccount.zkapp?.appState ??
                        Array(ZkappStateLength).fill(Field.zero),
                    tokenSymbol: ledgerAccount.tokenSymbol,
                    receiptChainHash: ledgerAccount.receiptChainHash,
                    provedState: Bool(ledgerAccount.zkapp?.provedState ?? false),
                    delegate: ledgerAccount.delegate && PublicKey.from(ledgerAccount.delegate),
                    sequenceState: ledgerAccount.zkapp?.sequenceState[0] ??
                        SequenceEvents.emptySequenceState(),
                };
            }
        },
        getNetworkState() {
            return networkState;
        },
        sendTransaction(txn) {
            txn.sign();
            let partiesJson = partiesToJson(txn.transaction);
            ledger.applyJsonTransaction(JSON.stringify(partiesJson), String(accountCreationFee), JSON.stringify(networkState));
            // fetches all events from the transaction and stores them
            // events are identified and associated with a publicKey and tokenId
            partiesJson.otherParties.forEach((p) => {
                let addr = p.body.publicKey;
                let tokenId = p.body.tokenId;
                if (events[addr] === undefined) {
                    events[addr] = {};
                }
                if (p.body.events.length > 0) {
                    if (events[addr][tokenId] === undefined) {
                        events[addr][tokenId] = [];
                    }
                    events[addr][tokenId].push({
                        events: p.body.events,
                        slot: networkState.globalSlotSinceHardFork.toString(),
                    });
                }
                // actions/sequencing events
                // gets the index of the most up to date sequence state from our sequence list
                let n = actions[addr]?.[tokenId]?.length ?? 1;
                // most recent sequence state
                let sequenceState = actions?.[addr]?.[tokenId]?.[n - 1]?.hash;
                // if there exists no hash, this means we initialize our latest hash with the empty state
                let latestActionsHash = sequenceState === undefined
                    ? SequenceEvents.emptySequenceState()
                    : Ledger.fieldOfBase58(sequenceState);
                let actionList = p.body.sequenceEvents;
                let eventsHash = SequenceEvents.hash(actionList.map((e) => e.map((f) => Field(f))));
                if (actions[addr] === undefined) {
                    actions[addr] = {};
                }
                if (p.body.sequenceEvents.length > 0) {
                    latestActionsHash = SequenceEvents.updateSequenceState(latestActionsHash, eventsHash);
                    if (actions[addr][tokenId] === undefined) {
                        actions[addr][tokenId] = [];
                    }
                    actions[addr][tokenId].push({
                        actions: actionList,
                        hash: Ledger.fieldToBase58(latestActionsHash),
                    });
                }
            });
            return { wait: async () => { } };
        },
        async transaction(sender, f) {
            // bad hack: run transaction just to see whether it creates proofs
            // if it doesn't, this is the last chance to run SmartContract.runOutsideCircuit, which is supposed to run only once
            // TODO: this has obvious holes if multiple zkapps are involved, but not relevant currently because we can't prove with multiple parties
            // and hopefully with upcoming work by Matt we can just run everything in the prover, and nowhere else
            let tx = createTransaction(sender, f, {
                isFinalRunOutsideCircuit: false,
            });
            let hasProofs = tx.transaction.otherParties.some(Authorization.hasLazyProof);
            return createTransaction(sender, f, {
                isFinalRunOutsideCircuit: !hasProofs,
            });
        },
        applyJsonTransaction(json) {
            return ledger.applyJsonTransaction(json, String(accountCreationFee), JSON.stringify(defaultNetworkState()));
        },
        async fetchEvents(publicKey, tokenId = TokenId.default) {
            return events?.[publicKey.toBase58()]?.[TokenId.toBase58(tokenId)] ?? [];
        },
        getActions(publicKey, tokenId = TokenId.default) {
            return (actions?.[publicKey.toBase58()]?.[Ledger.fieldToBase58(tokenId)] ?? []);
        },
        addAccount,
        testAccounts,
        setTimestamp(ms) {
            networkState.timestamp = ms;
        },
        setGlobalSlot(slot) {
            networkState.globalSlotSinceGenesis = slot;
        },
        setGlobalSlotSinceHardfork(slot) {
            networkState.globalSlotSinceHardFork = slot;
        },
        setBlockchainLength(height) {
            networkState.blockchainLength = height;
        },
        setTotalCurrency(currency) {
            networkState.totalCurrency = currency;
        },
    };
}
function RemoteBlockchain(graphqlEndpoint) {
    let accountCreationFee = UInt64.from(defaultAccountCreationFee);
    Fetch.setGraphqlEndpoint(graphqlEndpoint);
    return {
        accountCreationFee: () => accountCreationFee,
        currentSlot() {
            throw Error('currentSlot() is not implemented yet for remote blockchains.');
        },
        hasAccount(publicKey, tokenId = TokenId.default) {
            if (!currentTransaction.has() ||
                currentTransaction.get().fetchMode === 'cached') {
                return !!Fetch.getCachedAccount(publicKey, tokenId, graphqlEndpoint);
            }
            return false;
        },
        getAccount(publicKey, tokenId = TokenId.default) {
            if (currentTransaction()?.fetchMode === 'test') {
                Fetch.markAccountToBeFetched(publicKey, tokenId, graphqlEndpoint);
                let account = Fetch.getCachedAccount(publicKey, tokenId, graphqlEndpoint);
                return account ?? dummyAccount(publicKey);
            }
            if (!currentTransaction.has() ||
                currentTransaction.get().fetchMode === 'cached') {
                let account = Fetch.getCachedAccount(publicKey, tokenId, graphqlEndpoint);
                if (account !== undefined)
                    return account;
            }
            throw Error(`${reportGetAccountError(publicKey.toBase58(), TokenId.toBase58(tokenId))}\nGraphql endpoint: ${graphqlEndpoint}`);
        },
        getNetworkState() {
            if (currentTransaction()?.fetchMode === 'test') {
                Fetch.markNetworkToBeFetched(graphqlEndpoint);
                let network = Fetch.getCachedNetwork(graphqlEndpoint);
                return network ?? defaultNetworkState();
            }
            if (!currentTransaction.has() ||
                currentTransaction.get().fetchMode === 'cached') {
                let network = Fetch.getCachedNetwork(graphqlEndpoint);
                if (network !== undefined)
                    return network;
            }
            throw Error(`getNetworkState: Could not fetch network state from graphql endpoint ${graphqlEndpoint}`);
        },
        sendTransaction(txn) {
            txn.sign();
            let sendPromise = Fetch.sendZkapp(txn.toJSON());
            return {
                async wait() {
                    let [response, error] = await sendPromise;
                    if (error === undefined) {
                        if (response.data === null &&
                            response.errors?.length > 0) {
                            console.log('got graphql errors', response.errors);
                        }
                        else {
                            console.log('got graphql response', response?.data);
                            console.log('Info: waiting for inclusion in a block is not implemented yet.');
                        }
                    }
                    else {
                        console.log('got fetch error', error);
                    }
                },
            };
        },
        async transaction(sender, f) {
            let tx = createTransaction(sender, f, {
                fetchMode: 'test',
                isFinalRunOutsideCircuit: false,
            });
            await Fetch.fetchMissingData(graphqlEndpoint);
            let hasProofs = tx.transaction.otherParties.some(Authorization.hasLazyProof);
            return createTransaction(sender, f, {
                fetchMode: 'cached',
                isFinalRunOutsideCircuit: !hasProofs,
            });
        },
        async fetchEvents() {
            throw Error('fetchEvents() is not implemented yet for remote blockchains.');
        },
        getActions() {
            throw Error('fetchEvents() is not implemented yet for remote blockchains.');
        },
    };
}
function BerkeleyQANet(graphqlEndpoint) {
    return RemoteBlockchain(graphqlEndpoint);
}
let activeInstance = {
    accountCreationFee: () => UInt64.from(defaultAccountCreationFee),
    currentSlot: () => {
        throw new Error('must call Mina.setActiveInstance first');
    },
    hasAccount(publicKey, tokenId = TokenId.default) {
        if (!currentTransaction.has() ||
            currentTransaction.get().fetchMode === 'cached') {
            return !!Fetch.getCachedAccount(publicKey, tokenId, Fetch.defaultGraphqlEndpoint);
        }
        return false;
    },
    getAccount(publicKey, tokenId = TokenId.default) {
        if (currentTransaction()?.fetchMode === 'test') {
            Fetch.markAccountToBeFetched(publicKey, tokenId, Fetch.defaultGraphqlEndpoint);
            return dummyAccount(publicKey);
        }
        if (!currentTransaction.has() ||
            currentTransaction.get().fetchMode === 'cached') {
            let account = Fetch.getCachedAccount(publicKey, tokenId, Fetch.defaultGraphqlEndpoint);
            if (account === undefined)
                throw Error(`${reportGetAccountError(publicKey.toBase58(), TokenId.toBase58(tokenId))}\n\nEither call Mina.setActiveInstance first or explicitly add the account with addCachedAccount`);
            return account;
        }
        throw new Error('must call Mina.setActiveInstance first');
    },
    getNetworkState() {
        throw new Error('must call Mina.setActiveInstance first');
    },
    sendTransaction() {
        throw new Error('must call Mina.setActiveInstance first');
    },
    async transaction(sender, f) {
        return createTransaction(sender, f);
    },
    fetchEvents() {
        throw Error('must call Mina.setActiveInstance first');
    },
    getActions() {
        throw Error('must call Mina.setActiveInstance first');
    },
};
/**
 * Set the currently used Mina instance.
 */
function setActiveInstance(m) {
    activeInstance = m;
}
function transaction(senderOrF, fOrUndefined) {
    let sender;
    let f;
    if (fOrUndefined !== undefined) {
        sender = senderOrF;
        f = fOrUndefined;
    }
    else {
        sender = undefined;
        f = senderOrF;
    }
    return activeInstance.transaction(sender, f);
}
/**
 * @return The current slot number, according to the active Mina instance.
 */
function currentSlot() {
    return activeInstance.currentSlot();
}
/**
 * @return The account data associated to the given public key.
 */
function getAccount(publicKey, tokenId) {
    return activeInstance.getAccount(publicKey, tokenId);
}
function hasAccount(publicKey, tokenId) {
    return activeInstance.hasAccount(publicKey, tokenId);
}
/**
 * @return Data associated with the current state of the Mina network.
 */
function getNetworkState() {
    return activeInstance.getNetworkState();
}
/**
 * @return The balance associated to the given public key.
 */
function getBalance(publicKey, tokenId) {
    return activeInstance.getAccount(publicKey, tokenId).balance;
}
function accountCreationFee() {
    return activeInstance.accountCreationFee();
}
function sendTransaction(txn) {
    return activeInstance.sendTransaction(txn);
}
/**
 * @return A list of emitted events associated to the given public key.
 */
async function fetchEvents(publicKey, tokenId) {
    return await activeInstance.fetchEvents(publicKey, tokenId);
}
/**
 * @return A list of emitted sequencing actions associated to the given public key.
 */
function getActions(publicKey, tokenId) {
    return activeInstance.getActions(publicKey, tokenId);
}
function dummyAccount(pubkey) {
    return {
        balance: UInt64.zero,
        nonce: UInt32.zero,
        publicKey: pubkey ?? PublicKey.empty(),
        tokenId: TokenId.default,
        appState: Array(ZkappStateLength).fill(Field.zero),
        tokenSymbol: '',
        provedState: Bool(false),
        receiptChainHash: emptyReceiptChainHash(),
        delegate: undefined,
        sequenceState: SequenceEvents.emptySequenceState(),
    };
}
function defaultNetworkState() {
    let epochData = {
        ledger: { hash: Field.zero, totalCurrency: UInt64.zero },
        seed: Field.zero,
        startCheckpoint: Field.zero,
        lockCheckpoint: Field.zero,
        epochLength: UInt32.zero,
    };
    return {
        snarkedLedgerHash: Field.zero,
        timestamp: UInt64.zero,
        blockchainLength: UInt32.zero,
        minWindowDensity: UInt32.zero,
        totalCurrency: UInt64.zero,
        globalSlotSinceHardFork: UInt32.zero,
        globalSlotSinceGenesis: UInt32.zero,
        stakingEpochData: epochData,
        nextEpochData: cloneCircuitValue(epochData),
    };
}
//# sourceMappingURL=mina.js.map