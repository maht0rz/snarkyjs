import { Field } from './core.js';
import { UInt32, UInt64 } from './int.js';
import { PrivateKey, PublicKey } from './signature.js';
import { Parties, Party, ZkappPublicInput } from './party.js';
import * as Fetch from './fetch.js';
import { NetworkValue } from './precondition.js';
import { Proof } from './proof_system.js';
import { Context } from './global-context.js';
export { createTransaction, BerkeleyQANet, LocalBlockchain, currentTransaction, CurrentTransaction, setActiveInstance, transaction, currentSlot, getAccount, hasAccount, getBalance, getNetworkState, accountCreationFee, sendTransaction, fetchEvents, getActions, FeePayerSpec, };
interface TransactionId {
    wait(): Promise<void>;
}
interface Transaction {
    transaction: Parties;
    toJSON(): string;
    toGraphqlQuery(): string;
    sign(additionalKeys?: PrivateKey[]): Transaction;
    prove(): Promise<(Proof<ZkappPublicInput> | undefined)[]>;
    send(): TransactionId;
}
declare type Account = Fetch.Account;
declare type FetchMode = 'fetch' | 'cached' | 'test';
declare type CurrentTransaction = {
    sender?: PrivateKey;
    parties: Party[];
    fetchMode: FetchMode;
    isFinalRunOutsideCircuit: boolean;
};
declare let currentTransaction: Context.t<CurrentTransaction>;
declare type FeePayerSpec = PrivateKey | {
    feePayerKey: PrivateKey;
    fee?: number | string | UInt64;
    memo?: string;
} | undefined;
declare function createTransaction(feePayer: FeePayerSpec, f: () => unknown, { fetchMode, isFinalRunOutsideCircuit }?: {
    fetchMode?: FetchMode | undefined;
    isFinalRunOutsideCircuit?: boolean | undefined;
}): Transaction;
interface Mina {
    transaction(sender: FeePayerSpec, f: () => void): Promise<Transaction>;
    currentSlot(): UInt32;
    hasAccount(publicKey: PublicKey, tokenId?: Field): boolean;
    getAccount(publicKey: PublicKey, tokenId?: Field): Account;
    getNetworkState(): NetworkValue;
    accountCreationFee(): UInt64;
    sendTransaction(transaction: Transaction): TransactionId;
    fetchEvents: (publicKey: PublicKey, tokenId?: Field) => any;
    getActions: (publicKey: PublicKey, tokenId?: Field) => {
        hash: string;
        actions: string[][];
    }[];
}
interface MockMina extends Mina {
    addAccount(publicKey: PublicKey, balance: string): void;
    /**
     * An array of 10 test accounts that have been pre-filled with
     * 30000000000 units of currency.
     */
    testAccounts: Array<{
        publicKey: PublicKey;
        privateKey: PrivateKey;
    }>;
    applyJsonTransaction: (tx: string) => void;
    setTimestamp: (ms: UInt64) => void;
    setGlobalSlot: (slot: UInt32) => void;
    setGlobalSlotSinceHardfork: (slot: UInt32) => void;
    setBlockchainLength: (height: UInt32) => void;
    setTotalCurrency: (currency: UInt64) => void;
}
/**
 * A mock Mina blockchain running locally and useful for testing.
 */
declare function LocalBlockchain({ accountCreationFee, }?: {
    accountCreationFee?: string | number | undefined;
}): MockMina;
declare function BerkeleyQANet(graphqlEndpoint: string): Mina;
/**
 * Set the currently used Mina instance.
 */
declare function setActiveInstance(m: Mina): void;
/**
 * Construct a smart contract transaction. Within the callback passed to this function,
 * you can call into the methods of smart contracts.
 *
 * ```typescript
 * transaction(() => {
 *   myZkapp.update();
 *   someOtherZkapp.someOtherMethod();
 * })
 * ```
 *
 * @return A transaction that can subsequently be submitted to the chain.
 */
declare function transaction(f: () => void): Promise<Transaction>;
declare function transaction(sender: FeePayerSpec, f: () => void): Promise<Transaction>;
/**
 * @return The current slot number, according to the active Mina instance.
 */
declare function currentSlot(): UInt32;
/**
 * @return The account data associated to the given public key.
 */
declare function getAccount(publicKey: PublicKey, tokenId?: Field): Account;
declare function hasAccount(publicKey: PublicKey, tokenId?: Field): boolean;
/**
 * @return Data associated with the current state of the Mina network.
 */
declare function getNetworkState(): {
    snarkedLedgerHash: Field;
    timestamp: UInt64;
    blockchainLength: UInt32;
    minWindowDensity: UInt32;
    totalCurrency: UInt64;
    globalSlotSinceHardFork: UInt32;
    globalSlotSinceGenesis: UInt32;
    stakingEpochData: {
        ledger: {
            hash: Field;
            totalCurrency: UInt64;
        };
        seed: Field;
        startCheckpoint: Field;
        lockCheckpoint: Field;
        epochLength: UInt32;
    };
    nextEpochData: {
        ledger: {
            hash: Field;
            totalCurrency: UInt64;
        };
        seed: Field;
        startCheckpoint: Field;
        lockCheckpoint: Field;
        epochLength: UInt32;
    };
};
/**
 * @return The balance associated to the given public key.
 */
declare function getBalance(publicKey: PublicKey, tokenId?: Field): UInt64;
declare function accountCreationFee(): UInt64;
declare function sendTransaction(txn: Transaction): TransactionId;
/**
 * @return A list of emitted events associated to the given public key.
 */
declare function fetchEvents(publicKey: PublicKey, tokenId: Field): Promise<any>;
/**
 * @return A list of emitted sequencing actions associated to the given public key.
 */
declare function getActions(publicKey: PublicKey, tokenId: Field): {
    hash: string;
    actions: string[][];
}[];
