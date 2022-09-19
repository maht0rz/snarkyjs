import { PublicKey, UInt64, UInt32, TokenId, Field, Bool, AuthRequired, TokenSymbol, Sign } from '../parties-leaves.js';
import { AsFieldsAndAux } from '../parties-helpers.js';
import * as Json from './parties-json.js';
export { customTypes, Parties, Party };
export { Json };
export * from '../parties-leaves.js';
declare type CustomTypes = {
    StringWithHash: AsFieldsAndAux<{
        data: string;
        hash: Field;
    }, Json.TypeMap['string']>;
    TokenSymbol: AsFieldsAndAux<TokenSymbol, Json.TypeMap['string']>;
    Events: AsFieldsAndAux<{
        data: Field[][];
        hash: Field;
    }, Json.TypeMap['Field'][][]>;
    SequenceEvents: AsFieldsAndAux<{
        data: Field[][];
        hash: Field;
    }, Json.TypeMap['Field'][][]>;
};
declare let customTypes: CustomTypes;
declare type Parties = {
    feePayer: {
        body: {
            publicKey: PublicKey;
            fee: UInt64;
            validUntil?: UInt32;
            nonce: UInt32;
        };
        authorization: string;
    };
    otherParties: {
        body: {
            publicKey: PublicKey;
            tokenId: TokenId;
            update: {
                appState: {
                    isSome: Bool;
                    value: Field;
                }[];
                delegate: {
                    isSome: Bool;
                    value: PublicKey;
                };
                verificationKey: {
                    isSome: Bool;
                    value: {
                        data: string;
                        hash: Field;
                    };
                };
                permissions: {
                    isSome: Bool;
                    value: {
                        editState: AuthRequired;
                        send: AuthRequired;
                        receive: AuthRequired;
                        setDelegate: AuthRequired;
                        setPermissions: AuthRequired;
                        setVerificationKey: AuthRequired;
                        setZkappUri: AuthRequired;
                        editSequenceState: AuthRequired;
                        setTokenSymbol: AuthRequired;
                        incrementNonce: AuthRequired;
                        setVotingFor: AuthRequired;
                    };
                };
                zkappUri: {
                    isSome: Bool;
                    value: {
                        data: string;
                        hash: Field;
                    };
                };
                tokenSymbol: {
                    isSome: Bool;
                    value: TokenSymbol;
                };
                timing: {
                    isSome: Bool;
                    value: {
                        initialMinimumBalance: UInt64;
                        cliffTime: UInt32;
                        cliffAmount: UInt64;
                        vestingPeriod: UInt32;
                        vestingIncrement: UInt64;
                    };
                };
                votingFor: {
                    isSome: Bool;
                    value: Field;
                };
            };
            balanceChange: {
                magnitude: UInt64;
                sgn: Sign;
            };
            incrementNonce: Bool;
            events: {
                data: Field[][];
                hash: Field;
            };
            sequenceEvents: {
                data: Field[][];
                hash: Field;
            };
            callData: Field;
            callDepth: number;
            preconditions: {
                network: {
                    snarkedLedgerHash: {
                        isSome: Bool;
                        value: Field;
                    };
                    timestamp: {
                        isSome: Bool;
                        value: {
                            lower: UInt64;
                            upper: UInt64;
                        };
                    };
                    blockchainLength: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                    minWindowDensity: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                    totalCurrency: {
                        isSome: Bool;
                        value: {
                            lower: UInt64;
                            upper: UInt64;
                        };
                    };
                    globalSlotSinceHardFork: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                    globalSlotSinceGenesis: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                    stakingEpochData: {
                        ledger: {
                            hash: {
                                isSome: Bool;
                                value: Field;
                            };
                            totalCurrency: {
                                isSome: Bool;
                                value: {
                                    lower: UInt64;
                                    upper: UInt64;
                                };
                            };
                        };
                        seed: {
                            isSome: Bool;
                            value: Field;
                        };
                        startCheckpoint: {
                            isSome: Bool;
                            value: Field;
                        };
                        lockCheckpoint: {
                            isSome: Bool;
                            value: Field;
                        };
                        epochLength: {
                            isSome: Bool;
                            value: {
                                lower: UInt32;
                                upper: UInt32;
                            };
                        };
                    };
                    nextEpochData: {
                        ledger: {
                            hash: {
                                isSome: Bool;
                                value: Field;
                            };
                            totalCurrency: {
                                isSome: Bool;
                                value: {
                                    lower: UInt64;
                                    upper: UInt64;
                                };
                            };
                        };
                        seed: {
                            isSome: Bool;
                            value: Field;
                        };
                        startCheckpoint: {
                            isSome: Bool;
                            value: Field;
                        };
                        lockCheckpoint: {
                            isSome: Bool;
                            value: Field;
                        };
                        epochLength: {
                            isSome: Bool;
                            value: {
                                lower: UInt32;
                                upper: UInt32;
                            };
                        };
                    };
                };
                account: {
                    balance: {
                        isSome: Bool;
                        value: {
                            lower: UInt64;
                            upper: UInt64;
                        };
                    };
                    nonce: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                    receiptChainHash: {
                        isSome: Bool;
                        value: Field;
                    };
                    delegate: {
                        isSome: Bool;
                        value: PublicKey;
                    };
                    state: {
                        isSome: Bool;
                        value: Field;
                    }[];
                    sequenceState: {
                        isSome: Bool;
                        value: Field;
                    };
                    provedState: {
                        isSome: Bool;
                        value: Bool;
                    };
                    isNew: {
                        isSome: Bool;
                        value: Bool;
                    };
                };
            };
            useFullCommitment: Bool;
            caller: TokenId;
        };
        authorization: {
            proof?: string;
            signature?: string;
        };
    }[];
    memo: string;
};
declare let Parties: {
    sizeInFields(): number;
    toFields(value: Parties): Field[];
    toAuxiliary(value?: Parties | undefined): any[];
    fromFields(fields: Field[], aux: any[]): Parties;
    toJSON(value: Parties): Json.Parties;
    check(value: Parties): void;
    toInput(value: Parties): import("../../lib/hash.js").HashInput;
    witness(f: () => Parties): Parties;
};
declare type Party = {
    body: {
        publicKey: PublicKey;
        tokenId: TokenId;
        update: {
            appState: {
                isSome: Bool;
                value: Field;
            }[];
            delegate: {
                isSome: Bool;
                value: PublicKey;
            };
            verificationKey: {
                isSome: Bool;
                value: {
                    data: string;
                    hash: Field;
                };
            };
            permissions: {
                isSome: Bool;
                value: {
                    editState: AuthRequired;
                    send: AuthRequired;
                    receive: AuthRequired;
                    setDelegate: AuthRequired;
                    setPermissions: AuthRequired;
                    setVerificationKey: AuthRequired;
                    setZkappUri: AuthRequired;
                    editSequenceState: AuthRequired;
                    setTokenSymbol: AuthRequired;
                    incrementNonce: AuthRequired;
                    setVotingFor: AuthRequired;
                };
            };
            zkappUri: {
                isSome: Bool;
                value: {
                    data: string;
                    hash: Field;
                };
            };
            tokenSymbol: {
                isSome: Bool;
                value: TokenSymbol;
            };
            timing: {
                isSome: Bool;
                value: {
                    initialMinimumBalance: UInt64;
                    cliffTime: UInt32;
                    cliffAmount: UInt64;
                    vestingPeriod: UInt32;
                    vestingIncrement: UInt64;
                };
            };
            votingFor: {
                isSome: Bool;
                value: Field;
            };
        };
        balanceChange: {
            magnitude: UInt64;
            sgn: Sign;
        };
        incrementNonce: Bool;
        events: {
            data: Field[][];
            hash: Field;
        };
        sequenceEvents: {
            data: Field[][];
            hash: Field;
        };
        callData: Field;
        callDepth: number;
        preconditions: {
            network: {
                snarkedLedgerHash: {
                    isSome: Bool;
                    value: Field;
                };
                timestamp: {
                    isSome: Bool;
                    value: {
                        lower: UInt64;
                        upper: UInt64;
                    };
                };
                blockchainLength: {
                    isSome: Bool;
                    value: {
                        lower: UInt32;
                        upper: UInt32;
                    };
                };
                minWindowDensity: {
                    isSome: Bool;
                    value: {
                        lower: UInt32;
                        upper: UInt32;
                    };
                };
                totalCurrency: {
                    isSome: Bool;
                    value: {
                        lower: UInt64;
                        upper: UInt64;
                    };
                };
                globalSlotSinceHardFork: {
                    isSome: Bool;
                    value: {
                        lower: UInt32;
                        upper: UInt32;
                    };
                };
                globalSlotSinceGenesis: {
                    isSome: Bool;
                    value: {
                        lower: UInt32;
                        upper: UInt32;
                    };
                };
                stakingEpochData: {
                    ledger: {
                        hash: {
                            isSome: Bool;
                            value: Field;
                        };
                        totalCurrency: {
                            isSome: Bool;
                            value: {
                                lower: UInt64;
                                upper: UInt64;
                            };
                        };
                    };
                    seed: {
                        isSome: Bool;
                        value: Field;
                    };
                    startCheckpoint: {
                        isSome: Bool;
                        value: Field;
                    };
                    lockCheckpoint: {
                        isSome: Bool;
                        value: Field;
                    };
                    epochLength: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                };
                nextEpochData: {
                    ledger: {
                        hash: {
                            isSome: Bool;
                            value: Field;
                        };
                        totalCurrency: {
                            isSome: Bool;
                            value: {
                                lower: UInt64;
                                upper: UInt64;
                            };
                        };
                    };
                    seed: {
                        isSome: Bool;
                        value: Field;
                    };
                    startCheckpoint: {
                        isSome: Bool;
                        value: Field;
                    };
                    lockCheckpoint: {
                        isSome: Bool;
                        value: Field;
                    };
                    epochLength: {
                        isSome: Bool;
                        value: {
                            lower: UInt32;
                            upper: UInt32;
                        };
                    };
                };
            };
            account: {
                balance: {
                    isSome: Bool;
                    value: {
                        lower: UInt64;
                        upper: UInt64;
                    };
                };
                nonce: {
                    isSome: Bool;
                    value: {
                        lower: UInt32;
                        upper: UInt32;
                    };
                };
                receiptChainHash: {
                    isSome: Bool;
                    value: Field;
                };
                delegate: {
                    isSome: Bool;
                    value: PublicKey;
                };
                state: {
                    isSome: Bool;
                    value: Field;
                }[];
                sequenceState: {
                    isSome: Bool;
                    value: Field;
                };
                provedState: {
                    isSome: Bool;
                    value: Bool;
                };
                isNew: {
                    isSome: Bool;
                    value: Bool;
                };
            };
        };
        useFullCommitment: Bool;
        caller: TokenId;
    };
    authorization: {
        proof?: string;
        signature?: string;
    };
};
declare let Party: {
    sizeInFields(): number;
    toFields(value: Party): Field[];
    toAuxiliary(value?: Party | undefined): any[];
    fromFields(fields: Field[], aux: any[]): Party;
    toJSON(value: Party): Json.Party;
    check(value: Party): void;
    toInput(value: Party): import("../../lib/hash.js").HashInput;
    witness(f: () => Party): Party;
};
