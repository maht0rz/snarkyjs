import { circuitArray, circuitValue, cloneCircuitValue, memoizationContext, } from './circuit_value.js';
import { Field, Bool, Ledger, Circuit, Pickles, } from '../snarky.js';
import { Types } from '../snarky/types.js';
import { PrivateKey, PublicKey } from './signature.js';
import { UInt64, UInt32, Int64 } from './int.js';
import * as Mina from './mina.js';
import * as Precondition from './precondition.js';
import { inCheckedComputation, snarkContext } from './proof_system.js';
import { emptyHashWithPrefix, hashWithPrefix, packToFields, prefixes, TokenSymbol, } from './hash.js';
import * as Encoding from './encoding.js';
// external API
export { Permissions, Party, ZkappPublicInput };
// internal API
export { Permission, Preconditions, Body, Authorization, partiesToJson, addMissingSignatures, addMissingProofs, signJsonTransaction, ZkappStateLength, Events, SequenceEvents, partyToPublicInput, TokenId, Token, CallForest, createChildParty, };
const ZkappStateLength = 8;
function keep(dummy) {
    return { isSome: Bool(false), value: dummy };
}
const True = () => Bool(true);
const False = () => Bool(false);
let Permission = {
    /**
     * Modification is impossible.
     */
    impossible: () => ({
        constant: True(),
        signatureNecessary: True(),
        signatureSufficient: False(),
    }),
    /**
     * Modification is always permitted
     */
    none: () => ({
        constant: True(),
        signatureNecessary: False(),
        signatureSufficient: True(),
    }),
    /**
     * Modification is permitted by zkapp proofs only
     */
    proof: () => ({
        constant: False(),
        signatureNecessary: False(),
        signatureSufficient: False(),
    }),
    /**
     * Modification is permitted by signatures only, using the private key of the zkapp account
     */
    signature: () => ({
        constant: False(),
        signatureNecessary: True(),
        signatureSufficient: True(),
    }),
    /**
     * Modification is permitted by zkapp proofs or signatures
     */
    proofOrSignature: () => ({
        constant: False(),
        signatureNecessary: False(),
        signatureSufficient: True(),
    }),
};
let Permissions = {
    ...Permission,
    /**
     * Default permissions are:
     *   [[ Permissions.editState ]]=[[ Permission.proof ]]
     *   [[ Permissions.send ]]=[[ Permission.signature ]]
     *   [[ Permissions.receive ]]=[[ Permission.proof ]]
     *   [[ Permissions.setDelegate ]]=[[ Permission.signature ]]
     *   [[ Permissions.setPermissions ]]=[[ Permission.signature ]]
     *   [[ Permissions.setVerificationKey ]]=[[ Permission.signature ]]
     *   [[ Permissions.setZkappUri ]]=[[ Permission.signature ]]
     *   [[ Permissions.editSequenceState ]]=[[ Permission.proof ]]
     *   [[ Permissions.setTokenSymbol ]]=[[ Permission.signature ]]
     */
    default: () => ({
        editState: Permission.proof(),
        send: Permission.signature(),
        receive: Permission.none(),
        setDelegate: Permission.signature(),
        setPermissions: Permission.signature(),
        setVerificationKey: Permission.signature(),
        setZkappUri: Permission.signature(),
        editSequenceState: Permission.proof(),
        setTokenSymbol: Permission.signature(),
        incrementNonce: Permissions.signature(),
        setVotingFor: Permission.signature(),
    }),
    initial: () => ({
        editState: Permission.signature(),
        send: Permission.signature(),
        receive: Permission.none(),
        setDelegate: Permission.signature(),
        setPermissions: Permission.signature(),
        setVerificationKey: Permission.signature(),
        setZkappUri: Permission.signature(),
        editSequenceState: Permission.signature(),
        setTokenSymbol: Permission.signature(),
        incrementNonce: Permissions.signature(),
        setVotingFor: Permission.signature(),
    }),
};
const Events = {
    empty() {
        let hash = emptyHashWithPrefix('MinaZkappEventsEmpty');
        return { hash, data: [] };
    },
    pushEvent(events, event) {
        let eventHash = hashWithPrefix(prefixes.event, event);
        let hash = hashWithPrefix(prefixes.events, [events.hash, eventHash]);
        return { hash, data: [event, ...events.data] };
    },
    hash(events) {
        return events.reverse().reduce(Events.pushEvent, Events.empty()).hash;
    },
};
const SequenceEvents = {
    // same as events but w/ different hash prefixes
    empty() {
        let hash = emptyHashWithPrefix('MinaZkappSequenceEmpty');
        return { hash, data: [] };
    },
    pushEvent(sequenceEvents, event) {
        let eventHash = hashWithPrefix(prefixes.event, event);
        let hash = hashWithPrefix(prefixes.sequenceEvents, [
            sequenceEvents.hash,
            eventHash,
        ]);
        return { hash, data: [event, ...sequenceEvents.data] };
    },
    hash(events) {
        return events
            .reverse()
            .reduce(SequenceEvents.pushEvent, SequenceEvents.empty()).hash;
    },
    // different than events
    emptySequenceState() {
        return emptyHashWithPrefix('MinaZkappSequenceStateEmptyElt');
    },
    updateSequenceState(state, sequenceEventsHash) {
        return hashWithPrefix(prefixes.sequenceEvents, [state, sequenceEventsHash]);
    },
};
const Body = {
    noUpdate() {
        return {
            appState: Array(ZkappStateLength)
                .fill(0)
                .map(() => keep(Field.zero)),
            delegate: keep(PublicKey.empty()),
            // TODO
            verificationKey: keep({ data: '', hash: Field.zero }),
            permissions: keep(Permissions.initial()),
            // TODO don't hard code
            zkappUri: keep({
                data: '',
                hash: Field('22930868938364086394602058221028773520482901241511717002947639863679740444066'),
            }),
            // TODO
            tokenSymbol: keep(TokenSymbol.empty),
            timing: keep({
                cliffAmount: UInt64.zero,
                cliffTime: UInt32.zero,
                initialMinimumBalance: UInt64.zero,
                vestingIncrement: UInt64.zero,
                vestingPeriod: UInt32.zero,
            }),
            votingFor: keep(Field.zero),
        };
    },
    /**
     * A body that Don't change part of the underlying account record.
     */
    keepAll(publicKey) {
        return {
            publicKey,
            update: Body.noUpdate(),
            tokenId: TokenId.default,
            balanceChange: Int64.zero,
            events: Events.empty(),
            sequenceEvents: SequenceEvents.empty(),
            caller: TokenId.default,
            callData: Field.zero,
            callDepth: 0,
            preconditions: Preconditions.ignoreAll(),
            // the default assumption is that snarkyjs transactions don't include the fee payer
            // so useFullCommitment has to be false for signatures to be correct
            useFullCommitment: Bool(false),
            // this should be set to true if parties are signed
            incrementNonce: Bool(false),
        };
    },
    dummy() {
        return Body.keepAll(PublicKey.empty());
    },
};
const FeePayerBody = {
    keepAll(publicKey, nonce) {
        return {
            publicKey,
            nonce,
            fee: UInt64.zero,
            validUntil: undefined,
        };
    },
};
let NetworkPrecondition = {
    ignoreAll() {
        let stakingEpochData = {
            ledger: { hash: ignore(Field.zero), totalCurrency: ignore(uint64()) },
            seed: ignore(Field.zero),
            startCheckpoint: ignore(Field.zero),
            lockCheckpoint: ignore(Field.zero),
            epochLength: ignore(uint32()),
        };
        let nextEpochData = cloneCircuitValue(stakingEpochData);
        return {
            snarkedLedgerHash: ignore(Field.zero),
            timestamp: ignore(uint64()),
            blockchainLength: ignore(uint32()),
            minWindowDensity: ignore(uint32()),
            totalCurrency: ignore(uint64()),
            globalSlotSinceHardFork: ignore(uint32()),
            globalSlotSinceGenesis: ignore(uint32()),
            stakingEpochData,
            nextEpochData,
        };
    },
};
/**
 * Ignores a `dummy`
 *
 * @param dummy The value to ignore
 * @returns Always an ignored value regardless of the input.
 */
function ignore(dummy) {
    return { isSome: Bool(false), value: dummy };
}
/**
 * Ranges between all uint32 values
 */
const uint32 = () => ({ lower: UInt32.fromNumber(0), upper: UInt32.MAXINT() });
/**
 * Ranges between all uint64 values
 */
const uint64 = () => ({ lower: UInt64.fromNumber(0), upper: UInt64.MAXINT() });
const AccountPrecondition = {
    ignoreAll() {
        let appState = [];
        for (let i = 0; i < ZkappStateLength; ++i) {
            appState.push(ignore(Field.zero));
        }
        return {
            balance: ignore(uint64()),
            nonce: ignore(uint32()),
            receiptChainHash: ignore(Field.zero),
            delegate: ignore(PublicKey.empty()),
            state: appState,
            sequenceState: ignore(SequenceEvents.emptySequenceState()),
            provedState: ignore(Bool(false)),
            isNew: ignore(Bool(false)),
        };
    },
    nonce(nonce) {
        let p = AccountPrecondition.ignoreAll();
        Party.assertEquals(p.nonce, nonce);
        return p;
    },
};
const Preconditions = {
    ignoreAll() {
        return {
            account: AccountPrecondition.ignoreAll(),
            network: NetworkPrecondition.ignoreAll(),
        };
    },
};
const TokenId = {
    ...Types.TokenId,
    ...Encoding.TokenId,
    get default() {
        return Field.one;
    },
};
class Token {
    constructor(options) {
        let { tokenOwner, parentTokenId } = options ?? {};
        // Reassign to default tokenId if undefined
        parentTokenId ?? (parentTokenId = TokenId.default);
        // Check if we can create a custom tokenId
        try {
            Ledger.customTokenId(tokenOwner, parentTokenId);
        }
        catch (e) {
            throw new Error(`Could not create a custom token id:\nError: ${e.message}`);
        }
        this.parentTokenId = parentTokenId;
        this.tokenOwner = tokenOwner;
        if (tokenOwner.toFields().every((x) => x.isConstant()) &&
            parentTokenId.isConstant()) {
            this.id = Ledger.customTokenId(tokenOwner, this.parentTokenId);
        }
        else {
            this.id = Ledger.customTokenIdChecked(tokenOwner, this.parentTokenId);
        }
    }
}
Token.Id = TokenId;
class Party {
    constructor(body, authorization = {}, isSelf = false) {
        this.lazyAuthorization = undefined;
        this.children = [];
        this.parent = undefined;
        this.body = body;
        this.authorization = authorization;
        let { account, network } = Precondition.preconditions(this, isSelf);
        this.account = account;
        this.network = network;
        this.isSelf = isSelf;
    }
    static clone(party) {
        let body = cloneCircuitValue(party.body);
        let authorization = cloneCircuitValue(party.authorization);
        let clonedParty = new Party(body, authorization, party.isSelf);
        clonedParty.lazyAuthorization = cloneCircuitValue(party.lazyAuthorization);
        clonedParty.children = party.children;
        clonedParty.parent = party.parent;
        return clonedParty;
    }
    token() {
        let thisParty = this;
        let customToken = new Token({
            tokenOwner: thisParty.body.publicKey,
            parentTokenId: thisParty.body.tokenId,
        });
        return {
            id: customToken.id,
            parentTokenId: customToken.parentTokenId,
            tokenOwner: customToken.tokenOwner,
            mint({ address, amount, }) {
                let receiverParty = createChildParty(thisParty, address, {
                    caller: this.id,
                    tokenId: this.id,
                });
                // Add the amount to mint to the receiver's account
                let { magnitude, sgn } = receiverParty.body.balanceChange;
                receiverParty.body.balanceChange = new Int64(magnitude, sgn).add(amount);
            },
            burn({ address, amount, }) {
                let senderParty = createChildParty(thisParty, address, {
                    caller: this.id,
                    tokenId: this.id,
                    useFullCommitment: Bool(true),
                });
                // Sub the amount to burn from the sender's account
                let { magnitude, sgn } = senderParty.body.balanceChange;
                senderParty.body.balanceChange = new Int64(magnitude, sgn).sub(amount);
                // Require signature from the sender account being deducted
                Authorization.setLazySignature(senderParty);
            },
            send({ from, to, amount, }) {
                // Create a new party for the sender to send the amount to the receiver
                let senderParty = createChildParty(thisParty, from, {
                    caller: this.id,
                    tokenId: this.id,
                    useFullCommitment: Bool(true),
                });
                let i0 = senderParty.body.balanceChange;
                senderParty.body.balanceChange = new Int64(i0.magnitude, i0.sgn).sub(amount);
                // Require signature from the sender party
                Authorization.setLazySignature(senderParty);
                let receiverParty = createChildParty(thisParty, to, {
                    caller: this.id,
                    tokenId: this.id,
                });
                // Add the amount to send to the receiver's account
                let i1 = receiverParty.body.balanceChange;
                receiverParty.body.balanceChange = new Int64(i1.magnitude, i1.sgn).add(amount);
            },
        };
    }
    get tokenId() {
        return this.body.tokenId;
    }
    get tokenSymbol() {
        let party = this;
        return {
            set(tokenSymbol) {
                Party.setValue(party.update.tokenSymbol, TokenSymbol.from(tokenSymbol));
            },
        };
    }
    send({ to, amount, }) {
        let party = this;
        let receiverParty;
        if (to.constructor === Party) {
            receiverParty = to;
            makeChildParty(party, receiverParty);
        }
        else {
            receiverParty = createChildParty(party, to, {
                tokenId: party.body.tokenId,
                caller: party.body.tokenId,
            });
        }
        // Sub the amount from the sender's account
        let i0 = party.body.balanceChange;
        party.body.balanceChange = new Int64(i0.magnitude, i0.sgn).sub(amount);
        // Add the amount to send to the receiver's account
        let i1 = receiverParty.body.balanceChange;
        receiverParty.body.balanceChange = new Int64(i1.magnitude, i1.sgn).add(amount);
    }
    get balance() {
        let party = this;
        return {
            addInPlace(x) {
                let { magnitude, sgn } = party.body.balanceChange;
                party.body.balanceChange = new Int64(magnitude, sgn).add(x);
            },
            subInPlace(x) {
                let { magnitude, sgn } = party.body.balanceChange;
                party.body.balanceChange = new Int64(magnitude, sgn).sub(x);
            },
        };
    }
    get update() {
        return this.body.update;
    }
    static setValue(maybeValue, value) {
        maybeValue.isSome = Bool(true);
        maybeValue.value = value;
    }
    /** Constrain a property to lie between lower and upper bounds.
     *
     * @param property The property to constrain
     * @param lower The lower bound
     * @param upper The upper bound
     *
     * Example: To constrain the account balance of a SmartContract to lie between 0 and 20 MINA, you can use
     *
     * ```ts
     * @method onlyRunsWhenBalanceIsLow() {
     *   let lower = UInt64.zero;
     *   let upper = UInt64.fromNumber(20e9);
     *   Party.assertBetween(this.self.body.preconditions.account.balance, lower, upper);
     *   // ...
     * }
     * ```
     */
    static assertBetween(property, lower, upper) {
        property.isSome = Bool(true);
        property.value.lower = lower;
        property.value.upper = upper;
    }
    // TODO: assertGreaterThan, assertLowerThan?
    /** Fix a property to a certain value.
     *
     * @param property The property to constrain
     * @param value The value it is fixed to
     *
     * Example: To fix the account nonce of a SmartContract to 0, you can use
     *
     * ```ts
     * @method onlyRunsWhenNonceIsZero() {
     *   Party.assertEquals(this.self.body.preconditions.account.nonce, UInt32.zero);
     *   // ...
     * }
     * ```
     */
    static assertEquals(property, value) {
        property.isSome = Bool(true);
        if ('lower' in property.value && 'upper' in property.value) {
            property.value.lower = value;
            property.value.upper = value;
        }
        else {
            property.value = value;
        }
    }
    get publicKey() {
        return this.body.publicKey;
    }
    signInPlace(privateKey, fallbackToZeroNonce = false) {
        this.setNoncePrecondition(fallbackToZeroNonce);
        this.body.incrementNonce = Bool(true);
        Authorization.setLazySignature(this, { privateKey });
    }
    sign(privateKey) {
        let party = Party.clone(this);
        party.signInPlace(privateKey);
        return party;
    }
    static signFeePayerInPlace(feePayer, privateKey, fallbackToZeroNonce = false) {
        feePayer.body.nonce = this.getNonce(feePayer, fallbackToZeroNonce);
        feePayer.authorization = Ledger.dummySignature();
        feePayer.lazyAuthorization = { kind: 'lazy-signature', privateKey };
    }
    // TODO this needs to be more intelligent about previous nonces in the transaction, similar to Party.createSigned
    static getNonce(party, fallbackToZero = false) {
        let nonce;
        let inProver = Circuit.inProver();
        if (inProver || !Circuit.inCheckedComputation()) {
            try {
                let account = Mina.getAccount(party.body.publicKey, party.body.tokenId ?? TokenId.default);
                nonce = account.nonce;
            }
            catch (err) {
                if (fallbackToZero)
                    nonce = UInt32.zero;
                else
                    throw err;
            }
            nonce = inProver ? Circuit.witness(UInt32, () => nonce) : nonce;
        }
        else {
            nonce = Circuit.witness(UInt32, () => {
                throw Error('this should never happen');
            });
        }
        return nonce;
    }
    setNoncePrecondition(fallbackToZero = false) {
        let nonce = Party.getNonce(this, fallbackToZero);
        let accountPrecondition = this.body.preconditions.account;
        Party.assertEquals(accountPrecondition.nonce, nonce);
        return nonce;
    }
    toFields() {
        return Types.Party.toFields(this);
    }
    toJSON() {
        return Types.Party.toJSON(this);
    }
    hash() {
        // these two ways of hashing are (and have to be) consistent / produce the same hash
        // TODO: there's no reason anymore to use two different hashing methods here!
        // -- the "inCheckedComputation" branch works in all circumstances now
        // we just leave this here for a couple more weeks, because it checks consistency between
        // JS & OCaml hashing on *every single party proof* we create. It will give us 100%
        // confidence that the two implementations are equivalent, and catch regressions quickly
        if (inCheckedComputation()) {
            let input = Types.Party.toInput(this);
            return hashWithPrefix(prefixes.body, packToFields(input));
        }
        else {
            let json = Types.Party.toJSON(this);
            return Ledger.hashPartyFromJson(JSON.stringify(json));
        }
    }
    // TODO: this was only exposed to be used in a unit test
    // consider removing when we have inline unit tests
    toPublicInput() {
        let party = this.hash();
        let calls = CallForest.hashChildren(this);
        return { party, calls };
    }
    static defaultParty(address) {
        const body = Body.keepAll(address);
        return new Party(body);
    }
    static defaultFeePayer(address, key, nonce) {
        let body = FeePayerBody.keepAll(address, nonce);
        return {
            body,
            authorization: Ledger.dummySignature(),
            lazyAuthorization: { kind: 'lazy-signature', privateKey: key },
        };
    }
    static dummyFeePayer() {
        let body = FeePayerBody.keepAll(PublicKey.empty(), UInt32.zero);
        return { body, authorization: Ledger.dummySignature() };
    }
    static createUnsigned(publicKey) {
        let party = Party.defaultParty(publicKey);
        Mina.currentTransaction()?.parties.push(party);
        return party;
    }
    static createSigned(signer) {
        let publicKey = signer.toPublicKey();
        let body = Body.keepAll(publicKey);
        if (!Mina.currentTransaction.has()) {
            throw new Error('Party.createSigned: Cannot run outside of a transaction');
        }
        // it's fine to compute the nonce outside the circuit, because we're constraining it with a precondition
        let nonce = Circuit.witness(UInt32, () => {
            let nonce = Number(Mina.getAccount(publicKey, body.tokenId).nonce.toString());
            // if the fee payer is the same party as this one, we have to start the nonce predicate at one higher,
            // bc the fee payer already increases its nonce
            let isFeePayer = Mina.currentTransaction()?.sender?.equals(signer);
            if (isFeePayer?.toBoolean())
                nonce++;
            // now, we check how often this party already updated its nonce in this tx, and increase nonce from `getAccount` by that amount
            for (let party of Mina.currentTransaction.get().parties) {
                let shouldIncreaseNonce = party.publicKey
                    .equals(publicKey)
                    .and(party.body.incrementNonce);
                if (shouldIncreaseNonce.toBoolean())
                    nonce++;
            }
            return UInt32.from(nonce);
        });
        Party.assertEquals(body.preconditions.account.nonce, nonce);
        body.incrementNonce = Bool(true);
        let party = new Party(body);
        Authorization.setLazySignature(party, { privateKey: signer });
        Mina.currentTransaction.get().parties.push(party);
        return party;
    }
    /**
     * Use this method to pay the account creation fee for another account.
     * Beware that you _don't_ need to pass in the new account!
     * Instead, the protocol will automatically identify accounts in your transaction that need funding.
     *
     * If you provide an optional `initialBalance`, this will be subtracted from the fee-paying account as well,
     * but you have to separately ensure that it's added to the new account's balance.
     *
     * @param feePayerKey the private key of the account that pays the fee
     * @param initialBalance the initial balance of the new account (default: 0)
     */
    static fundNewAccount(feePayerKey, { initialBalance = UInt64.zero } = {}) {
        let party = Party.createSigned(feePayerKey);
        let amount = initialBalance instanceof UInt64
            ? initialBalance
            : UInt64.fromString(`${initialBalance}`);
        party.balance.subInPlace(amount.add(Mina.accountCreationFee()));
    }
    static witness(type, compute, skipCheck = false) {
        // construct the circuit type for a party + other result
        let partyType = circuitArray(Field, Types.Party.sizeInFields());
        let combinedType = circuitValue({
            party: partyType,
            result: type,
        });
        // compute the witness, with the party represented as plain field elements
        // (in the prover, also store the actual party)
        let proverParty;
        let fieldsAndResult = Circuit.witness(combinedType, () => {
            let { party, result } = compute();
            proverParty = party;
            return { party: Types.Party.toFields(party), result };
        });
        // get back a Types.Party from the fields + aux (where aux is just the default in compile)
        let aux = Types.Party.toAuxiliary(proverParty);
        let rawParty = Types.Party.fromFields(fieldsAndResult.party, aux);
        // usually when we introduce witnesses, we add checks for their type-specific properties (e.g., booleanness).
        // a party, however, might already be forced to be valid by the on-chain transaction logic,
        // allowing us to skip expensive checks in user proofs.
        if (!skipCheck)
            Types.Party.check(rawParty);
        // construct the full Party instance from the raw party + (maybe) the prover party
        let party = new Party(rawParty.body, rawParty.authorization);
        party.lazyAuthorization =
            proverParty && cloneCircuitValue(proverParty.lazyAuthorization);
        party.children = proverParty?.children ?? [];
        party.parent = proverParty?.parent;
        return { party, result: fieldsAndResult.result };
    }
}
const CallForest = {
    // similar to Mina_base.Parties.Call_forest.to_parties_list
    // takes a list of parties, which each can have children, so they form a "forest" (list of trees)
    // returns a flattened list, with `party.body.callDepth` specifying positions in the forest
    toFlatList(forest, depth = 0) {
        let parties = [];
        for (let party of forest) {
            party.body.callDepth = depth;
            let children = party.children.map((c) => c.party);
            parties.push(party, ...CallForest.toFlatList(children, depth + 1));
        }
        return parties;
    },
    // Mina_base.Parties.Digest.Forest.empty
    emptyHash() {
        return Field.zero;
    },
    // similar to Mina_base.Parties.Call_forest.accumulate_hashes
    // hashes a party's children (and their children, and ...) to compute the `calls` field of ZkappPublicInput
    hashChildren(parent) {
        let stackHash = CallForest.emptyHash();
        for (let { party, calls } of parent.children.reverse()) {
            // only compute calls if it's not there yet --
            // this gives us the flexibility to witness only direct children of a zkApp
            calls ?? (calls = CallForest.hashChildren(party));
            let nodeHash = hashWithPrefix(prefixes.partyNode, [party.hash(), calls]);
            stackHash = hashWithPrefix(prefixes.partyCons, [nodeHash, stackHash]);
        }
        return stackHash;
    },
};
function createChildParty(parent, childAddress, options) {
    let child = Party.defaultParty(childAddress);
    const { caller, tokenId, useFullCommitment } = options ?? {};
    child.body.caller = caller ?? child.body.caller;
    child.body.tokenId = tokenId ?? child.body.tokenId;
    child.body.useFullCommitment =
        useFullCommitment ?? child.body.useFullCommitment;
    makeChildParty(parent, child);
    return child;
}
function makeChildParty(parent, child) {
    child.body.callDepth = parent.body.callDepth + 1;
    child.parent = parent;
    if (!parent.children.find(({ party }) => party === child)) {
        parent.children.push({ party: child, calls: undefined });
    }
}
function partiesToJson({ feePayer, otherParties, memo }) {
    memo = Ledger.memoToBase58(memo);
    return Types.Parties.toJSON({ feePayer, otherParties, memo });
}
const Authorization = {
    hasLazyProof(party) {
        return party.lazyAuthorization?.kind === 'lazy-proof';
    },
    hasAny(party) {
        let { authorization: auth, lazyAuthorization: lazyAuth } = party;
        return !!(lazyAuth || 'proof' in auth || 'signature' in auth);
    },
    setSignature(party, signature) {
        party.authorization = { signature };
        party.lazyAuthorization = undefined;
    },
    setProof(party, proof) {
        party.authorization = { proof };
        party.lazyAuthorization = undefined;
    },
    setLazySignature(party, signature) {
        signature ?? (signature = {});
        party.authorization = {};
        party.lazyAuthorization = { ...signature, kind: 'lazy-signature' };
    },
    setLazyProof(party, proof) {
        party.authorization = {};
        party.lazyAuthorization = { ...proof, kind: 'lazy-proof' };
    },
};
function addMissingSignatures(parties, additionalKeys = []) {
    let additionalPublicKeys = additionalKeys.map((sk) => sk.toPublicKey());
    let { commitment, fullCommitment } = Ledger.transactionCommitments(JSON.stringify(partiesToJson(parties)));
    function addFeePayerSignature(party) {
        let { body, authorization, lazyAuthorization } = cloneCircuitValue(party);
        if (lazyAuthorization === undefined)
            return { body, authorization };
        let { privateKey } = lazyAuthorization;
        if (privateKey === undefined) {
            let i = additionalPublicKeys.findIndex((pk) => pk === party.body.publicKey);
            if (i === -1) {
                let pk = PublicKey.toBase58(party.body.publicKey);
                throw Error(`addMissingSignatures: Cannot add signature for fee payer (${pk}), private key is missing.`);
            }
            privateKey = additionalKeys[i];
        }
        let signature = Ledger.signFieldElement(fullCommitment, privateKey);
        return { body, authorization: signature };
    }
    function addSignature(party) {
        party = Party.clone(party);
        if (party.lazyAuthorization?.kind !== 'lazy-signature') {
            return party;
        }
        let { privateKey } = party.lazyAuthorization;
        if (privateKey === undefined) {
            let i = additionalPublicKeys.findIndex((pk) => pk.equals(party.body.publicKey));
            if (i === -1)
                throw Error(`addMissingSignatures: Cannot add signature for ${party.publicKey.toBase58()}, private key is missing.`);
            privateKey = additionalKeys[i];
        }
        let transactionCommitment = party.body.useFullCommitment.toBoolean()
            ? fullCommitment
            : commitment;
        let signature = Ledger.signFieldElement(transactionCommitment, privateKey);
        Authorization.setSignature(party, signature);
        return party;
    }
    let { feePayer, otherParties, memo } = parties;
    return {
        feePayer: addFeePayerSignature(feePayer),
        otherParties: otherParties.map(addSignature),
        memo,
    };
}
let ZkappPublicInput = circuitValue({ party: Field, calls: Field }, { customObjectKeys: ['party', 'calls'] });
function partyToPublicInput(self) {
    let party = self.hash();
    let calls = CallForest.hashChildren(self);
    return { party, calls };
}
async function addMissingProofs(parties) {
    async function addProof(party) {
        party = Party.clone(party);
        if (party.lazyAuthorization?.kind !== 'lazy-proof') {
            return { partyProved: party, proof: undefined };
        }
        let { methodName, args, previousProofs, ZkappClass, memoized, blindingValue, } = party.lazyAuthorization;
        let publicInput = partyToPublicInput(party);
        let publicInputFields = ZkappPublicInput.toFields(publicInput);
        if (ZkappClass._provers === undefined)
            throw Error(`Cannot prove execution of ${methodName}(), no prover found. ` +
                `Try calling \`await ${ZkappClass.name}.compile(address)\` first, this will cache provers in the background.`);
        let provers = ZkappClass._provers;
        let methodError = `Error when computing proofs: Method ${methodName} not found. ` +
            `Make sure your environment supports decorators, and annotate with \`@method ${methodName}\`.`;
        if (ZkappClass._methods === undefined)
            throw Error(methodError);
        let i = ZkappClass._methods.findIndex((m) => m.methodName === methodName);
        if (i === -1)
            throw Error(methodError);
        let [, [, proof]] = await snarkContext.runWithAsync({ inProver: true, witnesses: args }, () => memoizationContext.runWithAsync({ memoized, currentIndex: 0, blindingValue }, () => provers[i](publicInputFields, previousProofs)));
        Authorization.setProof(party, Pickles.proofToBase64Transaction(proof));
        let maxProofsVerified = ZkappClass._maxProofsVerified;
        const Proof = ZkappClass.Proof();
        return {
            partyProved: party,
            proof: new Proof({ publicInput, proof, maxProofsVerified }),
        };
    }
    let { feePayer, otherParties, memo } = parties;
    // compute proofs serially. in parallel would clash with our global variable hacks
    let otherPartiesProved = [];
    let proofs = [];
    for (let party of otherParties) {
        let { partyProved, proof } = await addProof(party);
        otherPartiesProved.push(partyProved);
        proofs.push(proof);
    }
    return {
        parties: { feePayer, otherParties: otherPartiesProved, memo },
        proofs,
    };
}
/**
 * Sign all parties of a transaction which belong to the account determined by [[ `privateKey` ]].
 * @returns the modified transaction JSON
 */
function signJsonTransaction(transactionJson, privateKey) {
    if (typeof privateKey === 'string')
        privateKey = PrivateKey.fromBase58(privateKey);
    let publicKey = privateKey.toPublicKey().toBase58();
    let parties = JSON.parse(transactionJson);
    let feePayer = parties.feePayer;
    if (feePayer.body.publicKey === publicKey) {
        parties = JSON.parse(Ledger.signFeePayer(JSON.stringify(parties), privateKey));
    }
    for (let i = 0; i < parties.otherParties.length; i++) {
        let party = parties.otherParties[i];
        if (party.body.publicKey === publicKey &&
            party.authorization.proof === null) {
            parties = JSON.parse(Ledger.signOtherParty(JSON.stringify(parties), privateKey, i));
        }
    }
    return JSON.stringify(parties);
}
//# sourceMappingURL=party.js.map