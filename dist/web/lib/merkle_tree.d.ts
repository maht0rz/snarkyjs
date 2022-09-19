import { CircuitValue } from './circuit_value.js';
import { Bool, Field } from './core.js';
export { Witness, MerkleTree, MerkleWitness, BaseMerkleWitness };
declare type Witness = {
    isLeft: boolean;
    sibling: Field;
}[];
/**
 * Levels are indexed from leafs (level 0) to root (level N - 1).
 */
declare class MerkleTree {
    readonly height: number;
    private nodes;
    private zeroes;
    constructor(height: number);
    getNode(level: number, index: bigint): Field;
    getRoot(): Field;
    private setNode;
    setLeaf(index: bigint, leaf: Field): void;
    getWitness(index: bigint): Witness;
    validate(index: bigint): boolean;
    fill(leaves: Field[]): void;
    get leafCount(): bigint;
}
declare class BaseMerkleWitness extends CircuitValue {
    static height: number;
    path: Field[];
    isLeft: Bool[];
    height(): number;
    constructor(witness: Witness);
    calculateRoot(leaf: Field): Field;
    calculateIndex(): Field;
}
declare function MerkleWitness(height: number): typeof BaseMerkleWitness;
