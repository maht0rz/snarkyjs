export { Group, Scalar, AsFieldElements, Ledger, isReady, shutdown, } from './snarky.js';
export { Field, Bool } from './lib/core.js';
export type { VerificationKey, Keypair } from './snarky.js';
export * from './snarky/addons.js';
export { Poseidon } from './lib/hash.js';
export * from './lib/signature.js';
export { Circuit, CircuitValue, prop, arrayProp, matrixProp, public_, circuitMain, circuitValue, } from './lib/circuit_value.js';
export { UInt32, UInt64, Int64, Sign } from './lib/int.js';
export { Types } from './snarky/types.js';
export * as Mina from './lib/mina.js';
export { SmartContract, method, deploy, DeployArgs, signFeePayer, declareMethods, } from './lib/zkapp.js';
export { state, State, declareState } from './lib/state.js';
export { Proof, SelfProof, ZkProgram, verify } from './lib/proof_system.js';
export { Token, Party, Permissions, ZkappPublicInput, partiesToJson, } from './lib/party.js';
export { fetchAccount, fetchLastBlock, addCachedAccount, setGraphqlEndpoint, sendZkapp, } from './lib/fetch.js';
export * as Encryption from './lib/encryption.js';
export * as Encoding from './lib/encoding.js';
export { Character, CircuitString } from './lib/string.js';
import { Callback } from './lib/zkapp.js';
import { AsFieldsAndAux as AsFieldsAndAux_ } from './lib/circuit_value.js';
export { Experimental };
declare type Callback_ = Callback;
/**
 * This module exposes APIs that are unstable, in the sense that the API surface is expected to change.
 * (Not unstable in the sense that they are less functional or tested than other parts.)
 */
declare namespace Experimental {
    let Reducer: (<T extends import("./snarky.js").AsFieldElements<any>, A extends import("./snarky.js").InferAsFieldElements<T>>(reducer: {
        actionType: T;
    }) => {
        dispatch(action: A): void;
        reduce<State>(actions: A[][], stateType: import("./snarky.js").AsFieldElements<State>, reduce: (state: State, action: A) => State, initial: {
            state: State;
            actionsHash: import("./snarky.js").Field;
        }, options?: {
            maxTransactionsWithActions?: number | undefined;
        } | undefined): {
            state: State;
            actionsHash: import("./snarky.js").Field;
        };
        getActions({ fromActionHash, endActionHash, }: {
            fromActionHash?: import("./snarky.js").Field | undefined;
            endActionHash?: import("./snarky.js").Field | undefined;
        }): A[][];
    }) & {
        initialActionsHash: import("./snarky.js").Field;
    };
    let createChildParty: typeof import("./lib/party.js").createChildParty;
    let memoizeWitness: typeof import("./lib/circuit_value.js").memoizeWitness;
    let jsLayout: {
        Parties: {
            type: string;
            name: string;
            docs: null;
            keys: string[];
            entries: {
                feePayer: {
                    type: string;
                    name: string;
                    docs: null;
                    keys: string[];
                    entries: {
                        body: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                publicKey: {
                                    type: string;
                                };
                                fee: {
                                    type: string;
                                };
                                validUntil: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                    };
                                };
                                nonce: {
                                    type: string;
                                };
                            };
                            docEntries: {
                                publicKey: null;
                                fee: null;
                                validUntil: null;
                                nonce: null;
                            };
                        };
                        authorization: {
                            type: string;
                        };
                    };
                    docEntries: {
                        body: null;
                        authorization: null;
                    };
                };
                otherParties: {
                    type: string;
                    inner: {
                        type: string;
                        name: string;
                        docs: string;
                        keys: string[];
                        entries: {
                            body: {
                                type: string;
                                name: string;
                                docs: null;
                                keys: string[];
                                entries: {
                                    publicKey: {
                                        type: string;
                                    };
                                    tokenId: {
                                        type: string;
                                    };
                                    update: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            appState: {
                                                type: string;
                                                inner: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                staticLength: number;
                                            };
                                            delegate: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            verificationKey: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        data: {
                                                            type: string;
                                                        };
                                                        hash: {
                                                            type: string;
                                                        };
                                                    };
                                                    docEntries: {
                                                        data: null;
                                                        hash: null;
                                                    };
                                                };
                                            };
                                            permissions: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        editState: {
                                                            type: string;
                                                        };
                                                        send: {
                                                            type: string;
                                                        };
                                                        receive: {
                                                            type: string;
                                                        };
                                                        setDelegate: {
                                                            type: string;
                                                        };
                                                        setPermissions: {
                                                            type: string;
                                                        };
                                                        setVerificationKey: {
                                                            type: string;
                                                        };
                                                        setZkappUri: {
                                                            type: string;
                                                        };
                                                        editSequenceState: {
                                                            type: string;
                                                        };
                                                        setTokenSymbol: {
                                                            type: string;
                                                        };
                                                        incrementNonce: {
                                                            type: string;
                                                        };
                                                        setVotingFor: {
                                                            type: string;
                                                        };
                                                    };
                                                    docEntries: {
                                                        editState: null;
                                                        send: null;
                                                        receive: null;
                                                        setDelegate: null;
                                                        setPermissions: null;
                                                        setVerificationKey: null;
                                                        setZkappUri: null;
                                                        editSequenceState: null;
                                                        setTokenSymbol: null;
                                                        incrementNonce: null;
                                                        setVotingFor: null;
                                                    };
                                                };
                                            };
                                            zkappUri: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                    checkedType: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            data: {
                                                                type: string;
                                                            };
                                                            hash: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            data: null;
                                                            hash: null;
                                                        };
                                                    };
                                                    checkedTypeName: string;
                                                };
                                            };
                                            tokenSymbol: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                    checkedType: {
                                                        type: string;
                                                    };
                                                    checkedTypeName: string;
                                                };
                                            };
                                            timing: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        initialMinimumBalance: {
                                                            type: string;
                                                        };
                                                        cliffTime: {
                                                            type: string;
                                                        };
                                                        cliffAmount: {
                                                            type: string;
                                                        };
                                                        vestingPeriod: {
                                                            type: string;
                                                        };
                                                        vestingIncrement: {
                                                            type: string;
                                                        };
                                                    };
                                                    docEntries: {
                                                        initialMinimumBalance: null;
                                                        cliffTime: null;
                                                        cliffAmount: null;
                                                        vestingPeriod: null;
                                                        vestingIncrement: null;
                                                    };
                                                };
                                            };
                                            votingFor: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        docEntries: {
                                            appState: null;
                                            delegate: null;
                                            verificationKey: null;
                                            permissions: null;
                                            zkappUri: null;
                                            tokenSymbol: null;
                                            timing: null;
                                            votingFor: null;
                                        };
                                    };
                                    balanceChange: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            magnitude: {
                                                type: string;
                                            };
                                            sgn: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            magnitude: null;
                                            sgn: null;
                                        };
                                    };
                                    incrementNonce: {
                                        type: string;
                                    };
                                    events: {
                                        type: string;
                                        inner: {
                                            type: string;
                                            inner: {
                                                type: string;
                                            };
                                            staticLength: null;
                                        };
                                        staticLength: null;
                                        checkedType: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                data: {
                                                    type: string;
                                                    inner: {
                                                        type: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                        staticLength: null;
                                                    };
                                                    staticLength: null;
                                                };
                                                hash: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                data: null;
                                                hash: null;
                                            };
                                        };
                                        checkedTypeName: string;
                                    };
                                    sequenceEvents: {
                                        type: string;
                                        inner: {
                                            type: string;
                                            inner: {
                                                type: string;
                                            };
                                            staticLength: null;
                                        };
                                        staticLength: null;
                                        checkedType: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                data: {
                                                    type: string;
                                                    inner: {
                                                        type: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                        staticLength: null;
                                                    };
                                                    staticLength: null;
                                                };
                                                hash: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                data: null;
                                                hash: null;
                                            };
                                        };
                                        checkedTypeName: string;
                                    };
                                    callData: {
                                        type: string;
                                    };
                                    callDepth: {
                                        type: string;
                                    };
                                    preconditions: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            network: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    snarkedLedgerHash: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    timestamp: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    blockchainLength: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    minWindowDensity: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    totalCurrency: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    globalSlotSinceHardFork: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    globalSlotSinceGenesis: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    stakingEpochData: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            ledger: {
                                                                type: string;
                                                                name: string;
                                                                docs: null;
                                                                keys: string[];
                                                                entries: {
                                                                    hash: {
                                                                        type: string;
                                                                        optionType: string;
                                                                        inner: {
                                                                            type: string;
                                                                        };
                                                                    };
                                                                    totalCurrency: {
                                                                        type: string;
                                                                        optionType: string;
                                                                        inner: {
                                                                            type: string;
                                                                            name: string;
                                                                            docs: null;
                                                                            keys: string[];
                                                                            entries: {
                                                                                lower: {
                                                                                    type: string;
                                                                                };
                                                                                upper: {
                                                                                    type: string;
                                                                                };
                                                                            };
                                                                            docEntries: {
                                                                                lower: null;
                                                                                upper: null;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                                docEntries: {
                                                                    hash: null;
                                                                    totalCurrency: null;
                                                                };
                                                            };
                                                            seed: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                };
                                                            };
                                                            startCheckpoint: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                };
                                                            };
                                                            lockCheckpoint: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                };
                                                            };
                                                            epochLength: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                    name: string;
                                                                    docs: null;
                                                                    keys: string[];
                                                                    entries: {
                                                                        lower: {
                                                                            type: string;
                                                                        };
                                                                        upper: {
                                                                            type: string;
                                                                        };
                                                                    };
                                                                    docEntries: {
                                                                        lower: null;
                                                                        upper: null;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        docEntries: {
                                                            ledger: null;
                                                            seed: null;
                                                            startCheckpoint: null;
                                                            lockCheckpoint: null;
                                                            epochLength: null;
                                                        };
                                                    };
                                                    nextEpochData: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            ledger: {
                                                                type: string;
                                                                name: string;
                                                                docs: null;
                                                                keys: string[];
                                                                entries: {
                                                                    hash: {
                                                                        type: string;
                                                                        optionType: string;
                                                                        inner: {
                                                                            type: string;
                                                                        };
                                                                    };
                                                                    totalCurrency: {
                                                                        type: string;
                                                                        optionType: string;
                                                                        inner: {
                                                                            type: string;
                                                                            name: string;
                                                                            docs: null;
                                                                            keys: string[];
                                                                            entries: {
                                                                                lower: {
                                                                                    type: string;
                                                                                };
                                                                                upper: {
                                                                                    type: string;
                                                                                };
                                                                            };
                                                                            docEntries: {
                                                                                lower: null;
                                                                                upper: null;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                                docEntries: {
                                                                    hash: null;
                                                                    totalCurrency: null;
                                                                };
                                                            };
                                                            seed: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                };
                                                            };
                                                            startCheckpoint: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                };
                                                            };
                                                            lockCheckpoint: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                };
                                                            };
                                                            epochLength: {
                                                                type: string;
                                                                optionType: string;
                                                                inner: {
                                                                    type: string;
                                                                    name: string;
                                                                    docs: null;
                                                                    keys: string[];
                                                                    entries: {
                                                                        lower: {
                                                                            type: string;
                                                                        };
                                                                        upper: {
                                                                            type: string;
                                                                        };
                                                                    };
                                                                    docEntries: {
                                                                        lower: null;
                                                                        upper: null;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                        docEntries: {
                                                            ledger: null;
                                                            seed: null;
                                                            startCheckpoint: null;
                                                            lockCheckpoint: null;
                                                            epochLength: null;
                                                        };
                                                    };
                                                };
                                                docEntries: {
                                                    snarkedLedgerHash: null;
                                                    timestamp: null;
                                                    blockchainLength: null;
                                                    minWindowDensity: null;
                                                    totalCurrency: null;
                                                    globalSlotSinceHardFork: null;
                                                    globalSlotSinceGenesis: null;
                                                    stakingEpochData: null;
                                                    nextEpochData: null;
                                                };
                                            };
                                            account: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    balance: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    nonce: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                            name: string;
                                                            docs: null;
                                                            keys: string[];
                                                            entries: {
                                                                lower: {
                                                                    type: string;
                                                                };
                                                                upper: {
                                                                    type: string;
                                                                };
                                                            };
                                                            docEntries: {
                                                                lower: null;
                                                                upper: null;
                                                            };
                                                        };
                                                    };
                                                    receiptChainHash: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    delegate: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    state: {
                                                        type: string;
                                                        inner: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        staticLength: number;
                                                    };
                                                    sequenceState: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    provedState: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                    isNew: {
                                                        type: string;
                                                        optionType: string;
                                                        inner: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                docEntries: {
                                                    balance: null;
                                                    nonce: null;
                                                    receiptChainHash: null;
                                                    delegate: null;
                                                    state: null;
                                                    sequenceState: null;
                                                    provedState: null;
                                                    isNew: null;
                                                };
                                            };
                                        };
                                        docEntries: {
                                            network: null;
                                            account: null;
                                        };
                                    };
                                    useFullCommitment: {
                                        type: string;
                                    };
                                    caller: {
                                        type: string;
                                    };
                                };
                                docEntries: {
                                    publicKey: null;
                                    tokenId: null;
                                    update: null;
                                    balanceChange: null;
                                    incrementNonce: null;
                                    events: null;
                                    sequenceEvents: null;
                                    callData: null;
                                    callDepth: null;
                                    preconditions: null;
                                    useFullCommitment: null;
                                    caller: null;
                                };
                            };
                            authorization: {
                                type: string;
                                name: string;
                                docs: null;
                                keys: string[];
                                entries: {
                                    proof: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                    signature: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                };
                                docEntries: {
                                    proof: null;
                                    signature: null;
                                };
                            };
                        };
                        docEntries: {
                            body: null;
                            authorization: null;
                        };
                    };
                    staticLength: null;
                };
                memo: {
                    type: string;
                };
            };
            docEntries: {
                feePayer: null;
                otherParties: null;
                memo: null;
            };
        };
        Party: {
            type: string;
            name: string;
            docs: string;
            keys: string[];
            entries: {
                body: {
                    type: string;
                    name: string;
                    docs: null;
                    keys: string[];
                    entries: {
                        publicKey: {
                            type: string;
                        };
                        tokenId: {
                            type: string;
                        };
                        update: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                appState: {
                                    type: string;
                                    inner: {
                                        type: string;
                                        optionType: string;
                                        inner: {
                                            type: string;
                                        };
                                    };
                                    staticLength: number;
                                };
                                delegate: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                    };
                                };
                                verificationKey: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            data: {
                                                type: string;
                                            };
                                            hash: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            data: null;
                                            hash: null;
                                        };
                                    };
                                };
                                permissions: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            editState: {
                                                type: string;
                                            };
                                            send: {
                                                type: string;
                                            };
                                            receive: {
                                                type: string;
                                            };
                                            setDelegate: {
                                                type: string;
                                            };
                                            setPermissions: {
                                                type: string;
                                            };
                                            setVerificationKey: {
                                                type: string;
                                            };
                                            setZkappUri: {
                                                type: string;
                                            };
                                            editSequenceState: {
                                                type: string;
                                            };
                                            setTokenSymbol: {
                                                type: string;
                                            };
                                            incrementNonce: {
                                                type: string;
                                            };
                                            setVotingFor: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            editState: null;
                                            send: null;
                                            receive: null;
                                            setDelegate: null;
                                            setPermissions: null;
                                            setVerificationKey: null;
                                            setZkappUri: null;
                                            editSequenceState: null;
                                            setTokenSymbol: null;
                                            incrementNonce: null;
                                            setVotingFor: null;
                                        };
                                    };
                                };
                                zkappUri: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                        checkedType: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                data: {
                                                    type: string;
                                                };
                                                hash: {
                                                    type: string;
                                                };
                                            };
                                            docEntries: {
                                                data: null;
                                                hash: null;
                                            };
                                        };
                                        checkedTypeName: string;
                                    };
                                };
                                tokenSymbol: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                        checkedType: {
                                            type: string;
                                        };
                                        checkedTypeName: string;
                                    };
                                };
                                timing: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                        name: string;
                                        docs: null;
                                        keys: string[];
                                        entries: {
                                            initialMinimumBalance: {
                                                type: string;
                                            };
                                            cliffTime: {
                                                type: string;
                                            };
                                            cliffAmount: {
                                                type: string;
                                            };
                                            vestingPeriod: {
                                                type: string;
                                            };
                                            vestingIncrement: {
                                                type: string;
                                            };
                                        };
                                        docEntries: {
                                            initialMinimumBalance: null;
                                            cliffTime: null;
                                            cliffAmount: null;
                                            vestingPeriod: null;
                                            vestingIncrement: null;
                                        };
                                    };
                                };
                                votingFor: {
                                    type: string;
                                    optionType: string;
                                    inner: {
                                        type: string;
                                    };
                                };
                            };
                            docEntries: {
                                appState: null;
                                delegate: null;
                                verificationKey: null;
                                permissions: null;
                                zkappUri: null;
                                tokenSymbol: null;
                                timing: null;
                                votingFor: null;
                            };
                        };
                        balanceChange: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                magnitude: {
                                    type: string;
                                };
                                sgn: {
                                    type: string;
                                };
                            };
                            docEntries: {
                                magnitude: null;
                                sgn: null;
                            };
                        };
                        incrementNonce: {
                            type: string;
                        };
                        events: {
                            type: string;
                            inner: {
                                type: string;
                                inner: {
                                    type: string;
                                };
                                staticLength: null;
                            };
                            staticLength: null;
                            checkedType: {
                                type: string;
                                name: string;
                                docs: null;
                                keys: string[];
                                entries: {
                                    data: {
                                        type: string;
                                        inner: {
                                            type: string;
                                            inner: {
                                                type: string;
                                            };
                                            staticLength: null;
                                        };
                                        staticLength: null;
                                    };
                                    hash: {
                                        type: string;
                                    };
                                };
                                docEntries: {
                                    data: null;
                                    hash: null;
                                };
                            };
                            checkedTypeName: string;
                        };
                        sequenceEvents: {
                            type: string;
                            inner: {
                                type: string;
                                inner: {
                                    type: string;
                                };
                                staticLength: null;
                            };
                            staticLength: null;
                            checkedType: {
                                type: string;
                                name: string;
                                docs: null;
                                keys: string[];
                                entries: {
                                    data: {
                                        type: string;
                                        inner: {
                                            type: string;
                                            inner: {
                                                type: string;
                                            };
                                            staticLength: null;
                                        };
                                        staticLength: null;
                                    };
                                    hash: {
                                        type: string;
                                    };
                                };
                                docEntries: {
                                    data: null;
                                    hash: null;
                                };
                            };
                            checkedTypeName: string;
                        };
                        callData: {
                            type: string;
                        };
                        callDepth: {
                            type: string;
                        };
                        preconditions: {
                            type: string;
                            name: string;
                            docs: null;
                            keys: string[];
                            entries: {
                                network: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        snarkedLedgerHash: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        timestamp: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        blockchainLength: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        minWindowDensity: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        totalCurrency: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        globalSlotSinceHardFork: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        globalSlotSinceGenesis: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        stakingEpochData: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                ledger: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        hash: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        totalCurrency: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                                name: string;
                                                                docs: null;
                                                                keys: string[];
                                                                entries: {
                                                                    lower: {
                                                                        type: string;
                                                                    };
                                                                    upper: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                docEntries: {
                                                                    lower: null;
                                                                    upper: null;
                                                                };
                                                            };
                                                        };
                                                    };
                                                    docEntries: {
                                                        hash: null;
                                                        totalCurrency: null;
                                                    };
                                                };
                                                seed: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                startCheckpoint: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                lockCheckpoint: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                epochLength: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                            };
                                            docEntries: {
                                                ledger: null;
                                                seed: null;
                                                startCheckpoint: null;
                                                lockCheckpoint: null;
                                                epochLength: null;
                                            };
                                        };
                                        nextEpochData: {
                                            type: string;
                                            name: string;
                                            docs: null;
                                            keys: string[];
                                            entries: {
                                                ledger: {
                                                    type: string;
                                                    name: string;
                                                    docs: null;
                                                    keys: string[];
                                                    entries: {
                                                        hash: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                            };
                                                        };
                                                        totalCurrency: {
                                                            type: string;
                                                            optionType: string;
                                                            inner: {
                                                                type: string;
                                                                name: string;
                                                                docs: null;
                                                                keys: string[];
                                                                entries: {
                                                                    lower: {
                                                                        type: string;
                                                                    };
                                                                    upper: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                docEntries: {
                                                                    lower: null;
                                                                    upper: null;
                                                                };
                                                            };
                                                        };
                                                    };
                                                    docEntries: {
                                                        hash: null;
                                                        totalCurrency: null;
                                                    };
                                                };
                                                seed: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                startCheckpoint: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                lockCheckpoint: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                    };
                                                };
                                                epochLength: {
                                                    type: string;
                                                    optionType: string;
                                                    inner: {
                                                        type: string;
                                                        name: string;
                                                        docs: null;
                                                        keys: string[];
                                                        entries: {
                                                            lower: {
                                                                type: string;
                                                            };
                                                            upper: {
                                                                type: string;
                                                            };
                                                        };
                                                        docEntries: {
                                                            lower: null;
                                                            upper: null;
                                                        };
                                                    };
                                                };
                                            };
                                            docEntries: {
                                                ledger: null;
                                                seed: null;
                                                startCheckpoint: null;
                                                lockCheckpoint: null;
                                                epochLength: null;
                                            };
                                        };
                                    };
                                    docEntries: {
                                        snarkedLedgerHash: null;
                                        timestamp: null;
                                        blockchainLength: null;
                                        minWindowDensity: null;
                                        totalCurrency: null;
                                        globalSlotSinceHardFork: null;
                                        globalSlotSinceGenesis: null;
                                        stakingEpochData: null;
                                        nextEpochData: null;
                                    };
                                };
                                account: {
                                    type: string;
                                    name: string;
                                    docs: null;
                                    keys: string[];
                                    entries: {
                                        balance: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        nonce: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                                name: string;
                                                docs: null;
                                                keys: string[];
                                                entries: {
                                                    lower: {
                                                        type: string;
                                                    };
                                                    upper: {
                                                        type: string;
                                                    };
                                                };
                                                docEntries: {
                                                    lower: null;
                                                    upper: null;
                                                };
                                            };
                                        };
                                        receiptChainHash: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        delegate: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        state: {
                                            type: string;
                                            inner: {
                                                type: string;
                                                optionType: string;
                                                inner: {
                                                    type: string;
                                                };
                                            };
                                            staticLength: number;
                                        };
                                        sequenceState: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        provedState: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                        isNew: {
                                            type: string;
                                            optionType: string;
                                            inner: {
                                                type: string;
                                            };
                                        };
                                    };
                                    docEntries: {
                                        balance: null;
                                        nonce: null;
                                        receiptChainHash: null;
                                        delegate: null;
                                        state: null;
                                        sequenceState: null;
                                        provedState: null;
                                        isNew: null;
                                    };
                                };
                            };
                            docEntries: {
                                network: null;
                                account: null;
                            };
                        };
                        useFullCommitment: {
                            type: string;
                        };
                        caller: {
                            type: string;
                        };
                    };
                    docEntries: {
                        publicKey: null;
                        tokenId: null;
                        update: null;
                        balanceChange: null;
                        incrementNonce: null;
                        events: null;
                        sequenceEvents: null;
                        callData: null;
                        callDepth: null;
                        preconditions: null;
                        useFullCommitment: null;
                        caller: null;
                    };
                };
                authorization: {
                    type: string;
                    name: string;
                    docs: null;
                    keys: string[];
                    entries: {
                        proof: {
                            type: string;
                            optionType: string;
                            inner: {
                                type: string;
                            };
                        };
                        signature: {
                            type: string;
                            optionType: string;
                            inner: {
                                type: string;
                            };
                        };
                    };
                    docEntries: {
                        proof: null;
                        signature: null;
                    };
                };
            };
            docEntries: {
                body: null;
                authorization: null;
            };
        };
    };
    let asFieldsAndAux: typeof import("./snarky/types.js").asFieldsAndAux;
    let packToFields: typeof import("./lib/hash.js").packToFields;
    let MerkleTree: typeof import("./lib/merkle_tree.js").MerkleTree;
    let MerkleWitness: typeof import("./lib/merkle_tree.js").MerkleWitness;
    let partyFromCallback: typeof import("./lib/zkapp.js").partyFromCallback;
    type AsFieldsAndAux<T, TJson> = AsFieldsAndAux_<T, TJson>;
    let Callback: typeof import("./lib/zkapp.js").Callback;
    type Callback = Callback_;
}
