import { TypeMap } from './parties-leaves.js';
import { Field, Bool, Circuit } from '../snarky.js';
import { circuitArray, AsFieldsAndAux } from '../lib/circuit_value.js';
import { HashInput } from '../lib/hash.js';

export { asFieldsAndAux, Layout, AsFieldsAndAux };

type CustomTypes = Record<string, AsFieldsAndAux<any, any>>;

function asFieldsAndAux<T, TJson>(typeData: Layout, customTypes: CustomTypes) {
  return {
    sizeInFields(): number {
      return sizeInFields(typeData, customTypes);
    },
    toFields(value: T): Field[] {
      return toFields(typeData, value, customTypes);
    },
    toAuxiliary(value?: T): any[] {
      return toAuxiliary(typeData, value, customTypes);
    },
    fromFields(fields: Field[], aux: any[]): T {
      return fromFields(typeData, fields, aux, customTypes);
    },
    toJSON(value: T): TJson {
      return toJSON(typeData, value, customTypes);
    },
    check(value: T): void {
      check(typeData, value, customTypes);
    },
    toInput(value: T): HashInput {
      return toInput(typeData, value, customTypes);
    },
    witness(f: () => T): T {
      let aux: any[];
      let fields = Circuit.witness<Field[]>(
        circuitArray(Field, this.sizeInFields()),
        () => {
          let value = f();
          aux = this.toAuxiliary(value);
          return this.toFields(value);
        }
      );
      aux ??= this.toAuxiliary();
      let witness = this.fromFields(fields, aux);
      this.check(witness);
      return witness;
    },
  };
}

function toJSON(typeData: Layout, value: any, customTypes: CustomTypes) {
  return layoutFold<any, any>(
    {
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
    },
    typeData,
    value
  );
}

function toFields(typeData: Layout, value: any, customTypes: CustomTypes) {
  return layoutFold<any, Field[]>(
    {
      map(type, value) {
        return type.toFields(value);
      },
      reduceArray(array) {
        return array!.flat();
      },
      reduceObject(keys, object) {
        return keys.map((key) => object![key]).flat();
      },
      reduceFlaggedOption({ isSome, value }) {
        return [isSome, value].flat();
      },
      reduceOrUndefined(_) {
        return [];
      },
      customTypes,
    },
    typeData,
    value
  );
}

function toAuxiliary(typeData: Layout, value: any, customTypes: CustomTypes) {
  return layoutFold<any, any[]>(
    {
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
    },
    typeData,
    value
  );
}

function sizeInFields(typeData: Layout, customTypes: CustomTypes) {
  let spec: FoldSpec<any, number> = {
    map(type) {
      return type.sizeInFields();
    },
    reduceArray(_, { inner, staticLength }): number {
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
  return layoutFold<any, number>(spec, typeData);
}

function fromFields(
  typeData: Layout,
  fields: Field[],
  aux: any[],
  customTypes: CustomTypes
) {
  return fromFieldsReversed(
    typeData,
    [...fields].reverse(),
    [...aux].reverse(),
    customTypes
  );
}

function fromFieldsReversed(
  typeData: Layout,
  fields: Field[],
  aux: any[],
  customTypes: CustomTypes
): any {
  let { checkedTypeName } = typeData;
  if (checkedTypeName) {
    // there's a custom type!
    return customTypes[checkedTypeName].fromFields(fields, aux);
  }
  if (typeData.type === 'array') {
    let value = [];
    let length = aux.pop()!;
    for (let i = 0; i < length; i++) {
      value[i] = fromFieldsReversed(typeData.inner, fields, aux, customTypes);
    }
    return value;
  }
  if (typeData.type === 'option') {
    let { optionType, inner } = typeData;
    switch (optionType) {
      case 'flaggedOption':
        let isSome = Bool.Unsafe.ofField(fields.pop()!);
        let value = fromFieldsReversed(inner, fields, aux, customTypes);
        return { isSome, value };
      case 'orUndefined':
        let isDefined = aux.pop()!;
        return isDefined
          ? fromFieldsReversed(inner, fields, aux, customTypes)
          : undefined;
      default:
        throw Error('bug');
    }
  }
  if (typeData.type === 'object') {
    let { name, keys, entries } = typeData;
    let values: Record<string, any> = {};
    for (let key of keys) {
      values[key] = fromFieldsReversed(entries[key], fields, aux, customTypes);
    }
    return values;
  }
  return TypeMap[typeData.type].fromFields(fields, aux);
}

function check(typeData: Layout, value: any, customTypes: CustomTypes) {
  return layoutFold<any, void>(
    {
      map(type, value) {
        return type.check(value);
      },
      reduceArray() {},
      reduceObject() {},
      reduceFlaggedOption() {},
      reduceOrUndefined() {},
      customTypes,
    },
    typeData,
    value
  );
}

function toInput(typeData: Layout, value: any, customTypes: CustomTypes) {
  return layoutFold<any, HashInput>(
    {
      map(type, value) {
        return type.toInput(value);
      },
      reduceArray(array) {
        let acc: HashInput = { fields: [], packed: [] };
        for (let { fields, packed } of array) {
          if (fields) acc.fields!.push(...fields);
          if (packed) acc.packed!.push(...packed);
        }
        return acc;
      },
      reduceObject(keys, object) {
        let acc: HashInput = { fields: [], packed: [] };
        for (let key of keys) {
          let { fields, packed } = object[key];
          if (fields) acc.fields!.push(...fields);
          if (packed) acc.packed!.push(...packed);
        }
        return acc;
      },
      reduceFlaggedOption({ isSome, value }) {
        return {
          fields: value.fields,
          packed: isSome.packed!.concat(value.packed ?? []),
        };
      },
      reduceOrUndefined(_) {
        return {};
      },
      customTypes,
    },
    typeData,
    value
  );
}

type FoldSpec<T, R> = {
  customTypes: CustomTypes;
  map: (type: AsFieldsAndAux<any, any>, value?: T) => R;
  reduceArray: (array: R[], typeData: ArrayLayout) => R;
  reduceObject: (keys: string[], record: Record<string, R>) => R;
  reduceFlaggedOption: (option: { isSome: R; value: R }) => R;
  reduceOrUndefined: (value?: R) => R;
};

function layoutFold<T, R>(
  spec: FoldSpec<T, R>,
  typeData: Layout,
  value?: T
): R {
  let { checkedTypeName } = typeData;
  if (checkedTypeName) {
    // there's a custom type!
    return spec.map(spec.customTypes[checkedTypeName], value);
  }
  if (typeData.type === 'array') {
    let v: T[] | undefined = value as any;
    let array = v?.map((x: T) => layoutFold(spec, typeData.inner, x)) ?? [];
    return spec.reduceArray(array, typeData);
  }
  if (typeData.type === 'option') {
    let { optionType, inner } = typeData;
    switch (optionType) {
      case 'flaggedOption':
        let v: { isSome: T; value: T } | undefined = value as any;
        return spec.reduceFlaggedOption({
          isSome: spec.map(TypeMap.Bool, v?.isSome),
          value: layoutFold(spec, inner, v?.value),
        });
      case 'orUndefined':
        let mapped =
          value === undefined ? undefined : layoutFold(spec, inner, value);
        return spec.reduceOrUndefined(mapped);
      default:
        throw Error('bug');
    }
  }
  if (typeData.type === 'object') {
    let { keys, entries } = typeData;
    let v: Record<string, T> | undefined = value as any;
    let object: Record<string, R> = {};
    keys.forEach((key) => {
      object[key] = layoutFold(spec, entries[key], v?.[key]);
    });
    return spec.reduceObject(keys, object);
  }
  return spec.map(TypeMap[typeData.type], value);
}

// types

type WithChecked = { checkedType?: Layout; checkedTypeName?: string };

type BaseLayout = { type: keyof TypeMap } & WithChecked;

type RangeLayout<T extends BaseLayout> = {
  type: 'object';
  name: string;
  keys: ['lower', 'upper'];
  entries: { lower: T; upper: T };
} & WithChecked;

type OptionLayout<T extends BaseLayout> = { type: 'option' } & (
  | {
      optionType: 'flaggedOption';
      inner: RangeLayout<T>;
    }
  | {
      optionType: 'flaggedOption';
      inner: T;
    }
  | {
      optionType: 'orUndefined';
      inner: T;
    }
) &
  WithChecked;

type ArrayLayout = {
  type: 'array';
  inner: Layout;
  staticLength: number | null;
} & WithChecked;

type Layout =
  | OptionLayout<BaseLayout>
  | BaseLayout
  | ({
      type: 'object';
      name: string;
      keys: string[];
      entries: Record<string, Layout>;
    } & WithChecked)
  | ArrayLayout;
