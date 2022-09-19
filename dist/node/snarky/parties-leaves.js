import { Field, Bool } from '../lib/core.js';
import { UInt32, UInt64, Sign } from '../lib/int.js';
import { TokenSymbol } from '../lib/hash.js';
import { PublicKey } from '../lib/signature.js';
import { AsFieldsAndAux, circuitValue, } from '../lib/circuit_value.js';
import * as Encoding from '../lib/encoding.js';
export { PublicKey, Field, Bool, AuthRequired, UInt64, UInt32, Sign, TokenId };
export { Events, Events as SequenceEvents, StringWithHash, TokenSymbol };
export { TypeMap };
// types that implement AsFieldAndAux, and so can be left out of the conversion maps below
// sort of a "transposed" representation
let emptyType = {
    sizeInFields: () => 0,
    toFields: () => [],
    toAuxiliary: () => [],
    fromFields: () => null,
    check: () => { },
    toInput: () => ({}),
    toJSON: () => null,
};
const TokenId = {
    ...circuitValue(Field),
    toJSON(x) {
        return Encoding.TokenId.toBase58(x);
    },
};
const AuthRequired = {
    ...circuitValue({ constant: Bool, signatureNecessary: Bool, signatureSufficient: Bool }, {
        customObjectKeys: [
            'constant',
            'signatureNecessary',
            'signatureSufficient',
        ],
    }),
    toJSON(x) {
        let c = Number(x.constant.toBoolean());
        let n = Number(x.signatureNecessary.toBoolean());
        let s = Number(x.signatureSufficient.toBoolean());
        // prettier-ignore
        switch (`${c}${n}${s}`) {
            case '110': return 'Impossible';
            case '101': return 'None';
            case '000': return 'Proof';
            case '011': return 'Signature';
            case '001': return 'Either';
            default: throw Error('Unexpected permission');
        }
    },
};
let { fromCircuitValue } = AsFieldsAndAux;
const TypeMap = {
    Field: fromCircuitValue(Field),
    Bool: fromCircuitValue(Bool),
    UInt32: fromCircuitValue(UInt32),
    UInt64: fromCircuitValue(UInt64),
    Sign: fromCircuitValue(Sign),
    TokenId: fromCircuitValue(TokenId),
    AuthRequired: fromCircuitValue(AuthRequired),
    PublicKey: fromCircuitValue(PublicKey),
    // primitive JS types
    number: {
        ...emptyType,
        toAuxiliary: (value = 0) => [value],
        toJSON: (value) => value,
        fromFields: (_, aux) => aux.pop(),
    },
    string: {
        ...emptyType,
        toAuxiliary: (value = '') => [value],
        toJSON: (value) => value,
        fromFields: (_, aux) => aux.pop(),
    },
    null: emptyType,
    undefined: {
        ...emptyType,
        fromFields: () => undefined,
    },
};
const Events = {
    sizeInFields() {
        return 1;
    },
    toFields({ hash }) {
        return [hash];
    },
    toAuxiliary(value) {
        return [value?.data ?? []];
    },
    fromFields(fields, aux) {
        let hash = fields.pop();
        let data = aux.pop();
        return { data, hash };
    },
    toJSON({ data }) {
        return data.map((row) => row.map((e) => e.toString()));
    },
    check() { },
    toInput({ hash }) {
        return { fields: [hash] };
    },
};
const StringWithHash = {
    sizeInFields() {
        return 1;
    },
    toFields({ hash }) {
        return [hash];
    },
    toAuxiliary(value) {
        return [value?.data ?? ''];
    },
    fromFields(fields, aux) {
        let hash = fields.pop();
        let data = aux.pop();
        return { data, hash };
    },
    toJSON({ data }) {
        return data;
    },
    check() { },
    toInput({ hash }) {
        return { fields: [hash] };
    },
};
//# sourceMappingURL=parties-leaves.js.map