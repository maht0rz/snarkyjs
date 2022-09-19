import { Poseidon as Poseidon_, Field } from '../snarky.js';
import { inCheckedComputation } from './proof_system.js';
// external API
export { Poseidon };
// internal API
export { HashInput, prefixes, emptyHashWithPrefix, hashWithPrefix, salt, TokenSymbol, packToFields, emptyReceiptChainHash, };
class Sponge {
    constructor() {
        let isChecked = inCheckedComputation();
        this.sponge = Poseidon_.spongeCreate(isChecked);
    }
    absorb(x) {
        Poseidon_.spongeAbsorb(this.sponge, x);
    }
    squeeze() {
        return Poseidon_.spongeSqueeze(this.sponge);
    }
}
const Poseidon = {
    hash(input) {
        let isChecked = inCheckedComputation();
        // this is the same:
        // return Poseidon_.update(this.initialState, input, isChecked)[0];
        return Poseidon_.hash(input, isChecked);
    },
    update(state, input) {
        let isChecked = inCheckedComputation();
        return Poseidon_.update(state, input, isChecked);
    },
    get initialState() {
        return [Field.zero, Field.zero, Field.zero];
    },
    Sponge,
};
function emptyHashWithPrefix(prefix) {
    return salt(prefix)[0];
}
function hashWithPrefix(prefix, input) {
    let init = salt(prefix);
    return Poseidon.update(init, input)[0];
}
const prefixes = new Proxy({}, {
    // hack bc Poseidon_.prefixes is not available at start-up
    get(_target, prop) {
        return Poseidon_.prefixes[prop];
    }
});
function salt(prefix) {
    return Poseidon_.update(Poseidon.initialState, [prefixToField(prefix)], 
    // salt is never suppoesed to run in checked mode
    false);
}
// same as Random_oracle.prefix_to_field in OCaml
function prefixToField(prefix) {
    if (prefix.length * 8 >= 255)
        throw Error('prefix too long');
    let bits = [...prefix]
        .map((char) => {
        // convert char to 8 bits
        let bits = [];
        for (let j = 0, c = char.charCodeAt(0); j < 8; j++, c >>= 1) {
            bits.push(!!(c & 1));
        }
        return bits;
    })
        .flat();
    return Field.ofBits(bits);
}
/**
 * Convert the {fields, packed} hash input representation to a list of field elements
 * Random_oracle_input.Chunked.pack_to_fields
 */
function packToFields({ fields = [], packed = [] }) {
    if (packed.length === 0)
        return fields;
    let packedBits = [];
    let currentPackedField = Field.zero;
    let currentSize = 0;
    for (let [field, size] of packed) {
        currentSize += size;
        if (currentSize < 255) {
            currentPackedField = currentPackedField
                .mul(Field(1n << BigInt(size)))
                .add(field);
        }
        else {
            packedBits.push(currentPackedField);
            currentSize = size;
            currentPackedField = field;
        }
    }
    packedBits.push(currentPackedField);
    return fields.concat(packedBits);
}
const HashInput = {
    get empty() {
        return {};
    },
    append(input1, input2) {
        if (input2.fields !== undefined) {
            (input1.fields ?? (input1.fields = [])).push(...input2.fields);
        }
        if (input2.packed !== undefined) {
            (input1.packed ?? (input1.packed = [])).push(...input2.packed);
        }
        return input1;
    },
};
const TokenSymbolPure = {
    toFields({ field }) {
        return [field];
    },
    toAuxiliary(value) {
        return [value?.symbol ?? ''];
    },
    fromFields(fields, aux) {
        let field = fields.pop();
        let symbol = aux.pop();
        return { symbol, field };
    },
    sizeInFields() {
        return 1;
    },
    check({ field }) {
        let actual = field.rangeCheckHelper(48);
        actual.assertEquals(field);
    },
    toJSON({ symbol }) {
        return symbol;
    },
    toInput({ field }) {
        return { packed: [[field, 48]] };
    },
};
const TokenSymbol = {
    ...TokenSymbolPure,
    get empty() {
        return { symbol: '', field: Field.zero };
    },
    from(symbol) {
        let field = prefixToField(symbol);
        return { symbol, field };
    },
};
function emptyReceiptChainHash() {
    return emptyHashWithPrefix('CodaReceiptEmpty');
}
//# sourceMappingURL=hash.js.map