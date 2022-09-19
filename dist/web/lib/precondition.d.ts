import { Bool, Field } from '../snarky.js';
import { Party, Preconditions } from './party.js';
import { UInt32, UInt64 } from './int.js';
export { preconditions, Account, Network, assertPreconditionInvariants, cleanPreconditionsCache, AccountValue, NetworkValue, };
declare function preconditions(party: Party, isSelf: boolean): {
    account: PreconditionClassType<AccountPrecondition>;
    network: PreconditionClassType<{
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
    }>;
};
declare function Network(party: Party): Network;
declare function Account(party: Party): Account;
declare function cleanPreconditionsCache(party: Party): void;
declare function assertPreconditionInvariants(party: Party): void;
declare type NetworkPrecondition = Preconditions['network'];
declare type NetworkValue = PreconditionBaseTypes<NetworkPrecondition>;
declare type Network = PreconditionClassType<NetworkPrecondition>;
declare type AccountPrecondition = Omit<Preconditions['account'], 'state'>;
declare type AccountValue = PreconditionBaseTypes<AccountPrecondition>;
declare type Account = PreconditionClassType<AccountPrecondition>;
declare type PreconditionBaseTypes<T> = {
    [K in keyof T]: T[K] extends RangeCondition<infer U> ? U : T[K] extends FlaggedOptionCondition<infer U> ? U : T[K] extends Field ? Field : PreconditionBaseTypes<T[K]>;
};
declare type PreconditionSubclassType<U> = {
    get(): U;
    assertEquals(value: U): void;
    assertNothing(): void;
};
declare type PreconditionClassType<T> = {
    [K in keyof T]: T[K] extends RangeCondition<infer U> ? PreconditionSubclassType<U> & {
        assertBetween(lower: U, upper: U): void;
    } : T[K] extends FlaggedOptionCondition<infer U> ? PreconditionSubclassType<U> : T[K] extends Field ? PreconditionSubclassType<Field> : PreconditionClassType<T[K]>;
};
declare type RangeCondition<T> = {
    isSome: Bool;
    value: {
        lower: T;
        upper: T;
    };
};
declare type FlaggedOptionCondition<T> = {
    isSome: Bool;
    value: T;
};
