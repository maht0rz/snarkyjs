import { Field, Bool, AsFieldElements, Pickles, InferAsFieldElements } from '../snarky.js';
import { Party, Permissions, SetOrKeep, ZkappPublicInput } from './party.js';
import { PrivateKey, PublicKey } from './signature.js';
import * as Mina from './mina.js';
import { UInt32, UInt64 } from './int.js';
import { MethodInterface, Proof, GenericArgument } from './proof_system.js';
export { SmartContract, method, deploy, DeployArgs, signFeePayer, declareMethods, Callback, };
export { Reducer, partyFromCallback };
/**
 * A decorator to use in a zkapp to mark a method as callable by anyone.
 * You can use inside your zkapp class as:
 *
 * ```
 * @method myMethod(someArg: Field) {
 *  // your code here
 * }
 * ```
 */
declare function method<T extends SmartContract>(target: T & {
    constructor: any;
}, methodName: keyof T & string, descriptor: PropertyDescriptor): void;
declare class Callback extends GenericArgument {
    instance: SmartContract;
    methodIntf: MethodInterface;
    args: any[];
    constructor(instance: SmartContract, methodName: string, args: any[]);
}
declare function partyFromCallback(parentZkapp: SmartContract, callback: Callback, disallowChildren?: boolean): Party;
/**
 * The main zkapp class. To write a zkapp, extend this class as such:
 *
 * ```
 * class YourSmartContract extends SmartContract {
 *   // your smart contract code here
 * }
 * ```
 *
 */
declare class SmartContract {
    address: PublicKey;
    nativeToken: Field;
    private _executionState;
    static _methods?: MethodInterface[];
    private static _methodMetadata;
    static _provers?: Pickles.Prover[];
    static _maxProofsVerified?: 0 | 1 | 2;
    static _verificationKey?: {
        data: string;
        hash: Field;
    };
    static Proof(): {
        new ({ proof, publicInput, maxProofsVerified, }: {
            proof: unknown;
            publicInput: ZkappPublicInput;
            maxProofsVerified: 0 | 2 | 1;
        }): {
            publicInput: ZkappPublicInput;
            proof: unknown;
            maxProofsVerified: 0 | 2 | 1;
            shouldVerify: Bool;
            verify(): void;
            verifyIf(condition: Bool): void;
            toJSON(): {
                publicInput: string[];
                maxProofsVerified: 0 | 2 | 1;
                proof: string;
            };
        };
        publicInputType: import("./circuit_value.js").AsFieldsExtended<ZkappPublicInput>;
        tag: () => typeof SmartContract;
        fromJSON<S extends (new (...args: any) => Proof<unknown>) & {
            prototype: Proof<any>;
            publicInputType: AsFieldElements<any>;
            tag: () => {
                name: string;
            };
            fromJSON: typeof Proof.fromJSON;
        } & {
            prototype: Proof<unknown>;
        }>(this: S, { maxProofsVerified, proof, publicInput, }: {
            publicInput: string[];
            maxProofsVerified: 0 | 2 | 1;
            proof: string;
        }): Proof<S["publicInputType"] extends infer T ? T extends S["publicInputType"] ? T extends new (...args: any) => any ? InstanceType<T> : never : never : never>;
    };
    constructor(address: PublicKey, nativeToken?: Field);
    static compile(address: PublicKey, tokenId?: Field): Promise<{
        verificationKey: {
            data: string;
            hash: string;
        };
        provers: Pickles.Prover[];
        verify: (publicInput: Pickles.PublicInput, proof: unknown) => Promise<boolean>;
    }>;
    static digest(address: PublicKey, tokenId?: Field): string;
    deploy({ verificationKey, zkappKey, }: {
        verificationKey?: {
            data: string;
            hash: Field | string;
        };
        zkappKey?: PrivateKey;
    }): void;
    sign(zkappKey?: PrivateKey, fallbackToZeroNonce?: boolean): void;
    private executionState;
    get self(): Party;
    get account(): {
        nonce: {
            get(): UInt32;
            assertEquals(value: UInt32): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt32, upper: UInt32): void;
        };
        receiptChainHash: {
            get(): Field;
            assertEquals(value: Field): void;
            assertNothing(): void;
        };
        delegate: {
            get(): PublicKey;
            assertEquals(value: PublicKey): void;
            assertNothing(): void;
        };
        balance: {
            get(): UInt64;
            assertEquals(value: UInt64): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt64, upper: UInt64): void;
        };
        sequenceState: {
            get(): Field;
            assertEquals(value: Field): void;
            assertNothing(): void;
        };
        provedState: {
            get(): Bool;
            assertEquals(value: Bool): void;
            assertNothing(): void;
        };
        isNew: {
            get(): Bool;
            assertEquals(value: Bool): void;
            assertNothing(): void;
        };
    };
    get network(): {
        snarkedLedgerHash: {
            get(): Field;
            assertEquals(value: Field): void;
            assertNothing(): void;
        };
        timestamp: {
            get(): UInt64;
            assertEquals(value: UInt64): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt64, upper: UInt64): void;
        };
        blockchainLength: {
            get(): UInt32;
            assertEquals(value: UInt32): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt32, upper: UInt32): void;
        };
        minWindowDensity: {
            get(): UInt32;
            assertEquals(value: UInt32): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt32, upper: UInt32): void;
        };
        totalCurrency: {
            get(): UInt64;
            assertEquals(value: UInt64): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt64, upper: UInt64): void;
        };
        globalSlotSinceHardFork: {
            get(): UInt32;
            assertEquals(value: UInt32): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt32, upper: UInt32): void;
        };
        globalSlotSinceGenesis: {
            get(): UInt32;
            assertEquals(value: UInt32): void;
            assertNothing(): void;
        } & {
            assertBetween(lower: UInt32, upper: UInt32): void;
        };
        stakingEpochData: {
            ledger: {
                hash: {
                    get(): Field;
                    assertEquals(value: Field): void;
                    assertNothing(): void;
                };
                totalCurrency: {
                    get(): UInt64;
                    assertEquals(value: UInt64): void;
                    assertNothing(): void;
                } & {
                    assertBetween(lower: UInt64, upper: UInt64): void;
                };
            };
            seed: {
                get(): Field;
                assertEquals(value: Field): void;
                assertNothing(): void;
            };
            startCheckpoint: {
                get(): Field;
                assertEquals(value: Field): void;
                assertNothing(): void;
            };
            lockCheckpoint: {
                get(): Field;
                assertEquals(value: Field): void;
                assertNothing(): void;
            };
            epochLength: {
                get(): UInt32;
                assertEquals(value: UInt32): void;
                assertNothing(): void;
            } & {
                assertBetween(lower: UInt32, upper: UInt32): void;
            };
        };
        nextEpochData: {
            ledger: {
                hash: {
                    get(): Field;
                    assertEquals(value: Field): void;
                    assertNothing(): void;
                };
                totalCurrency: {
                    get(): UInt64;
                    assertEquals(value: UInt64): void;
                    assertNothing(): void;
                } & {
                    assertBetween(lower: UInt64, upper: UInt64): void;
                };
            };
            seed: {
                get(): Field;
                assertEquals(value: Field): void;
                assertNothing(): void;
            };
            startCheckpoint: {
                get(): Field;
                assertEquals(value: Field): void;
                assertNothing(): void;
            };
            lockCheckpoint: {
                get(): Field;
                assertEquals(value: Field): void;
                assertNothing(): void;
            };
            epochLength: {
                get(): UInt32;
                assertEquals(value: UInt32): void;
                assertNothing(): void;
            } & {
                assertBetween(lower: UInt32, upper: UInt32): void;
            };
        };
    };
    get experimental(): {
        readonly token: {
            id: Field;
            parentTokenId: Field;
            tokenOwner: PublicKey;
            mint({ address, amount, }: {
                address: PublicKey;
                amount: number | bigint | UInt64;
            }): void;
            burn({ address, amount, }: {
                address: PublicKey;
                amount: number | bigint | UInt64;
            }): void;
            send({ from, to, amount, }: {
                from: PublicKey;
                to: PublicKey;
                amount: number | bigint | UInt64;
            }): void;
        };
    };
    send(args: {
        to: PublicKey | Party;
        amount: number | bigint | UInt64;
    }): void;
    get tokenId(): Field;
    get tokenSymbol(): {
        set(tokenSymbol: string): void;
    };
    get balance(): {
        addInPlace(x: string | number | bigint | UInt32 | UInt64 | import("./int.js").Int64): void;
        subInPlace(x: string | number | bigint | UInt32 | UInt64 | import("./int.js").Int64): void;
    };
    get nonce(): UInt32;
    events: {
        [key: string]: AsFieldElements<any>;
    };
    emitEvent<K extends keyof this['events']>(type: K, event: any): void;
    fetchEvents(start?: UInt32, end?: UInt32): Promise<{
        type: string;
        event: AsFieldElements<any>;
    }[]>;
    static runOutsideCircuit(run: () => void): void;
    static analyzeMethods(address: PublicKey, tokenId?: Field): Record<string, {
        sequenceEvents: number;
        rows: number;
        digest: string;
        hasReturn: boolean;
    }>;
    setValue<T>(maybeValue: SetOrKeep<T>, value: T): void;
    setPermissions(permissions: Permissions): void;
}
declare type Reducer<Action> = {
    actionType: AsFieldElements<Action>;
};
declare type ReducerReturn<Action> = {
    dispatch(action: Action): void;
    reduce<State>(actions: Action[][], stateType: AsFieldElements<State>, reduce: (state: State, action: Action) => State, initial: {
        state: State;
        actionsHash: Field;
    }, options?: {
        maxTransactionsWithActions?: number;
    }): {
        state: State;
        actionsHash: Field;
    };
    getActions({ fromActionHash, endActionHash, }: {
        fromActionHash?: Field;
        endActionHash?: Field;
    }): Action[][];
};
declare type DeployArgs = {
    verificationKey?: {
        data: string;
        hash: string | Field;
    };
    zkappKey?: PrivateKey;
};
declare function deploy<S extends typeof SmartContract>(SmartContract: S, { zkappKey, verificationKey, initialBalance, feePayer, tokenId, }: {
    zkappKey: PrivateKey;
    verificationKey: {
        data: string;
        hash: string | Field;
    };
    initialBalance?: number | string;
    feePayer?: Mina.FeePayerSpec;
    tokenId: Field;
}): Promise<string>;
declare function signFeePayer(transactionJson: string, feePayerKey: PrivateKey | string, { transactionFee, feePayerNonce, memo: feePayerMemo, }: {
    transactionFee?: string | number | undefined;
    feePayerNonce?: string | number | undefined;
    memo?: string | undefined;
}): string;
/**
 * `declareMethods` can be used in place of the `@method` decorator
 * to declare SmartContract methods along with their list of arguments.
 * It should be placed _after_ the class declaration.
 * Here is an example of declaring a method `update`, which takes a single argument of type `Field`:
 * ```ts
 * class MyContract extends SmartContract {
 *   // ...
 *   update(x: Field) {
 *     // ...
 *   }
 * }
 * declareMethods(MyContract, { update: [Field] }); // `[Field]` is the list of arguments!
 * ```
 * Note that a method of the same name must still be defined on the class, just without the decorator.
 */
declare function declareMethods<T extends typeof SmartContract>(SmartContract: T, methodArguments: Record<string, AsFieldElements<unknown>[]>): void;
declare const Reducer: (<T extends AsFieldElements<any>, A extends InferAsFieldElements<T>>(reducer: {
    actionType: T;
}) => ReducerReturn<A>) & {
    initialActionsHash: Field;
};
