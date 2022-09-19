import { TypeMap } from './parties-leaves.js';
import { Field, Bool, Circuit } from '../snarky.js';
import { circuitArray, AsFieldsAndAux } from '../lib/circuit_value.js';
export { asFieldsAndAux, AsFieldsAndAux };
function asFieldsAndAux(typeData, customTypes) {
    return {
        sizeInFields() {
            return sizeInFields(typeData, customTypes);
        },
        toFields(value) {
            return toFields(typeData, value, customTypes);
        },
        toAuxiliary(value) {
            return toAuxiliary(typeData, value, customTypes);
        },
        fromFields(fields, aux) {
            return fromFields(typeData, fields, aux, customTypes);
        },
        toJSON(value) {
            return toJSON(typeData, value, customTypes);
        },
        check(value) {
            check(typeData, value, customTypes);
        },
        toInput(value) {
            return toInput(typeData, value, customTypes);
        },
        witness(f) {
            let aux;
            let fields = Circuit.witness(circuitArray(Field, this.sizeInFields()), () => {
                let value = f();
                aux = this.toAuxiliary(value);
                return this.toFields(value);
            });
            aux ?? (aux = this.toAuxiliary());
            let witness = this.fromFields(fields, aux);
            this.check(witness);
            return witness;
        },
    };
}
function toJSON(typeData, value, customTypes) {
    return layoutFold({
        map(type, value) {
            return type.toJSON(value);
        },
        reduceArray(array) {
            return array;
        },
        reduceObject(_, object) {
            return object;
        },
        reduceFlaggedOption({ isSome, value }) {
            return isSome ? value : null;
        },
        reduceOrUndefined(value) {
            return value ?? null;
        },
        customTypes,
    }, typeData, value);
}
function toFields(typeData, value, customTypes) {
    return layoutFold({
        map(type, value) {
            return type.toFields(value);
        },
        reduceArray(array) {
            return array.flat();
        },
        reduceObject(keys, object) {
            return keys.map((key) => object[key]).flat();
        },
        reduceFlaggedOption({ isSome, value }) {
            return [isSome, value].flat();
        },
        reduceOrUndefined(_) {
            return [];
        },
        customTypes,
    }, typeData, value);
}
function toAuxiliary(typeData, value, customTypes) {
    return layoutFold({
        map(type, value) {
            return type.toAuxiliary(value);
        },
        reduceArray(array, { staticLength }) {
            let length = staticLength ?? array.length;
            return [length].concat(array.flat());
        },
        reduceObject(keys, object) {
            return keys.map((key) => object[key]).flat();
        },
        reduceFlaggedOption({ isSome, value }) {
            return [isSome, value].flat();
        },
        reduceOrUndefined(value) {
            return value === undefined ? [false] : [true].concat(value);
        },
        customTypes,
    }, typeData, value);
}
function sizeInFields(typeData, customTypes) {
    let spec = {
        map(type) {
            return type.sizeInFields();
        },
        reduceArray(_, { inner, staticLength }) {
            let length = staticLength ?? NaN;
            return length * layoutFold(spec, inner);
        },
        reduceObject(keys, object) {
            return keys.map((key) => object[key]).reduce((x, y) => x + y);
        },
        reduceFlaggedOption({ isSome, value }) {
            return isSome + value;
        },
        reduceOrUndefined(_) {
            return 0;
        },
        customTypes,
    };
    return layoutFold(spec, typeData);
}
function fromFields(typeData, fields, aux, customTypes) {
    return fromFieldsReversed(typeData, [...fields].reverse(), [...aux].reverse(), customTypes);
}
function fromFieldsReversed(typeData, fields, aux, customTypes) {
    let { checkedTypeName } = typeData;
    if (checkedTypeName) {
        // there's a custom type!
        return customTypes[checkedTypeName].fromFields(fields, aux);
    }
    if (typeData.type === 'array') {
        let value = [];
        let length = aux.pop();
        for (let i = 0; i < length; i++) {
            value[i] = fromFieldsReversed(typeData.inner, fields, aux, customTypes);
        }
        return value;
    }
    if (typeData.type === 'option') {
        let { optionType, inner } = typeData;
        switch (optionType) {
            case 'flaggedOption':
                let isSome = Bool.Unsafe.ofField(fields.pop());
                let value = fromFieldsReversed(inner, fields, aux, customTypes);
                return { isSome, value };
            case 'orUndefined':
                let isDefined = aux.pop();
                return isDefined
                    ? fromFieldsReversed(inner, fields, aux, customTypes)
                    : undefined;
            default:
                throw Error('bug');
        }
    }
    if (typeData.type === 'object') {
        let { name, keys, entries } = typeData;
        let values = {};
        for (let key of keys) {
            values[key] = fromFieldsReversed(entries[key], fields, aux, customTypes);
        }
        return values;
    }
    return TypeMap[typeData.type].fromFields(fields, aux);
}
function check(typeData, value, customTypes) {
    return layoutFold({
        map(type, value) {
            return type.check(value);
        },
        reduceArray() { },
        reduceObject() { },
        reduceFlaggedOption() { },
        reduceOrUndefined() { },
        customTypes,
    }, typeData, value);
}
function toInput(typeData, value, customTypes) {
    return layoutFold({
        map(type, value) {
            return type.toInput(value);
        },
        reduceArray(array) {
            let acc = { fields: [], packed: [] };
            for (let { fields, packed } of array) {
                if (fields)
                    acc.fields.push(...fields);
                if (packed)
                    acc.packed.push(...packed);
            }
            return acc;
        },
        reduceObject(keys, object) {
            let acc = { fields: [], packed: [] };
            for (let key of keys) {
                let { fields, packed } = object[key];
                if (fields)
                    acc.fields.push(...fields);
                if (packed)
                    acc.packed.push(...packed);
            }
            return acc;
        },
        reduceFlaggedOption({ isSome, value }) {
            return {
                fields: value.fields,
                packed: isSome.packed.concat(value.packed ?? []),
            };
        },
        reduceOrUndefined(_) {
            return {};
        },
        customTypes,
    }, typeData, value);
}
function layoutFold(spec, typeData, value) {
    let { checkedTypeName } = typeData;
    if (checkedTypeName) {
        // there's a custom type!
        return spec.map(spec.customTypes[checkedTypeName], value);
    }
    if (typeData.type === 'array') {
        let v = value;
        let array = v?.map((x) => layoutFold(spec, typeData.inner, x)) ?? [];
        return spec.reduceArray(array, typeData);
    }
    if (typeData.type === 'option') {
        let { optionType, inner } = typeData;
        switch (optionType) {
            case 'flaggedOption':
                let v = value;
                return spec.reduceFlaggedOption({
                    isSome: spec.map(TypeMap.Bool, v?.isSome),
                    value: layoutFold(spec, inner, v?.value),
                });
            case 'orUndefined':
                let mapped = value === undefined ? undefined : layoutFold(spec, inner, value);
                return spec.reduceOrUndefined(mapped);
            default:
                throw Error('bug');
        }
    }
    if (typeData.type === 'object') {
        let { keys, entries } = typeData;
        let v = value;
        let object = {};
        keys.forEach((key) => {
            object[key] = layoutFold(spec, entries[key], v?.[key]);
        });
        return spec.reduceObject(keys, object);
    }
    return spec.map(TypeMap[typeData.type], value);
}
//# sourceMappingURL=parties-helpers.js.map