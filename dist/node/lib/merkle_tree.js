import { Circuit, CircuitValue, arrayProp } from './circuit_value.js';
import { Poseidon } from './hash.js';
import { Bool, Field } from './core.js';
// external API
export { MerkleTree, MerkleWitness, BaseMerkleWitness };
/**
 * Levels are indexed from leafs (level 0) to root (level N - 1).
 */
class MerkleTree {
    constructor(height) {
        this.height = height;
        this.nodes = {};
        this.zeroes = [Field(0)];
        for (let i = 1; i < height; i++) {
            this.zeroes.push(Poseidon.hash([this.zeroes[i - 1], this.zeroes[i - 1]]));
        }
    }
    getNode(level, index) {
        return this.nodes[level]?.[index.toString()] ?? this.zeroes[level];
    }
    getRoot() {
        return this.getNode(this.height - 1, 0n);
    }
    // TODO: this allows to set a node at an index larger than the size. OK?
    setNode(level, index, value) {
        var _a;
        ((_a = this.nodes)[level] ?? (_a[level] = {}))[index.toString()] = value;
    }
    // TODO: if this is passed an index bigger than the max, it will set a couple of out-of-bounds nodes but not affect the real Merkle root. OK?
    setLeaf(index, leaf) {
        if (index >= this.leafCount) {
            throw new Error(`index ${index} is out of range for ${this.leafCount} leaves.`);
        }
        this.setNode(0, index, leaf);
        let currIndex = index;
        for (let level = 1; level < this.height; level++) {
            currIndex /= 2n;
            const left = this.getNode(level - 1, currIndex * 2n);
            const right = this.getNode(level - 1, currIndex * 2n + 1n);
            this.setNode(level, currIndex, Poseidon.hash([left, right]));
        }
    }
    getWitness(index) {
        if (index >= this.leafCount) {
            throw new Error(`index ${index} is out of range for ${this.leafCount} leaves.`);
        }
        const witness = [];
        for (let level = 0; level < this.height - 1; level++) {
            const isLeft = index % 2n === 0n;
            const sibling = this.getNode(level, isLeft ? index + 1n : index - 1n);
            witness.push({ isLeft, sibling });
            index /= 2n;
        }
        return witness;
    }
    // TODO: this will always return true if the merkle tree was constructed normally; seems to be only useful for testing. remove?
    validate(index) {
        const path = this.getWitness(index);
        let hash = this.getNode(0, index);
        for (const node of path) {
            hash = Poseidon.hash(node.isLeft ? [hash, node.sibling] : [node.sibling, hash]);
        }
        return hash.toString() === this.getRoot().toString();
    }
    // TODO: should this take an optional offset? should it fail if the array is too long?
    fill(leaves) {
        leaves.forEach((value, index) => {
            this.setLeaf(BigInt(index), value);
        });
    }
    get leafCount() {
        return 2n ** BigInt(this.height - 1);
    }
}
class BaseMerkleWitness extends CircuitValue {
    constructor(witness) {
        super();
        let height = witness.length + 1;
        if (height !== this.height()) {
            throw Error(`Length of witness ${height}-1 doesn't match static tree height ${this.height()}.`);
        }
        this.path = witness.map((item) => item.sibling);
        this.isLeft = witness.map((item) => Bool(item.isLeft));
    }
    height() {
        return this.constructor.height;
    }
    calculateRoot(leaf) {
        let hash = leaf;
        let n = this.height();
        for (let i = 1; i < n; ++i) {
            const left = Circuit.if(this.isLeft[i - 1], hash, this.path[i - 1]);
            const right = Circuit.if(this.isLeft[i - 1], this.path[i - 1], hash);
            hash = Poseidon.hash([left, right]);
        }
        return hash;
    }
    calculateIndex() {
        let powerOfTwo = Field(1);
        let index = Field(0);
        let n = this.height();
        for (let i = 1; i < n; ++i) {
            index = Circuit.if(this.isLeft[i - 1], index, index.add(powerOfTwo));
            powerOfTwo = powerOfTwo.mul(2);
        }
        return index;
    }
}
function MerkleWitness(height) {
    class MerkleWitness_ extends BaseMerkleWitness {
    }
    MerkleWitness_.height = height;
    arrayProp(Field, height - 1)(MerkleWitness_.prototype, 'path');
    arrayProp(Bool, height - 1)(MerkleWitness_.prototype, 'isLeft');
    return MerkleWitness_;
}
//# sourceMappingURL=merkle_tree.js.map