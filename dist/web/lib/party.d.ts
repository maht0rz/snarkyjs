import { Field, Bool, Pickles, AsFieldElements } from '../snarky.js';
import { Types } from '../snarky/types.js';
import { PrivateKey, PublicKey } from './signature.js';
import { UInt64, UInt32, Int64, Sign } from './int.js';
import { SmartContract } from './zkapp.js';
import * as Precondition from './precondition.js';
import { Proof } from './proof_system.js';
export { Permissions, Party, ZkappPublicInput };
export { SetOrKeep, Permission, Preconditions, Body, Authorization, FeePayerUnsigned, Parties, partiesToJson, addMissingSignatures, addMissingProofs, signJsonTransaction, ZkappStateLength, Events, SequenceEvents, partyToPublicInput, TokenId, Token, CallForest, createChildParty, };
declare const ZkappStateLength = 8;
declare type PartyBody = Types.Party['body'];
declare type Update = PartyBody['update'];
/**
 * Preconditions for the network and accounts
 */
declare type Preconditions = PartyBody['preconditions'];
/**
 * Either set a value or keep it the same.
 */
declare type SetOrKeep<T> = {
    isSome: Bool;
    value: T;
};
/**
 * One specific permission value.
 *
 * A [[ Permission ]] tells one specific permission for our zkapp how it should behave
 * when presented with requested modifications.
 *
 * Use static factory methods on this class to use a specific behavior. See
 * documentation on those methods to learn more.
 */
declare type Permission = Types.AuthRequired;
declare let Permission: {
    /**
     * Modification is impossible.
     */
    impossible: () => Permission;
    /**
     * Modification is always permitted
     */
    none: () => Permission;
    /**
     * Modification is permitted by zkapp proofs only
     */
    proof: () => Permission;
    /**
     * Modification is permitted by signatures only, using the private key of the zkapp account
     */
    signature: () => Permission;
    /**
     * Modification is permitted by zkapp proofs or signatures
     */
    proofOrSignature: () => Permission;
};
declare type Permissions_ = Update['permissions']['value'];
/**
 * Permissions specify how specific aspects of the zkapp account are allowed to
 * be modified. All fields are denominated by a [[ Permission ]].
 */
interface Permissions extends Permissions_ {
    /**
     * The [[ Permission ]] corresponding to the 8 state fields associated with an
     * account.
     */
    editState: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to send transactions from this
     * account.
     */
    send: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to receive transactions to this
     * account.
     */
    receive: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to set the delegate field of
     * the account.
     */
    setDelegate: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to set the permissions field of
     * the account.
     */
    setPermissions: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to set the verification key
     * associated with the circuit tied to this account. Effectively
     * "upgradability" of the smart contract.
     */
    setVerificationKey: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to set the zkapp uri typically
     * pointing to the source code of the smart contract. Usually this should be
     * changed whenever the [[ Permissions.setVerificationKey ]] is changed.
     * Effectively "upgradability" of the smart contract.
     */
    setZkappUri: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to change the sequence state
     * associated with the account.
     *
     * TODO: Define sequence state here as well.
     */
    editSequenceState: Permission;
    /**
     * The [[ Permission ]] corresponding to the ability to set the token symbol for
     * this account.
     */
    setTokenSymbol: Permission;
    incrementNonce: Permission;
    setVotingFor: Permission;
}
declare let Permissions: {
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
    default: () => Permissions;
    initial: () => Permissions;
    /**
     * Modification is impossible.
     */
    impossible: () => Permission;
    /**
     * Modification is always permitted
     */
    none: () => Permission;
    /**
     * Modification is permitted by zkapp proofs only
     */
    proof: () => Permission;
    /**
     * Modification is permitted by signatures only, using the private key of the zkapp account
     */
    signature: () => Permission;
    /**
     * Modification is permitted by zkapp proofs or signatures
     */
    proofOrSignature: () => Permission;
};
declare type Event = Field[];
declare type Events = {
    hash: Field;
    data: Event[];
};
declare const Events: {
    empty(): Events;
    pushEvent(events: Events, event: Event): Events;
    hash(events: Event[]): Field;
};
declare const SequenceEvents: {
    empty(): Events;
    pushEvent(sequenceEvents: Events, event: Event): Events;
    hash(events: Event[]): Field;
    emptySequenceState(): Field;
    updateSequenceState(state: Field, sequenceEventsHash: Field): Field;
};
/**
 * The body of describing how some [[ Party ]] should change.
 *
 * TODO: We need to rename this still.
 */
interface Body extends PartyBody {
    /**
     * The address for this body.
     */
    publicKey: PublicKey;
    /**
     * Specify [[ Update ]]s to tweakable pieces of the account record backing
     * this address in the ledger.
     */
    update: Update;
    /**
     * The TokenId for this account.
     */
    tokenId: Field;
    /**
     * By what [[ Int64 ]] should the balance of this account change. All
     * balanceChanges must balance by the end of smart contract execution.
     */
    balanceChange: {
        magnitude: UInt64;
        sgn: Sign;
    };
    /**
     * Recent events that have been emitted from this account.
     *
     * TODO: Add a reference to general explanation of events.
     */
    events: Events;
    sequenceEvents: Events;
    caller: Field;
    callData: Field;
    callDepth: number;
    preconditions: Preconditions;
    useFullCommitment: Bool;
    incrementNonce: Bool;
}
declare const Body: {
    noUpdate(): Update;
    /**
     * A body that Don't change part of the underlying account record.
     */
    keepAll(publicKey: PublicKey): Body;
    dummy(): Body;
};
declare type FeePayer = Types.Parties['feePayer'];
declare type FeePayerUnsigned = FeePayer & {
    lazyAuthorization?: LazySignature | undefined;
};
/**
 * Either check a value or ignore it.
 *
 * Used within [[ AccountPredicate ]]s and [[ ProtocolStatePredicate ]]s.
 */
declare type OrIgnore<T> = {
    isSome: Bool;
    value: T;
};
/**
 * An interval representing all the values between `lower` and `upper` inclusive
 * of both the `lower` and `upper` values.
 *
 * @typeParam A something with an ordering where one can quantify a lower and
 *            upper bound.
 */
declare type ClosedInterval<T> = {
    lower: T;
    upper: T;
};
declare const Preconditions: {
    ignoreAll(): Preconditions;
};
declare type Control = Types.Party['authorization'];
declare type LazySignature = {
    kind: 'lazy-signature';
    privateKey?: PrivateKey;
};
declare type LazyProof = {
    kind: 'lazy-proof';
    methodName: string;
    args: any[];
    previousProofs: {
        publicInput: Field[];
        proof: Pickles.Proof;
    }[];
    ZkappClass: typeof SmartContract;
    memoized: Field[][];
    blindingValue: Field;
};
declare const TokenId: {
    default: Field;
    toBase58(field: Field): string;
    fromBase58(base58: string): Field;
    toFields: (x: Field) => Field[];
    ofFields: (x: Field[]) => Field;
    sizeInFields(): number;
    check: (x: Field) => void;
    toInput: (x: Field) => {
        fields?: Field[] | undefined;
        packed?: [Field, number][] | undefined;
    };
    toJSON: (x: Field) => import("../snarky.js").JSONValue;
};
declare class Token {
    readonly id: Field;
    readonly parentTokenId: Field;
    readonly tokenOwner: PublicKey;
    static Id: {
        default: Field;
        toBase58(field: Field): string;
        fromBase58(base58: string): Field;
        toFields: (x: Field) => Field[];
        ofFields: (x: Field[]) => Field;
        sizeInFields(): number;
        check: (x: Field) => void;
        toInput: (x: Field) => {
            fields?: Field[] | undefined;
            packed?: [Field, number][] | undefined;
        };
        toJSON: (x: Field) => import("../snarky.js").JSONValue;
    };
    constructor(options: {
        tokenOwner: PublicKey;
        parentTokenId?: Field;
    });
}
declare class Party implements Types.Party {
    body: Body;
    authorization: Control;
    lazyAuthorization: LazySignature | LazyProof | undefined;
    account: Precondition.Account;
    network: Precondition.Network;
    children: {
        party: Party;
        calls?: Field;
    }[];
    parent: Party | undefined;
    private isSelf;
    constructor(body: Body, authorization?: Control);
    static clone(party: Party): any;
    token(): {
        id: Field;
        parentTokenId: Field;
        tokenOwner: Types.PublicKey;
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
    get tokenId(): Field;
    get tokenSymbol(): {
        set(tokenSymbol: string): void;
    };
    send({ to, amount, }: {
        to: PublicKey | Party;
        amount: number | bigint | UInt64;
    }): void;
    get balance(): {
        addInPlace(x: Int64 | UInt32 | UInt64 | string | number | bigint): void;
        subInPlace(x: Int64 | UInt32 | UInt64 | string | number | bigint): void;
    };
    get update(): Update;
    static setValue<T>(maybeValue: SetOrKeep<T>, value: T): void;
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
    static assertBetween<T>(property: OrIgnore<ClosedInterval<T>>, lower: T, upper: T): void;
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
    static assertEquals<T>(property: OrIgnore<ClosedInterval<T> | T>, value: T): void;
    get publicKey(): PublicKey;
    signInPlace(privateKey?: PrivateKey, fallbackToZeroNonce?: boolean): void;
    sign(privateKey?: PrivateKey): any;
    static signFeePayerInPlace(feePayer: FeePayerUnsigned, privateKey?: PrivateKey, fallbackToZeroNonce?: boolean): void;
    static getNonce(party: Party | FeePayerUnsigned, fallbackToZero?: boolean): Types.UInt32;
    setNoncePrecondition(fallbackToZero?: boolean): Types.UInt32;
    toFields(): Field[];
    toJSON(): Types.Json.Party;
    hash(): Field;
    toPublicInput(): ZkappPublicInput;
    static defaultParty(address: PublicKey): Party;
    static defaultFeePayer(address: PublicKey, key: PrivateKey, nonce: UInt32): FeePayerUnsigned;
    static dummyFeePayer(): FeePayerUnsigned;
    static createUnsigned(publicKey: PublicKey): Party;
    static createSigned(signer: PrivateKey): Party;
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
    static fundNewAccount(feePayerKey: PrivateKey, { initialBalance }?: {
        initialBalance?: string | number | Types.UInt64 | undefined;
    }): void;
    static witness<T>(type: AsFieldElements<T>, compute: () => {
        party: Party;
        result: T;
    }, skipCheck?: boolean): {
        party: Party;
        result: T;
    };
}
declare const CallForest: {
    toFlatList(forest: Party[], depth?: number): Party[];
    emptyHash(): Field;
    hashChildren(parent: Party): Field;
};
declare function createChildParty(parent: Party, childAddress: PublicKey, options?: {
    caller?: Field;
    tokenId?: Field;
    useFullCommitment?: Bool;
}): Party;
declare type Parties = {
    feePayer: FeePayerUnsigned;
    otherParties: Party[];
    memo: string;
};
declare type PartiesSigned = {
    feePayer: FeePayer;
    otherParties: (Party & {
        lazyAuthorization?: LazyProof;
    })[];
    memo: string;
};
declare type PartiesProved = {
    feePayer: FeePayerUnsigned;
    otherParties: (Party & {
        lazyAuthorization?: LazySignature;
    })[];
    memo: string;
};
declare function partiesToJson({ feePayer, otherParties, memo }: Parties): Types.Json.Parties;
declare const Authorization: {
    hasLazyProof(party: Party): boolean;
    hasAny(party: Party): boolean;
    setSignature(party: Party, signature: string): void;
    setProof(party: Party, proof: string): void;
    setLazySignature(party: Party, signature?: Omit<LazySignature, 'kind'>): void;
    setLazyProof(party: Party, proof: Omit<LazyProof, 'kind'>): void;
};
declare function addMissingSignatures(parties: Parties, additionalKeys?: PrivateKey[]): PartiesSigned;
/**
 * The public input for zkApps consists of certain hashes of the proving Party (and its child parties) which is constructed during method execution.

  For SmartContract proving, a method is run twice: First outside the proof, to obtain the public input, and once in the prover,
  which takes the public input as input. The current transaction is hashed again inside the prover, which asserts that the result equals the input public input,
  as part of the snark circuit. The block producer will also hash the transaction they receive and pass it as a public input to the verifier.
  Thus, the transaction is fully constrained by the proof - the proof couldn't be used to attest to a different transaction.
 */
declare type ZkappPublicInput = {
    party: Field;
    calls: Field;
};
declare let ZkappPublicInput: import("./circuit_value.js").AsFieldsExtended<ZkappPublicInput>;
declare function partyToPublicInput(self: Party): ZkappPublicInput;
declare function addMissingProofs(parties: Parties): Promise<{
    parties: PartiesProved;
    proofs: (Proof<ZkappPublicInput> | undefined)[];
}>;
/**
 * Sign all parties of a transaction which belong to the account determined by [[ `privateKey` ]].
 * @returns the modified transaction JSON
 */
declare function signJsonTransaction(transactionJson: string, privateKey: PrivateKey | string): string;
