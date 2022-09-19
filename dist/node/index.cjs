var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// dist/node/index.js
__export(exports, {
  Bool: () => Bool,
  Character: () => Character,
  Circuit: () => Circuit,
  CircuitString: () => CircuitString,
  CircuitValue: () => CircuitValue,
  Encoding: () => encoding_exports,
  Encryption: () => encryption_exports,
  Experimental: () => Experimental,
  Field: () => Field,
  Group: () => Group,
  Int64: () => Int64,
  Ledger: () => Ledger,
  Mina: () => mina_exports,
  Party: () => Party2,
  Permissions: () => Permissions,
  Poseidon: () => Poseidon2,
  PrivateKey: () => PrivateKey,
  Proof: () => Proof,
  PublicKey: () => PublicKey,
  Scalar: () => Scalar,
  SelfProof: () => SelfProof,
  Sign: () => Sign,
  Signature: () => Signature,
  SmartContract: () => SmartContract,
  State: () => State,
  Token: () => Token,
  Types: () => parties_exports,
  UInt32: () => UInt32,
  UInt64: () => UInt64,
  ZkProgram: () => ZkProgram,
  ZkappPublicInput: () => ZkappPublicInput,
  addCachedAccount: () => addCachedAccount,
  arrayProp: () => arrayProp,
  circuitMain: () => circuitMain,
  circuitValue: () => circuitValue,
  declareMethods: () => declareMethods,
  declareState: () => declareState,
  deploy: () => deploy,
  fetchAccount: () => fetchAccount,
  fetchLastBlock: () => fetchLastBlock,
  getSrs: () => getSrs,
  isReady: () => isReady,
  matrixProp: () => matrixProp,
  method: () => method,
  partiesToJson: () => partiesToJson,
  prop: () => prop,
  public_: () => public_,
  recoverVerificationKey: () => recoverVerificationKey,
  sendZkapp: () => sendZkapp,
  serializeVerificationKey: () => serializeVerificationKey,
  setGraphqlEndpoint: () => setGraphqlEndpoint,
  shutdown: () => shutdown,
  signFeePayer: () => signFeePayer,
  state: () => state,
  verify: () => verify
});

// dist/node/snarky/wrapper.js
var import_snarky_js_node_bc = __toModule(require("./_node_bindings/snarky_js_node.bc.cjs"));
var getSnarky = () => import_snarky_js_node_bc.default;
var snarky_ready = import_snarky_js_node_bc.default.snarky_ready;
function getWasm() {
  return globalThis.jsoo_runtime.plonk_wasm;
}
async function shutdown() {
  process.exit(0);
}

// dist/node/snarky/snarky-class-spec.js
var snarky_class_spec_default = [
  {
    name: "Field",
    props: [
      {
        name: "one",
        type: "object"
      },
      {
        name: "zero",
        type: "object"
      },
      {
        name: "minusOne",
        type: "object"
      },
      {
        name: "ORDER",
        type: "bigint"
      },
      {
        name: "random",
        type: "function"
      },
      {
        name: "add",
        type: "function"
      },
      {
        name: "sub",
        type: "function"
      },
      {
        name: "mul",
        type: "function"
      },
      {
        name: "div",
        type: "function"
      },
      {
        name: "neg",
        type: "function"
      },
      {
        name: "inv",
        type: "function"
      },
      {
        name: "square",
        type: "function"
      },
      {
        name: "sqrt",
        type: "function"
      },
      {
        name: "toString",
        type: "function"
      },
      {
        name: "sizeInFields",
        type: "function"
      },
      {
        name: "toFields",
        type: "function"
      },
      {
        name: "ofFields",
        type: "function"
      },
      {
        name: "assertEqual",
        type: "function"
      },
      {
        name: "assertBoolean",
        type: "function"
      },
      {
        name: "isZero",
        type: "function"
      },
      {
        name: "ofBits",
        type: "function"
      },
      {
        name: "toBits",
        type: "function"
      },
      {
        name: "equal",
        type: "function"
      },
      {
        name: "toJSON",
        type: "function"
      },
      {
        name: "fromJSON",
        type: "function"
      },
      {
        name: "fromNumber",
        type: "function"
      },
      {
        name: "fromString",
        type: "function"
      },
      {
        name: "fromBigInt",
        type: "function"
      },
      {
        name: "check",
        type: "function"
      }
    ]
  },
  {
    name: "Bool",
    props: [
      {
        name: "true",
        type: "object"
      },
      {
        name: "false",
        type: "object"
      },
      {
        name: "toField",
        type: "function"
      },
      {
        name: "Unsafe",
        type: "object"
      },
      {
        name: "not",
        type: "function"
      },
      {
        name: "and",
        type: "function"
      },
      {
        name: "or",
        type: "function"
      },
      {
        name: "assertEqual",
        type: "function"
      },
      {
        name: "equal",
        type: "function"
      },
      {
        name: "count",
        type: "function"
      },
      {
        name: "sizeInFields",
        type: "function"
      },
      {
        name: "toFields",
        type: "function"
      },
      {
        name: "ofFields",
        type: "function"
      },
      {
        name: "check",
        type: "function"
      },
      {
        name: "toJSON",
        type: "function"
      },
      {
        name: "fromJSON",
        type: "function"
      }
    ]
  },
  {
    name: "Circuit",
    props: [
      {
        name: "runAndCheck",
        type: "function"
      },
      {
        name: "_constraintSystem",
        type: "function"
      },
      {
        name: "asProver",
        type: "function"
      },
      {
        name: "witness",
        type: "function"
      },
      {
        name: "array",
        type: "function"
      },
      {
        name: "generateKeypair",
        type: "function"
      },
      {
        name: "prove",
        type: "function"
      },
      {
        name: "verify",
        type: "function"
      },
      {
        name: "assertEqual",
        type: "function"
      },
      {
        name: "equal",
        type: "function"
      },
      {
        name: "toFields",
        type: "function"
      },
      {
        name: "inProver",
        type: "function"
      },
      {
        name: "inCheckedComputation",
        type: "function"
      },
      {
        name: "if",
        type: "function"
      },
      {
        name: "getVerificationKey",
        type: "function"
      }
    ]
  },
  {
    name: "Poseidon",
    props: [
      {
        name: "hash",
        type: "function"
      },
      {
        name: "update",
        type: "function"
      },
      {
        name: "prefixes",
        type: "object"
      },
      {
        name: "spongeCreate",
        type: "function"
      },
      {
        name: "spongeAbsorb",
        type: "function"
      },
      {
        name: "spongeSqueeze",
        type: "function"
      }
    ]
  },
  {
    name: "Group",
    props: [
      {
        name: "generator",
        type: "object"
      },
      {
        name: "add",
        type: "function"
      },
      {
        name: "sub",
        type: "function"
      },
      {
        name: "neg",
        type: "function"
      },
      {
        name: "scale",
        type: "function"
      },
      {
        name: "assertEqual",
        type: "function"
      },
      {
        name: "equal",
        type: "function"
      },
      {
        name: "toFields",
        type: "function"
      },
      {
        name: "ofFields",
        type: "function"
      },
      {
        name: "sizeInFields",
        type: "function"
      },
      {
        name: "check",
        type: "function"
      },
      {
        name: "toJSON",
        type: "function"
      },
      {
        name: "fromJSON",
        type: "function"
      }
    ]
  },
  {
    name: "Scalar",
    props: [
      {
        name: "toFields",
        type: "function"
      },
      {
        name: "sizeInFields",
        type: "function"
      },
      {
        name: "ofFields",
        type: "function"
      },
      {
        name: "random",
        type: "function"
      },
      {
        name: "ofBits",
        type: "function"
      },
      {
        name: "toJSON",
        type: "function"
      },
      {
        name: "fromJSON",
        type: "function"
      },
      {
        name: "check",
        type: "function"
      }
    ]
  },
  {
    name: "Ledger",
    props: [
      {
        name: "create",
        type: "function"
      },
      {
        name: "customTokenId",
        type: "function"
      },
      {
        name: "customTokenIdChecked",
        type: "function"
      },
      {
        name: "createTokenAccount",
        type: "function"
      },
      {
        name: "hashTransaction",
        type: "function"
      },
      {
        name: "hashTransactionChecked",
        type: "function"
      },
      {
        name: "transactionCommitments",
        type: "function"
      },
      {
        name: "zkappPublicInput",
        type: "function"
      },
      {
        name: "signFieldElement",
        type: "function"
      },
      {
        name: "dummySignature",
        type: "function"
      },
      {
        name: "signFeePayer",
        type: "function"
      },
      {
        name: "signOtherParty",
        type: "function"
      },
      {
        name: "publicKeyToString",
        type: "function"
      },
      {
        name: "publicKeyOfString",
        type: "function"
      },
      {
        name: "privateKeyToString",
        type: "function"
      },
      {
        name: "privateKeyOfString",
        type: "function"
      },
      {
        name: "fieldToBase58",
        type: "function"
      },
      {
        name: "fieldOfBase58",
        type: "function"
      },
      {
        name: "memoToBase58",
        type: "function"
      },
      {
        name: "fieldsOfJson",
        type: "function"
      },
      {
        name: "hashPartyFromFields",
        type: "function"
      },
      {
        name: "hashPartyFromJson",
        type: "function"
      },
      {
        name: "hashInputFromJson",
        type: "object"
      },
      { name: "encoding", type: "object" }
    ]
  },
  {
    name: "Pickles",
    props: [
      {
        name: "compile",
        type: "function"
      },
      {
        name: "circuitDigest",
        type: "function"
      },
      {
        name: "verify",
        type: "function"
      },
      {
        name: "proofToBase64",
        type: "function"
      },
      {
        name: "proofOfBase64",
        type: "function"
      },
      {
        name: "proofToBase64Transaction",
        type: "function"
      }
    ]
  }
];

// dist/node/snarky/proxy.js
function proxyClasses(getModuleObject, isItReady2, moduleSpec) {
  let moduleProxy = {};
  for (let classSpec of moduleSpec) {
    let className = classSpec.name;
    let Class = function(...args) {
      if (!isItReady2())
        throw Error(constructError(className));
      let moduleObject = getModuleObject();
      return new moduleObject[className](...args);
    };
    for (let prop2 of classSpec.props) {
      let propName = prop2.name;
      if (prop2.type === "function") {
        Class[propName] = function(...args) {
          if (!isItReady2())
            throw Error(methodError(className, propName));
          let moduleObject = getModuleObject();
          return moduleObject[className][propName].apply(this, args);
        };
      } else {
        Object.defineProperty(Class, propName, {
          get: function() {
            let moduleObject = getModuleObject();
            return moduleObject[className][propName];
          }
        });
      }
    }
    moduleProxy[className] = Class;
  }
  return moduleProxy;
}
var constructError = (className) => `Cannot call class constructor because snarkyjs has not finished loading.
Try calling \`await isReady\` before \`new ${className}()\``;
var methodError = (className, methodName) => `Cannot call static method because snarkyjs has not finished loading.
Try calling \`await isReady\` before \`${className}.${methodName}()\``;

// dist/node/snarky.js
var isReadyBoolean = false;
var isReady = snarky_ready.then(() => isReadyBoolean = true);
var isItReady = () => isReadyBoolean;
var { Field, Bool, Circuit, Poseidon, Group, Scalar, Ledger, Pickles } = proxyClasses(getSnarky, isItReady, snarky_class_spec_default);

// dist/node/lib/core.js
Field.toInput = function(x) {
  return { fields: [x] };
};
Bool.toInput = function(x) {
  return { packed: [[x.toField(), 1]] };
};

// dist/node/snarky/addons.js
function getJsooRuntime() {
  return globalThis.jsoo_runtime;
}
function getSrs(keypair) {
  return keypair.value[2][4];
}
function serializeVerificationKey(verificationKey) {
  let wasm = getWasm();
  let runtime = getJsooRuntime();
  let isFp = verificationKey.value[4].constructor.name === "WasmFpSrs";
  return isFp ? wasm.caml_pasta_fp_plonk_verifier_index_serialize(runtime.caml_pasta_fp_plonk_verifier_index_to_rust(verificationKey.value)) : wasm.caml_pasta_fq_plonk_verifier_index_serialize(runtime.caml_pasta_fq_plonk_verifier_index_to_rust(verificationKey.value));
}
function recoverVerificationKey(srs, serializedVk) {
  let vkRust = getWasm().caml_pasta_fp_plonk_verifier_index_deserialize(srs, serializedVk);
  let vk = getJsooRuntime().caml_pasta_fp_plonk_verifier_index_of_rust(vkRust);
  return Circuit.getVerificationKey(vk);
}

// dist/node/lib/circuit_value.js
var import_reflect_metadata = __toModule(require("reflect-metadata"));

// dist/node/lib/global-context.js
var Context = { create };
function create(options = {
  allowsNesting: true,
  default: void 0
}) {
  let t = Object.assign(function() {
    return t.data[t.data.length - 1]?.context;
  }, {
    data: [],
    allowsNesting: options.allowsNesting ?? true,
    get: () => get(t),
    has: () => t.data.length !== 0,
    runWith: (context, func) => runWith(t, context, func),
    runWithAsync: (context, func) => runWithAsync(t, context, func),
    enter: (context) => enter(t, context),
    leave: (id) => leave(t, id),
    id: () => {
      if (t.data.length === 0)
        throw Error(contextConflictMessage);
      return t.data[t.data.length - 1].id;
    }
  });
  if (options.default !== void 0)
    enter(t, options.default);
  return t;
}
function enter(t, context) {
  if (t.data.length > 0 && !t.allowsNesting) {
    throw Error(contextConflictMessage);
  }
  let id = Math.random();
  t.data.push({ context, id });
  return id;
}
function leave(t, id) {
  let current = t.data.pop();
  if (current === void 0)
    throw Error(contextConflictMessage);
  if (current.id !== id)
    throw Error(contextConflictMessage);
  return current.context;
}
function get(t) {
  if (t.data.length === 0)
    throw Error(contextConflictMessage);
  let current = t.data[t.data.length - 1];
  return current.context;
}
function runWith(t, context, func) {
  let id = enter(t, context);
  let result;
  let resultContext;
  try {
    result = func();
  } finally {
    resultContext = leave(t, id);
  }
  return [resultContext, result];
}
async function runWithAsync(t, context, func) {
  let id = enter(t, context);
  let result;
  let resultContext;
  try {
    result = await func();
  } finally {
    resultContext = leave(t, id);
  }
  return [resultContext, result];
}
var contextConflictMessage = "It seems you're running multiple provers concurrently within the same JavaScript thread, which, at the moment, is not supported and would lead to bugs.";

// dist/node/lib/circuit_value.js
var CircuitValue = class {
  constructor(...props) {
    if (props.length === 0)
      return;
    let fields = this.constructor.prototype._fields;
    if (fields === void 0)
      return;
    if (props.length !== fields.length) {
      throw Error(`${this.constructor.name} constructor called with ${props.length} arguments, but expected ${fields.length}`);
    }
    for (let i2 = 0; i2 < fields.length; ++i2) {
      let [key] = fields[i2];
      this[key] = props[i2];
    }
  }
  static fromObject(value) {
    return Object.assign(Object.create(this.prototype), value);
  }
  static sizeInFields() {
    const fields = this.prototype._fields;
    return fields.reduce((acc, [_, typ]) => acc + typ.sizeInFields(), 0);
  }
  static toFields(v) {
    const res = [];
    const fields = this.prototype._fields;
    if (fields === void 0 || fields === null) {
      return res;
    }
    for (let i2 = 0, n = fields.length; i2 < n; ++i2) {
      const [key, propType] = fields[i2];
      const subElts = propType.toFields(v[key]);
      subElts.forEach((x) => res.push(x));
    }
    return res;
  }
  static toInput(v) {
    let input = { fields: [], packed: [] };
    let fields = this.prototype._fields;
    if (fields === void 0)
      return input;
    for (let i2 = 0, n = fields.length; i2 < n; ++i2) {
      let [key, type] = fields[i2];
      if ("toInput" in type) {
        HashInput.append(input, type.toInput(v[key]));
        continue;
      }
      let xs = type.toFields(v[key]);
      input.fields.push(...xs);
    }
    return input;
  }
  toFields() {
    return this.constructor.toFields(this);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
  toConstant() {
    return this.constructor.toConstant(this);
  }
  equals(x) {
    return Circuit.equal(this, x);
  }
  assertEquals(x) {
    Circuit.assertEqual(this, x);
  }
  isConstant() {
    return this.toFields().every((x) => x.isConstant());
  }
  static ofFields(xs) {
    const fields = this.prototype._fields;
    if (xs.length < fields.length) {
      throw Error(`${this.name}.ofFields: Expected ${fields.length} field elements, got ${xs?.length}`);
    }
    let offset = 0;
    const props = {};
    for (let i2 = 0; i2 < fields.length; ++i2) {
      const [key, propType] = fields[i2];
      const propSize = propType.sizeInFields();
      const propVal = propType.ofFields(xs.slice(offset, offset + propSize));
      props[key] = propVal;
      offset += propSize;
    }
    return Object.assign(Object.create(this.prototype), props);
  }
  static check(v) {
    const fields = this.prototype._fields;
    if (fields === void 0 || fields === null) {
      return;
    }
    for (let i2 = 0; i2 < fields.length; ++i2) {
      const [key, propType] = fields[i2];
      const value = v[key];
      if (propType.check === void 0)
        throw Error("bug: circuit value without .check()");
      propType.check(value);
    }
  }
  static toConstant(t) {
    const xs = this.toFields(t);
    return this.ofFields(xs.map((x) => x.toConstant()));
  }
  static toJSON(v) {
    const res = {};
    if (this.prototype._fields !== void 0) {
      const fields = this.prototype._fields;
      fields.forEach(([key, propType]) => {
        res[key] = propType.toJSON(v[key]);
      });
    }
    return res;
  }
  static fromJSON(value) {
    const props = {};
    const fields = this.prototype._fields;
    switch (typeof value) {
      case "object":
        if (value === null || Array.isArray(value)) {
          return null;
        }
        break;
      default:
        return null;
    }
    if (fields !== void 0) {
      for (let i2 = 0; i2 < fields.length; ++i2) {
        const [key, propType] = fields[i2];
        if (value[key] === void 0) {
          return null;
        } else {
          props[key] = propType.fromJSON(value[key]);
        }
      }
    }
    return Object.assign(Object.create(this.prototype), props);
  }
};
function prop(target, key) {
  const fieldType = Reflect.getMetadata("design:type", target, key);
  if (!target.hasOwnProperty("_fields")) {
    target._fields = [];
  }
  if (fieldType === void 0) {
  } else if (fieldType.toFields && fieldType.ofFields) {
    target._fields.push([key, fieldType]);
  } else {
    console.log(`warning: property ${key} missing field element conversion methods`);
  }
}
function circuitArray(elementType, length) {
  return {
    sizeInFields() {
      let elementLength = elementType.sizeInFields();
      return elementLength * length;
    },
    toFields(array) {
      return array.map((e) => elementType.toFields(e)).flat();
    },
    ofFields(fields) {
      let array = [];
      let elementLength = elementType.sizeInFields();
      let n = elementLength * length;
      for (let i2 = 0; i2 < n; i2 += elementLength) {
        array.push(elementType.ofFields(fields.slice(i2, i2 + elementLength)));
      }
      return array;
    },
    check(array) {
      for (let i2 = 0; i2 < length; i2++) {
        elementType.check(array[i2]);
      }
    },
    toJSON(array) {
      if (!("toJSON" in elementType)) {
        throw Error("circuitArray.toJSON: element type has no toJSON method");
      }
      return array.map((v) => elementType.toJSON(v));
    },
    toInput(array) {
      if (!("toInput" in elementType)) {
        throw Error("circuitArray.toInput: element type has no toInput method");
      }
      return array.reduce((curr, value) => HashInput.append(curr, elementType.toInput(value)), HashInput.empty);
    }
  };
}
function arrayProp(elementType, length) {
  return function(target, key) {
    if (!target.hasOwnProperty("_fields")) {
      target._fields = [];
    }
    target._fields.push([key, circuitArray(elementType, length)]);
  };
}
function matrixProp(elementType, nRows, nColumns) {
  return function(target, key) {
    if (!target.hasOwnProperty("_fields")) {
      target._fields = [];
    }
    target._fields.push([
      key,
      circuitArray(circuitArray(elementType, nColumns), nRows)
    ]);
  };
}
function public_(target, _key, index) {
  if (target._public === void 0) {
    target._public = [];
  }
  target._public.push(index);
}
function typeOfArray(typs) {
  return {
    sizeInFields: () => {
      return typs.reduce((acc, typ) => acc + typ.sizeInFields(), 0);
    },
    toFields: (t) => {
      if (t.length !== typs.length) {
        throw new Error(`typOfArray: Expected ${typs.length}, got ${t.length}`);
      }
      let res = [];
      for (let i2 = 0; i2 < t.length; ++i2) {
        res.push(...typs[i2].toFields(t[i2]));
      }
      return res;
    },
    ofFields: (xs) => {
      let offset = 0;
      let res = [];
      typs.forEach((typ) => {
        const n = typ.sizeInFields();
        res.push(typ.ofFields(xs.slice(offset, offset + n)));
        offset += n;
      });
      return res;
    },
    check(xs) {
      typs.forEach((typ, i2) => typ.check(xs[i2]));
    }
  };
}
function circuitMain(target, propertyName, _descriptor) {
  const paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyName);
  const numArgs = paramTypes.length;
  const publicIndexSet = new Set(target._public);
  const witnessIndexSet = new Set();
  for (let i2 = 0; i2 < numArgs; ++i2) {
    if (!publicIndexSet.has(i2)) {
      witnessIndexSet.add(i2);
    }
  }
  target.snarkyMain = (w, pub) => {
    let [, result] = snarkContext.runWith({ inCheckedComputation: true }, () => {
      let args = [];
      for (let i2 = 0; i2 < numArgs; ++i2) {
        args.push((publicIndexSet.has(i2) ? pub : w).shift());
      }
      return target[propertyName].apply(target, args);
    });
    return result;
  };
  target.snarkyWitnessTyp = typeOfArray(Array.from(witnessIndexSet).map((i2) => paramTypes[i2]));
  target.snarkyPublicTyp = typeOfArray(Array.from(publicIndexSet).map((i2) => paramTypes[i2]));
}
var primitives = new Set(["Field", "Bool", "Scalar", "Group"]);
var complexTypes = new Set(["object", "function"]);
function circuitValue(typeObj, options) {
  let objectKeys = typeof typeObj === "object" && typeObj !== null ? options?.customObjectKeys ?? Object.keys(typeObj).sort() : [];
  function sizeInFields2(typeObj2) {
    if (!complexTypes.has(typeof typeObj2) || typeObj2 === null)
      return 0;
    if (Array.isArray(typeObj2))
      return typeObj2.map(sizeInFields2).reduce((a, b) => a + b, 0);
    if ("sizeInFields" in typeObj2)
      return typeObj2.sizeInFields();
    return Object.values(typeObj2).map(sizeInFields2).reduce((a, b) => a + b, 0);
  }
  function toFields2(typeObj2, obj) {
    if (!complexTypes.has(typeof typeObj2) || typeObj2 === null)
      return [];
    if (Array.isArray(typeObj2))
      return typeObj2.map((t, i2) => toFields2(t, obj[i2])).flat();
    if ("toFields" in typeObj2)
      return typeObj2.toFields(obj);
    return objectKeys.map((k) => toFields2(typeObj2[k], obj[k])).flat();
  }
  function toInput2(typeObj2, obj) {
    if (!complexTypes.has(typeof typeObj2) || typeObj2 === null)
      return {};
    if (Array.isArray(typeObj2)) {
      return typeObj2.map((t, i2) => toInput2(t, obj[i2])).reduce(HashInput.append, {});
    }
    if ("toInput" in typeObj2)
      return typeObj2.toInput(obj);
    if ("toFields" in typeObj2) {
      return { fields: typeObj2.toFields(obj) };
    }
    return objectKeys.map((k) => toInput2(typeObj2[k], obj[k])).reduce(HashInput.append, {});
  }
  function toJSON2(typeObj2, obj) {
    if (!complexTypes.has(typeof typeObj2) || typeObj2 === null)
      return obj ?? null;
    if (Array.isArray(typeObj2))
      return typeObj2.map((t, i2) => toJSON2(t, obj[i2]));
    if ("toJSON" in typeObj2)
      return typeObj2.toJSON(obj);
    return Object.fromEntries(objectKeys.map((k) => [k, toJSON2(typeObj2[k], obj[k])]));
  }
  function ofFields(typeObj2, fields) {
    if (!complexTypes.has(typeof typeObj2) || typeObj2 === null)
      return null;
    if (Array.isArray(typeObj2)) {
      let array = [];
      let offset = 0;
      for (let subObj of typeObj2) {
        let size = sizeInFields2(subObj);
        array.push(ofFields(subObj, fields.slice(offset, offset + size)));
        offset += size;
      }
      return array;
    }
    if ("ofFields" in typeObj2)
      return typeObj2.ofFields(fields);
    let values = ofFields(objectKeys.map((k) => typeObj2[k]), fields);
    return Object.fromEntries(objectKeys.map((k, i2) => [k, values[i2]]));
  }
  function check2(typeObj2, obj) {
    if (!complexTypes.has(typeof typeObj2) || typeObj2 === null)
      return;
    if (Array.isArray(typeObj2))
      return typeObj2.forEach((t, i2) => check2(t, obj[i2]));
    if ("check" in typeObj2)
      return typeObj2.check(obj);
    return objectKeys.forEach((k) => check2(typeObj2[k], obj[k]));
  }
  return {
    sizeInFields: () => sizeInFields2(typeObj),
    toFields: (obj) => toFields2(typeObj, obj),
    toInput: (obj) => toInput2(typeObj, obj),
    toJSON: (obj) => toJSON2(typeObj, obj),
    ofFields: (fields) => ofFields(typeObj, fields),
    check: (obj) => check2(typeObj, obj)
  };
}
function cloneCircuitValue(obj) {
  if (typeof obj !== "object" || obj === null)
    return obj;
  if (["GenericArgument", "Callback"].includes(obj.constructor?.name)) {
    return obj;
  }
  if (Array.isArray(obj))
    return obj.map(cloneCircuitValue);
  if (obj instanceof Set)
    return new Set([...obj].map(cloneCircuitValue));
  if (obj instanceof Map)
    return new Map([...obj].map(([k, v]) => [k, cloneCircuitValue(v)]));
  if (ArrayBuffer.isView(obj))
    return new obj.constructor(obj);
  if (primitives.has(obj.constructor.name))
    return obj;
  let propertyDescriptors = {};
  for (let [key, value] of Object.entries(obj)) {
    propertyDescriptors[key] = {
      value: cloneCircuitValue(value),
      writable: true,
      enumerable: true,
      configurable: true
    };
  }
  return Object.create(Object.getPrototypeOf(obj), propertyDescriptors);
}
function circuitValueEquals(a, b) {
  if (typeof a !== "object" || a === null)
    return a === b;
  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every((a_, i2) => circuitValueEquals(a_, b[i2]));
  }
  if (a instanceof Set) {
    return b instanceof Set && a.size === b.size && [...a].every((a_) => b.has(a_));
  }
  if (a instanceof Map) {
    return b instanceof Map && a.size === b.size && [...a].every(([k, v]) => circuitValueEquals(v, b.get(k)));
  }
  if (ArrayBuffer.isView(a) && !(a instanceof DataView)) {
    return ArrayBuffer.isView(b) && !(b instanceof DataView) && circuitValueEquals([...a], [...b]);
  }
  if ("equals" in a && typeof a.equals === "function") {
    let isEqual = a.equals(b).toBoolean();
    if (typeof isEqual === "boolean")
      return isEqual;
    if (isEqual instanceof Bool)
      return isEqual.toBoolean();
  }
  if ("toFields" in a && typeof a.toFields === "function" && "toFields" in b && typeof b.toFields === "function") {
    let aFields = a.toFields();
    let bFields = b.toFields();
    return aFields.every((a2, i2) => a2.equals(bFields[i2]).toBoolean());
  }
  let aEntries = Object.entries(a).filter(([, v]) => v !== void 0);
  let bEntries = Object.entries(b).filter(([, v]) => v !== void 0);
  if (aEntries.length !== bEntries.length)
    return false;
  return aEntries.every(([key, value]) => key in b && circuitValueEquals(b[key], value));
}
function toConstant(type, value) {
  return type.ofFields(type.toFields(value).map((x) => x.toConstant()));
}
Circuit.switch = function(mask, type, values) {
  let nValues = values.length;
  if (mask.length !== nValues)
    throw Error(`Circuit.switch: \`values\` and \`mask\` have different lengths (${values.length} vs. ${mask.length}), which is not allowed.`);
  let checkMask = () => {
    let nTrue = mask.filter((b) => b.toBoolean()).length;
    if (nTrue > 1) {
      throw Error(`Circuit.switch: \`mask\` must have 0 or 1 true element, found ${nTrue}.`);
    }
  };
  if (mask.every((b) => b.toField().isConstant()))
    checkMask();
  else
    Circuit.asProver(checkMask);
  let size = type.sizeInFields();
  let fields = Array(size).fill(Field.zero);
  for (let i2 = 0; i2 < nValues; i2++) {
    let valueFields = type.toFields(values[i2]);
    let maskField = mask[i2].toField();
    for (let j = 0; j < size; j++) {
      let maybeField = valueFields[j].mul(maskField);
      fields[j] = fields[j].add(maybeField);
    }
  }
  return type.ofFields(fields);
};
Circuit.constraintSystem = function(f) {
  let [, result] = snarkContext.runWith({ inAnalyze: true, inCheckedComputation: true }, () => {
    let result2;
    let { rows, digest, json } = Circuit._constraintSystem(() => {
      result2 = f();
    });
    return { rows, digest, result: result2 };
  });
  return result;
};
var memoizationContext = Context.create();
function memoizeWitness(type, compute) {
  return Circuit.witness(type, () => {
    if (!memoizationContext.has())
      return compute();
    let context = memoizationContext.get();
    let { memoized, currentIndex } = context;
    let currentValue = memoized[currentIndex];
    if (currentValue === void 0) {
      let value = compute();
      currentValue = type.toFields(value).map((x) => x.toConstant());
      memoized[currentIndex] = currentValue;
    }
    context.currentIndex += 1;
    return type.ofFields(currentValue);
  });
}
function getBlindingValue() {
  if (!memoizationContext.has())
    return Field.random();
  let context = memoizationContext.get();
  if (context.blindingValue === void 0) {
    context.blindingValue = Field.random();
  }
  return context.blindingValue;
}
function fromCircuitValue(type) {
  return {
    sizeInFields() {
      return type.sizeInFields();
    },
    toFields(value) {
      return type.toFields(value);
    },
    toAuxiliary(_) {
      return [];
    },
    fromFields(fields) {
      let myFields = [];
      let size = type.sizeInFields();
      for (let i2 = 0; i2 < size; i2++) {
        myFields.push(fields.pop());
      }
      return type.ofFields(myFields);
    },
    check(value) {
      type.check(value);
    },
    toInput(value) {
      return type.toInput(value);
    },
    toJSON(value) {
      return type.toJSON(value);
    }
  };
}
var AsFieldsAndAux = {
  fromCircuitValue
};

// dist/node/lib/proof_system.js
var snarkContext = Context.create({ default: {} });
var Proof = class {
  constructor({ proof, publicInput, maxProofsVerified }) {
    this.shouldVerify = Bool(false);
    this.publicInput = publicInput;
    this.proof = proof;
    this.maxProofsVerified = maxProofsVerified;
  }
  verify() {
    this.shouldVerify = Bool(true);
  }
  verifyIf(condition) {
    this.shouldVerify = condition;
  }
  toJSON() {
    return {
      publicInput: getPublicInputType(this.constructor).toFields(this.publicInput).map(String),
      maxProofsVerified: this.maxProofsVerified,
      proof: Pickles.proofToBase64([this.maxProofsVerified, this.proof])
    };
  }
  static fromJSON({ maxProofsVerified, proof: proofString, publicInput: publicInputJson }) {
    let [, proof] = Pickles.proofOfBase64(proofString, maxProofsVerified);
    let publicInput = getPublicInputType(this).ofFields(publicInputJson.map(Field.fromString));
    return new this({ publicInput, proof, maxProofsVerified });
  }
};
Proof.publicInputType = void 0;
Proof.tag = () => {
  throw Error(`You cannot use the \`Proof\` class directly. Instead, define a subclass:
class MyProof extends Proof<PublicInput> { ... }`);
};
function verify(proof, verificationKey) {
  if (typeof proof.proof === "string") {
    let [, picklesProof] = Pickles.proofOfBase64(proof.proof, proof.maxProofsVerified);
    let publicInputFields = proof.publicInput.map(Field.fromString);
    return Pickles.verify(publicInputFields, picklesProof, verificationKey);
  } else {
    let publicInputFields = getPublicInputType(proof.constructor).toFields(proof.publicInput);
    return Pickles.verify(publicInputFields, proof.proof, verificationKey);
  }
}
var compiledTags = new WeakMap();
var CompiledTag = {
  get(tag) {
    return compiledTags.get(tag);
  },
  store(tag, compiledTag) {
    compiledTags.set(tag, compiledTag);
  }
};
function ZkProgram({ publicInput: publicInputType, methods }) {
  let selfTag = { name: `Program${i++}` };
  class SelfProof2 extends Proof {
  }
  SelfProof2.publicInputType = publicInputType;
  SelfProof2.tag = () => selfTag;
  let keys = Object.keys(methods).sort();
  let methodIntfs = keys.map((key) => sortMethodArguments("program", key, methods[key].privateInputs, SelfProof2));
  let methodFunctions = keys.map((key) => methods[key].method);
  let maxProofsVerified = methodIntfs.reduce((acc, { proofArgs }) => Math.max(acc, proofArgs.length), 0);
  let compileOutput;
  async function compile() {
    let { provers: provers2, verify: verify3, getVerificationKeyArtifact } = compileProgram(publicInputType, methodIntfs, methodFunctions, selfTag);
    compileOutput = { provers: provers2, verify: verify3 };
    return { verificationKey: getVerificationKeyArtifact().data };
  }
  function toProver(key, i2) {
    async function prove(publicInput, ...args) {
      let picklesProver = compileOutput?.provers?.[i2];
      if (picklesProver === void 0) {
        throw Error(`Cannot prove execution of program.${key}(), no prover found. Try calling \`await program.compile()\` first, this will cache provers in the background.`);
      }
      let publicInputFields = publicInputType.toFields(publicInput);
      let previousProofs = getPreviousProofsForProver(args, methodIntfs[i2]);
      let [, proof] = await snarkContext.runWithAsync({ witnesses: args, inProver: true }, () => picklesProver(publicInputFields, previousProofs));
      class ProgramProof extends Proof {
      }
      ProgramProof.publicInputType = publicInputType;
      ProgramProof.tag = () => selfTag;
      return new ProgramProof({ publicInput, proof, maxProofsVerified });
    }
    return [key, prove];
  }
  let provers = Object.fromEntries(keys.map(toProver));
  function verify2(proof) {
    if (compileOutput?.verify === void 0) {
      throw Error(`Cannot verify proof, verification key not found. Try calling \`await program.compile()\` first.`);
    }
    return compileOutput.verify(publicInputType.toFields(proof.publicInput), proof.proof);
  }
  function digest() {
    let methodData = methodIntfs.map((methodEntry, i2) => analyzeMethod(publicInputType, methodEntry, methodFunctions[i2]));
    let hash = Poseidon.hash(Object.values(methodData).map((d) => Field(BigInt("0x" + d.digest))), false);
    return hash.toBigInt().toString(16);
  }
  return Object.assign(selfTag, { compile, verify: verify2, digest, publicInputType }, provers);
}
var i = 0;
var SelfProof = class extends Proof {
};
function sortMethodArguments(programName, methodName, privateInputs, selfProof) {
  let witnessArgs = [];
  let proofArgs = [];
  let allArgs = [];
  let genericArgs = [];
  for (let i2 = 0; i2 < privateInputs.length; i2++) {
    let privateInput = privateInputs[i2];
    if (isProof(privateInput)) {
      if (privateInput === Proof) {
        throw Error(`You cannot use the \`Proof\` class directly. Instead, define a subclass:
class MyProof extends Proof<PublicInput> { ... }`);
      }
      allArgs.push({ type: "proof", index: proofArgs.length });
      if (privateInput === SelfProof) {
        proofArgs.push(selfProof);
      } else {
        proofArgs.push(privateInput);
      }
    } else if (isAsFields(privateInput)) {
      allArgs.push({ type: "witness", index: witnessArgs.length });
      witnessArgs.push(privateInput);
    } else if (isGeneric(privateInput)) {
      allArgs.push({ type: "generic", index: genericArgs.length });
      genericArgs.push(privateInput);
    } else {
      throw Error(`Argument ${i2 + 1} of method ${methodName} is not a valid circuit value: ${privateInput}`);
    }
  }
  if (proofArgs.length > 2) {
    throw Error(`${programName}.${methodName}() has more than two proof arguments, which is not supported.
Suggestion: You can merge more than two proofs by merging two at a time in a binary tree.`);
  }
  return {
    methodName,
    witnessArgs,
    proofArgs,
    allArgs,
    genericArgs
  };
}
function isAsFields(type) {
  return (typeof type === "function" || typeof type === "object") && type !== null && ["toFields", "ofFields", "sizeInFields"].every((s) => s in type);
}
function isProof(type) {
  return type === Proof || typeof type === "function" && type.prototype instanceof Proof;
}
var GenericArgument = class {
  constructor(isEmpty = false) {
    this.isEmpty = isEmpty;
  }
};
var emptyGeneric = () => new GenericArgument(true);
function isGeneric(type) {
  return type === GenericArgument || typeof type === "function" && type.prototype instanceof GenericArgument;
}
function getPreviousProofsForProver(methodArgs, { allArgs, proofArgs }) {
  let previousProofs = [];
  for (let i2 = 0; i2 < allArgs.length; i2++) {
    let arg = allArgs[i2];
    if (arg.type === "proof") {
      let { proof, publicInput } = methodArgs[i2];
      let publicInputType = getPublicInputType(proofArgs[arg.index]);
      previousProofs[arg.index] = {
        publicInput: publicInputType.toFields(publicInput),
        proof
      };
    }
  }
  return previousProofs;
}
function compileProgram(publicInputType, methodIntfs, methods, proofSystemTag, additionalContext) {
  let rules = methodIntfs.map((methodEntry, i2) => picklesRuleFromFunction(publicInputType, methods[i2], proofSystemTag, methodEntry));
  let [, { getVerificationKeyArtifact, provers, verify: verify2, tag }] = snarkContext.runWith({ inCompile: true, ...additionalContext }, () => Pickles.compile(rules, publicInputType.sizeInFields()));
  CompiledTag.store(proofSystemTag, tag);
  return { getVerificationKeyArtifact, provers, verify: verify2, tag };
}
function analyzeMethod(publicInputType, methodIntf, method2) {
  return Circuit.constraintSystem(() => {
    let args = synthesizeMethodArguments(methodIntf, true);
    let publicInput = emptyWitness(publicInputType);
    return method2(publicInput, ...args);
  });
}
function picklesRuleFromFunction(publicInputType, func, proofSystemTag, { methodName, witnessArgs, proofArgs, allArgs }) {
  function main(publicInput, previousInputs) {
    let { witnesses: argsWithoutPublicInput } = snarkContext.get();
    let finalArgs = [];
    let proofs = [];
    for (let i2 = 0; i2 < allArgs.length; i2++) {
      let arg = allArgs[i2];
      if (arg.type === "witness") {
        let type = witnessArgs[arg.index];
        finalArgs[i2] = argsWithoutPublicInput ? Circuit.witness(type, () => argsWithoutPublicInput[i2]) : emptyWitness(type);
      } else if (arg.type === "proof") {
        let Proof2 = proofArgs[arg.index];
        let publicInput2 = getPublicInputType(Proof2).ofFields(previousInputs[arg.index]);
        let proofInstance;
        if (argsWithoutPublicInput) {
          let { proof } = argsWithoutPublicInput[i2];
          proofInstance = new Proof2({ publicInput: publicInput2, proof });
        } else {
          proofInstance = new Proof2({ publicInput: publicInput2, proof: void 0 });
        }
        finalArgs[i2] = proofInstance;
        proofs.push(proofInstance);
      } else if (arg.type === "generic") {
        finalArgs[i2] = argsWithoutPublicInput?.[i2] ?? emptyGeneric();
      }
    }
    func(publicInputType.ofFields(publicInput), ...finalArgs);
    return proofs.map((proof) => proof.shouldVerify);
  }
  if (proofArgs.length > 2) {
    throw Error(`${proofSystemTag.name}.${methodName}() has more than two proof arguments, which is not supported.
Suggestion: You can merge more than two proofs by merging two at a time in a binary tree.`);
  }
  let proofsToVerify = proofArgs.map((Proof2) => {
    let tag = Proof2.tag();
    if (tag === proofSystemTag)
      return { isSelf: true };
    else {
      let compiledTag = CompiledTag.get(tag);
      if (compiledTag === void 0) {
        throw Error(`${proofSystemTag.name}.compile() depends on ${tag.name}, but we cannot find compilation output for ${tag.name}.
Try to run ${tag.name}.compile() first.`);
      }
      return { isSelf: false, tag: compiledTag };
    }
  });
  return { identifier: methodName, main, proofsToVerify };
}
function synthesizeMethodArguments({ allArgs, proofArgs, witnessArgs }, asVariables = false) {
  let args = [];
  let empty = asVariables ? emptyWitness : emptyValue;
  for (let arg of allArgs) {
    if (arg.type === "witness") {
      args.push(empty(witnessArgs[arg.index]));
    } else if (arg.type === "proof") {
      let Proof2 = proofArgs[arg.index];
      let publicInput = empty(getPublicInputType(Proof2));
      args.push(new Proof2({ publicInput, proof: void 0 }));
    } else if (arg.type === "generic") {
      args.push(emptyGeneric());
    }
  }
  return args;
}
function methodArgumentsToConstant({ allArgs, proofArgs, witnessArgs }, args) {
  let constArgs = [];
  for (let i2 = 0; i2 < allArgs.length; i2++) {
    let arg = args[i2];
    let { type, index } = allArgs[i2];
    if (type === "witness") {
      constArgs.push(toConstant(witnessArgs[index], arg));
    } else if (type === "proof") {
      let Proof2 = proofArgs[index];
      let publicInput = toConstant(getPublicInputType(Proof2), arg.publicInput);
      constArgs.push(new Proof2({ publicInput, proof: arg.proof }));
    } else if (type === "generic") {
      constArgs.push(arg);
    }
  }
  return constArgs;
}
var Generic = circuitValue(null);
function methodArgumentTypesAndValues({ allArgs, proofArgs, witnessArgs }, args) {
  let typesAndValues = [];
  for (let i2 = 0; i2 < allArgs.length; i2++) {
    let arg = args[i2];
    let { type, index } = allArgs[i2];
    if (type === "witness") {
      typesAndValues.push({ type: witnessArgs[index], value: arg });
    } else if (type === "proof") {
      let Proof2 = proofArgs[index];
      typesAndValues.push({
        type: getPublicInputType(Proof2),
        value: arg.publicInput
      });
    } else if (type === "generic") {
      typesAndValues.push({ type: Generic, value: arg });
    }
  }
  return typesAndValues;
}
function emptyValue(type) {
  return type.ofFields(Array(type.sizeInFields()).fill(Field.zero));
}
function emptyWitness(type) {
  return Circuit.witness(type, () => emptyValue(type));
}
function getPublicInputType(Proof2) {
  if (Proof2.publicInputType === void 0) {
    throw Error(`You cannot use the \`Proof\` class directly. Instead, define a subclass:
class MyProof extends Proof<PublicInput> { ... }`);
  }
  return Proof2.publicInputType;
}
ZkProgram.Proof = function(program) {
  var _a;
  return _a = class ZkProgramProof extends Proof {
  }, _a.publicInputType = program.publicInputType, _a.tag = () => program, _a;
};
function inProver() {
  return !!snarkContext.get().inProver;
}
function inCompile() {
  return !!snarkContext.get().inCompile;
}
function inAnalyze() {
  return !!snarkContext.get().inAnalyze;
}
function inCheckedComputation() {
  return !!snarkContext.get().inCompile || !!snarkContext.get().inProver || !!snarkContext.get().inCheckedComputation;
}

// dist/node/lib/hash.js
var Sponge = class {
  constructor() {
    let isChecked = inCheckedComputation();
    this.sponge = Poseidon.spongeCreate(isChecked);
  }
  absorb(x) {
    Poseidon.spongeAbsorb(this.sponge, x);
  }
  squeeze() {
    return Poseidon.spongeSqueeze(this.sponge);
  }
};
var Poseidon2 = {
  hash(input) {
    let isChecked = inCheckedComputation();
    return Poseidon.hash(input, isChecked);
  },
  update(state2, input) {
    let isChecked = inCheckedComputation();
    return Poseidon.update(state2, input, isChecked);
  },
  get initialState() {
    return [Field.zero, Field.zero, Field.zero];
  },
  Sponge
};
function emptyHashWithPrefix(prefix) {
  return salt(prefix)[0];
}
function hashWithPrefix(prefix, input) {
  let init = salt(prefix);
  return Poseidon2.update(init, input)[0];
}
var prefixes = new Proxy({}, {
  get(_target, prop2) {
    return Poseidon.prefixes[prop2];
  }
});
function salt(prefix) {
  return Poseidon.update(Poseidon2.initialState, [prefixToField(prefix)], false);
}
function prefixToField(prefix) {
  if (prefix.length * 8 >= 255)
    throw Error("prefix too long");
  let bits = [...prefix].map((char) => {
    let bits2 = [];
    for (let j = 0, c = char.charCodeAt(0); j < 8; j++, c >>= 1) {
      bits2.push(!!(c & 1));
    }
    return bits2;
  }).flat();
  return Field.ofBits(bits);
}
function packToFields({ fields = [], packed = [] }) {
  if (packed.length === 0)
    return fields;
  let packedBits = [];
  let currentPackedField = Field.zero;
  let currentSize = 0;
  for (let [field, size] of packed) {
    currentSize += size;
    if (currentSize < 255) {
      currentPackedField = currentPackedField.mul(Field(1n << BigInt(size))).add(field);
    } else {
      packedBits.push(currentPackedField);
      currentSize = size;
      currentPackedField = field;
    }
  }
  packedBits.push(currentPackedField);
  return fields.concat(packedBits);
}
var HashInput = {
  get empty() {
    return {};
  },
  append(input1, input2) {
    if (input2.fields !== void 0) {
      (input1.fields ?? (input1.fields = [])).push(...input2.fields);
    }
    if (input2.packed !== void 0) {
      (input1.packed ?? (input1.packed = [])).push(...input2.packed);
    }
    return input1;
  }
};
var TokenSymbolPure = {
  toFields({ field }) {
    return [field];
  },
  toAuxiliary(value) {
    return [value?.symbol ?? ""];
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
  }
};
var TokenSymbol = {
  ...TokenSymbolPure,
  get empty() {
    return { symbol: "", field: Field.zero };
  },
  from(symbol) {
    let field = prefixToField(symbol);
    return { symbol, field };
  }
};
function emptyReceiptChainHash() {
  return emptyHashWithPrefix("CodaReceiptEmpty");
}

// dist/node/lib/signature.js
var import_tslib = __toModule(require("tslib"));
var PrivateKey = class extends CircuitValue {
  static random() {
    return new PrivateKey(Scalar.random());
  }
  static ofBits(bs) {
    return new PrivateKey(Scalar.ofBits(bs));
  }
  toPublicKey() {
    return PublicKey.fromPrivateKey(this);
  }
  static fromBase58(privateKeyBase58) {
    let scalar = Ledger.privateKeyOfString(privateKeyBase58);
    return new PrivateKey(scalar);
  }
  toBase58() {
    return PrivateKey.toBase58(this);
  }
  static toBase58(privateKey) {
    return Ledger.privateKeyToString(privateKey);
  }
};
(0, import_tslib.__decorate)([
  prop,
  (0, import_tslib.__metadata)("design:type", Scalar)
], PrivateKey.prototype, "s", void 0);
var PublicKey = class extends CircuitValue {
  toGroup() {
    let { x, isOdd } = this;
    let ySquared = x.mul(x).mul(x).add(5);
    let someY = ySquared.sqrt();
    let isTheRightY = isOdd.equals(someY.toBits()[0]);
    let y = isTheRightY.toField().mul(someY).add(isTheRightY.not().toField().mul(someY.neg()));
    return new Group(x, y);
  }
  static fromGroup({ x, y }) {
    let isOdd = y.toBits()[0];
    return PublicKey.fromObject({ x, isOdd });
  }
  static fromPrivateKey({ s }) {
    return PublicKey.fromGroup(Group.generator.scale(s));
  }
  static from(g) {
    return PublicKey.fromObject(g);
  }
  static empty() {
    return PublicKey.from({ x: Field.zero, isOdd: Bool(false) });
  }
  isEmpty() {
    return this.x.isZero();
  }
  static fromBase58(publicKeyBase58) {
    let pk = Ledger.publicKeyOfString(publicKeyBase58);
    return PublicKey.from(pk);
  }
  toBase58() {
    return PublicKey.toBase58(this);
  }
  static toBase58(publicKey) {
    return Ledger.publicKeyToString(publicKey);
  }
  static toJSON(publicKey) {
    return publicKey.toBase58();
  }
  static fromJSON(publicKey) {
    return PublicKey.fromBase58(publicKey);
  }
};
(0, import_tslib.__decorate)([
  prop,
  (0, import_tslib.__metadata)("design:type", Field)
], PublicKey.prototype, "x", void 0);
(0, import_tslib.__decorate)([
  prop,
  (0, import_tslib.__metadata)("design:type", Bool)
], PublicKey.prototype, "isOdd", void 0);
var Signature = class extends CircuitValue {
  static create(privKey, msg) {
    const publicKey = PublicKey.fromPrivateKey(privKey).toGroup();
    const d = privKey.s;
    const kPrime = Scalar.random();
    let { x: r, y: ry } = Group.generator.scale(kPrime);
    const k = ry.toBits()[0].toBoolean() ? kPrime.neg() : kPrime;
    const e = Scalar.ofBits(Poseidon2.hash(msg.concat([publicKey.x, publicKey.y, r])).toBits());
    const s = e.mul(d).add(k);
    return new Signature(r, s);
  }
  verify(publicKey, msg) {
    const point = publicKey.toGroup();
    let e = Scalar.ofBits(Poseidon2.hash(msg.concat([point.x, point.y, this.r])).toBits());
    let r = point.scale(e).neg().add(Group.generator.scale(this.s));
    return Bool.and(r.x.equals(this.r), r.y.toBits()[0].equals(false));
  }
};
(0, import_tslib.__decorate)([
  prop,
  (0, import_tslib.__metadata)("design:type", Field)
], Signature.prototype, "r", void 0);
(0, import_tslib.__decorate)([
  prop,
  (0, import_tslib.__metadata)("design:type", Scalar)
], Signature.prototype, "s", void 0);

// dist/node/lib/int.js
var import_tslib2 = __toModule(require("tslib"));
var UInt64 = class extends CircuitValue {
  static get zero() {
    return new UInt64(Field.zero);
  }
  static get one() {
    return new UInt64(Field.one);
  }
  toString() {
    return this.value.toString();
  }
  static check(x) {
    let actual = x.value.rangeCheckHelper(64);
    actual.assertEquals(x.value);
  }
  static toInput(x) {
    return { packed: [[x.value, 64]] };
  }
  static toJSON(x) {
    return x.value.toString();
  }
  static checkConstant(x) {
    if (!x.isConstant())
      return x;
    let xBig = x.toBigInt();
    if (xBig < 0n || xBig >= 1n << BigInt(this.NUM_BITS)) {
      throw Error(`UInt64: Expected number between 0 and 2^64 - 1, got ${xBig}`);
    }
    return x;
  }
  static from(x) {
    if (x instanceof UInt64 || x instanceof UInt32)
      x = x.value;
    return new this(this.checkConstant(Field(x)));
  }
  static fromNumber(x) {
    return this.from(x);
  }
  static fromString(x) {
    return this.from(x);
  }
  static fromBigInt(x) {
    return this.from(x);
  }
  static MAXINT() {
    return new UInt64(Field((1n << 64n) - 1n));
  }
  divMod(y) {
    let x = this.value;
    let y_ = UInt64.from(y).value;
    if (this.value.isConstant() && y_.isConstant()) {
      let xn = x.toBigInt();
      let yn = y_.toBigInt();
      let q3 = xn / yn;
      let r2 = xn - q3 * yn;
      return {
        quotient: new UInt64(Field(q3)),
        rest: new UInt64(Field(r2))
      };
    }
    y_ = y_.seal();
    let q2 = Circuit.witness(Field, () => new Field(x.toBigInt() / y_.toBigInt()));
    q2.rangeCheckHelper(UInt64.NUM_BITS).assertEquals(q2);
    let r = x.sub(q2.mul(y_)).seal();
    r.rangeCheckHelper(UInt64.NUM_BITS).assertEquals(r);
    let r_ = new UInt64(r);
    let q_ = new UInt64(q2);
    r_.assertLt(new UInt64(y_));
    return { quotient: q_, rest: r_ };
  }
  div(y) {
    return this.divMod(y).quotient;
  }
  mod(y) {
    return this.divMod(y).rest;
  }
  mul(y) {
    let z = this.value.mul(UInt64.from(y).value);
    z.rangeCheckHelper(UInt64.NUM_BITS).assertEquals(z);
    return new UInt64(z);
  }
  add(y) {
    let z = this.value.add(UInt64.from(y).value);
    z.rangeCheckHelper(UInt64.NUM_BITS).assertEquals(z);
    return new UInt64(z);
  }
  sub(y) {
    let z = this.value.sub(UInt64.from(y).value);
    z.rangeCheckHelper(UInt64.NUM_BITS).assertEquals(z);
    return new UInt64(z);
  }
  lte(y) {
    if (this.value.isConstant() && y.value.isConstant()) {
      return Bool(this.value.toBigInt() <= y.value.toBigInt());
    } else {
      let xMinusY = this.value.sub(y.value).seal();
      let xMinusYFits = xMinusY.rangeCheckHelper(UInt64.NUM_BITS).equals(xMinusY);
      let yMinusXFits = xMinusY.rangeCheckHelper(UInt64.NUM_BITS).equals(xMinusY.neg());
      xMinusYFits.or(yMinusXFits).assertEquals(true);
      return yMinusXFits;
    }
  }
  assertLte(y) {
    let yMinusX = y.value.sub(this.value).seal();
    yMinusX.rangeCheckHelper(UInt64.NUM_BITS).assertEquals(yMinusX);
  }
  lt(y) {
    return this.lte(y).and(this.value.equals(y.value).not());
  }
  assertLt(y) {
    this.lt(y).assertEquals(true);
  }
  gt(y) {
    return y.lt(this);
  }
  assertGt(y) {
    y.assertLt(this);
  }
  gte(y) {
    return this.lt(y).not();
  }
  assertGte(y) {
    y.assertLte(this);
  }
};
UInt64.NUM_BITS = 64;
(0, import_tslib2.__decorate)([
  prop,
  (0, import_tslib2.__metadata)("design:type", Field)
], UInt64.prototype, "value", void 0);
var UInt32 = class extends CircuitValue {
  static get zero() {
    return new UInt32(Field.zero);
  }
  static get one() {
    return new UInt32(Field.one);
  }
  toString() {
    return this.value.toString();
  }
  toUInt64() {
    return new UInt64(this.value);
  }
  static check(x) {
    let actual = x.value.rangeCheckHelper(32);
    actual.assertEquals(x.value);
  }
  static toInput(x) {
    return { packed: [[x.value, 32]] };
  }
  static toJSON(x) {
    return x.value.toString();
  }
  static checkConstant(x) {
    if (!x.isConstant())
      return x;
    let xBig = x.toBigInt();
    if (xBig < 0n || xBig >= 1n << BigInt(this.NUM_BITS)) {
      throw Error(`UInt32: Expected number between 0 and 2^32 - 1, got ${xBig}`);
    }
    return x;
  }
  static from(x) {
    if (x instanceof UInt32)
      x = x.value;
    return new this(this.checkConstant(Field(x)));
  }
  static fromNumber(x) {
    return this.from(x);
  }
  static fromString(x) {
    return this.from(x);
  }
  static fromBigInt(x) {
    return this.from(x);
  }
  static MAXINT() {
    return new UInt32(Field((1n << 32n) - 1n));
  }
  divMod(y) {
    let x = this.value;
    let y_ = UInt32.from(y).value;
    if (x.isConstant() && y_.isConstant()) {
      let xn = x.toBigInt();
      let yn = y_.toBigInt();
      let q3 = xn / yn;
      let r2 = xn - q3 * yn;
      return {
        quotient: new UInt32(new Field(q3.toString())),
        rest: new UInt32(new Field(r2.toString()))
      };
    }
    y_ = y_.seal();
    let q2 = Circuit.witness(Field, () => new Field(x.toBigInt() / y_.toBigInt()));
    q2.rangeCheckHelper(UInt32.NUM_BITS).assertEquals(q2);
    let r = x.sub(q2.mul(y_)).seal();
    r.rangeCheckHelper(UInt32.NUM_BITS).assertEquals(r);
    let r_ = new UInt32(r);
    let q_ = new UInt32(q2);
    r_.assertLt(new UInt32(y_));
    return { quotient: q_, rest: r_ };
  }
  div(y) {
    return this.divMod(y).quotient;
  }
  mod(y) {
    return this.divMod(y).rest;
  }
  mul(y) {
    let z = this.value.mul(UInt32.from(y).value);
    z.rangeCheckHelper(UInt32.NUM_BITS).assertEquals(z);
    return new UInt32(z);
  }
  add(y) {
    let z = this.value.add(UInt32.from(y).value);
    z.rangeCheckHelper(UInt32.NUM_BITS).assertEquals(z);
    return new UInt32(z);
  }
  sub(y) {
    let z = this.value.sub(UInt32.from(y).value);
    z.rangeCheckHelper(UInt32.NUM_BITS).assertEquals(z);
    return new UInt32(z);
  }
  lte(y) {
    if (this.value.isConstant() && y.value.isConstant()) {
      return Bool(this.value.toBigInt() <= y.value.toBigInt());
    } else {
      let xMinusY = this.value.sub(y.value).seal();
      let xMinusYFits = xMinusY.rangeCheckHelper(UInt32.NUM_BITS).equals(xMinusY);
      let yMinusXFits = xMinusY.rangeCheckHelper(UInt32.NUM_BITS).equals(xMinusY.neg());
      xMinusYFits.or(yMinusXFits).assertEquals(true);
      return yMinusXFits;
    }
  }
  assertLte(y) {
    let yMinusX = y.value.sub(this.value).seal();
    yMinusX.rangeCheckHelper(UInt32.NUM_BITS).assertEquals(yMinusX);
  }
  lt(y) {
    return this.lte(y).and(this.value.equals(y.value).not());
  }
  assertLt(y) {
    this.lt(y).assertEquals(true);
  }
  gt(y) {
    return y.lt(this);
  }
  assertGt(y) {
    y.assertLt(this);
  }
  gte(y) {
    return this.lt(y).not();
  }
  assertGte(y) {
    y.assertLte(this);
  }
};
UInt32.NUM_BITS = 32;
(0, import_tslib2.__decorate)([
  prop,
  (0, import_tslib2.__metadata)("design:type", Field)
], UInt32.prototype, "value", void 0);
var Sign = class extends CircuitValue {
  static get one() {
    return new Sign(Field.one);
  }
  static get minusOne() {
    return new Sign(Field.minusOne);
  }
  static check(x) {
    x.value.square().assertEquals(Field.one);
  }
  static toInput(x) {
    return { packed: [[x.isPositive().toField(), 1]] };
  }
  static toJSON(x) {
    if (x.toString() === "1")
      return "Positive";
    if (x.neg().toString() === "1")
      return "Negative";
    throw Error(`Invalid Sign: ${x}`);
  }
  neg() {
    return new Sign(this.value.neg());
  }
  mul(y) {
    return new Sign(this.value.mul(y.value));
  }
  isPositive() {
    return this.value.equals(Field.one);
  }
  toString() {
    return this.value.toString();
  }
};
(0, import_tslib2.__decorate)([
  prop,
  (0, import_tslib2.__metadata)("design:type", Field)
], Sign.prototype, "value", void 0);
var Int64 = class extends CircuitValue {
  constructor(magnitude, sgn = Sign.one) {
    super(magnitude, sgn);
  }
  static fromFieldUnchecked(x) {
    let TWO64 = 1n << 64n;
    let xBigInt = x.toBigInt();
    let isValidPositive = xBigInt < TWO64;
    let isValidNegative = Field.ORDER - xBigInt < TWO64;
    if (!isValidPositive && !isValidNegative)
      throw Error(`Int64: Expected a value between (-2^64, 2^64), got ${x}`);
    let magnitude = Field(isValidPositive ? x.toString() : x.neg().toString());
    let sign = isValidPositive ? Sign.one : Sign.minusOne;
    return new Int64(new UInt64(magnitude), sign);
  }
  static fromUnsigned(x) {
    return new Int64(x instanceof UInt32 ? x.toUInt64() : x);
  }
  static from(x) {
    if (x instanceof Int64)
      return x;
    if (x instanceof UInt64 || x instanceof UInt32) {
      return Int64.fromUnsigned(x);
    }
    return Int64.fromFieldUnchecked(Field(x));
  }
  static fromNumber(x) {
    return Int64.fromFieldUnchecked(Field(x));
  }
  static fromString(x) {
    return Int64.fromFieldUnchecked(Field(x));
  }
  static fromBigInt(x) {
    return Int64.fromFieldUnchecked(Field(x));
  }
  toString() {
    let abs = this.magnitude.toString();
    let sgn = this.isPositive().toBoolean() || abs === "0" ? "" : "-";
    return sgn + abs;
  }
  isConstant() {
    return this.magnitude.value.isConstant() && this.sgn.isConstant();
  }
  static get zero() {
    return new Int64(UInt64.zero);
  }
  static get one() {
    return new Int64(UInt64.one);
  }
  static get minusOne() {
    return new Int64(UInt64.one).neg();
  }
  toField() {
    return this.magnitude.value.mul(this.sgn.value);
  }
  static fromField(x) {
    if (x.isConstant())
      return Int64.fromFieldUnchecked(x);
    let xInt = Circuit.witness(Int64, () => Int64.fromFieldUnchecked(x));
    xInt.toField().assertEquals(x);
    return xInt;
  }
  neg() {
    return new Int64(this.magnitude, this.sgn.neg());
  }
  add(y) {
    let y_ = Int64.from(y);
    return Int64.fromField(this.toField().add(y_.toField()));
  }
  sub(y) {
    let y_ = Int64.from(y);
    return Int64.fromField(this.toField().sub(y_.toField()));
  }
  mul(y) {
    let y_ = Int64.from(y);
    return Int64.fromField(this.toField().mul(y_.toField()));
  }
  div(y) {
    let y_ = Int64.from(y);
    let { quotient } = this.magnitude.divMod(y_.magnitude);
    let sign = this.sgn.mul(y_.sgn);
    return new Int64(quotient, sign);
  }
  mod(y) {
    let y_ = UInt64.from(y);
    let rest = this.magnitude.divMod(y_).rest.value;
    rest = Circuit.if(this.isPositive(), rest, y_.value.sub(rest));
    return new Int64(new UInt64(rest));
  }
  equals(y) {
    let y_ = Int64.from(y);
    return this.toField().equals(y_.toField());
  }
  assertEquals(y) {
    let y_ = Int64.from(y);
    this.toField().assertEquals(y_.toField());
  }
  isPositive() {
    return this.sgn.isPositive();
  }
};
(0, import_tslib2.__decorate)([
  prop,
  (0, import_tslib2.__metadata)("design:type", UInt64)
], Int64.prototype, "magnitude", void 0);
(0, import_tslib2.__decorate)([
  prop,
  (0, import_tslib2.__metadata)("design:type", Sign)
], Int64.prototype, "sgn", void 0);

// dist/node/lib/encoding.js
var encoding_exports = {};
__export(encoding_exports, {
  Bijective: () => Bijective,
  EpochSeed: () => EpochSeed,
  LedgerHash: () => LedgerHash,
  ReceiptChainHash: () => ReceiptChainHash,
  StateHash: () => StateHash,
  TokenId: () => TokenId,
  bytesFromFields: () => bytesFromFields,
  bytesToFields: () => bytesToFields,
  stringFromFields: () => stringFromFields,
  stringToFields: () => stringToFields
});
function stringToFields(message) {
  let bytes = new TextEncoder().encode(message);
  return bytesToFields(bytes);
}
function stringFromFields(fields) {
  let bytes = bytesFromFields(fields);
  return new TextDecoder().decode(bytes);
}
var STOP = 1;
function bytesToFields(bytes) {
  let fields = [];
  let currentBigInt = 0n;
  let bitPosition = 0n;
  for (let byte of bytes) {
    currentBigInt += BigInt(byte) << bitPosition;
    bitPosition += 8n;
    if (bitPosition === 248n) {
      fields.push(Field(currentBigInt.toString()));
      currentBigInt = 0n;
      bitPosition = 0n;
    }
  }
  currentBigInt += BigInt(STOP) << bitPosition;
  fields.push(Field(currentBigInt.toString()));
  return fields;
}
function bytesFromFields(fields) {
  let lastChunk = fields.pop();
  if (lastChunk === void 0)
    return new Uint8Array();
  let lastChunkBytes = bytesOfConstantField(lastChunk);
  let i2 = lastChunkBytes.lastIndexOf(STOP, 30);
  if (i2 === -1)
    throw Error("Error (bytesFromFields): Invalid encoding.");
  let bytes = new Uint8Array(fields.length * 31 + i2);
  bytes.set(lastChunkBytes.subarray(0, i2), fields.length * 31);
  i2 = 0;
  for (let field of fields) {
    bytes.set(bytesOfConstantField(field).subarray(0, 31), i2);
    i2 += 31;
  }
  fields.push(lastChunk);
  return bytes;
}
var p = 0x40000000000000000000000000000000224698fc094cf91b992d30ed00000001n;
var q = 0x40000000000000000000000000000000224698fc0994a8dd8c46eb2100000001n;
var bytesPerBigInt = 32;
var bytesBase = 256n ** BigInt(bytesPerBigInt);
var Bijective = {
  Fp: {
    toBytes: (fields) => toBytesBijective(fields, p),
    fromBytes: (bytes) => toFieldsBijective(bytes, p),
    toString(fields) {
      return new TextDecoder().decode(toBytesBijective(fields, p));
    },
    fromString(message) {
      let bytes = new TextEncoder().encode(message);
      return toFieldsBijective(bytes, p);
    }
  },
  Fq: {
    toBytes: (fields) => toBytesBijective(fields, q),
    fromBytes: (bytes) => toFieldsBijective(bytes, q),
    toString(fields) {
      return new TextDecoder().decode(toBytesBijective(fields, q));
    },
    fromString(message) {
      let bytes = new TextEncoder().encode(message);
      return toFieldsBijective(bytes, q);
    }
  }
};
function toBytesBijective(fields, p2) {
  let fieldsBigInts = fields.map(fieldToBigInt);
  let bytesBig = changeBase(fieldsBigInts, p2, bytesBase);
  let bytes = bigIntArrayToBytes(bytesBig, bytesPerBigInt);
  return bytes;
}
function toFieldsBijective(bytes, p2) {
  let bytesBig = bytesToBigIntArray(bytes, bytesPerBigInt);
  let fieldsBigInts = changeBase(bytesBig, bytesBase, p2);
  let fields = fieldsBigInts.map(bigIntToField);
  return fields;
}
function changeBase(digits, base, newBase) {
  let x = fromBase(digits, base);
  let newDigits = toBase(x, newBase);
  return newDigits;
}
function fromBase(digits, base) {
  let basePowers = [];
  for (let power = base, n = 1; n < digits.length; power **= 2n, n *= 2) {
    basePowers.push(power);
  }
  let k = basePowers.length;
  digits = digits.concat(Array(2 ** k - digits.length).fill(0n));
  for (let i2 = 0; i2 < k; i2++) {
    let newDigits = Array(digits.length >> 1);
    let basePower = basePowers[i2];
    for (let j = 0; j < newDigits.length; j++) {
      newDigits[j] = digits[2 * j] + basePower * digits[2 * j + 1];
    }
    digits = newDigits;
  }
  console.assert(digits.length === 1);
  let [digit] = digits;
  return digit;
}
function toBase(x, base) {
  let basePowers = [];
  for (let power = base; power < x; power **= 2n) {
    basePowers.push(power);
  }
  let digits = [x];
  let k = basePowers.length;
  for (let i2 = 0; i2 < k; i2++) {
    let newDigits = Array(2 * digits.length);
    let basePower = basePowers[k - 1 - i2];
    for (let j = 0; j < digits.length; j++) {
      let x2 = digits[j];
      let high = x2 / basePower;
      newDigits[2 * j + 1] = high;
      newDigits[2 * j] = x2 - high * basePower;
    }
    digits = newDigits;
  }
  while (digits[digits.length - 1] === 0n) {
    digits.pop();
  }
  return digits;
}
function bytesOfConstantField(field) {
  let value = field.value;
  if (value[0] !== 0)
    throw Error("Field is not constant");
  return value[1];
}
function fieldToBigInt(field) {
  let bytes = bytesOfConstantField(field);
  return bytesToBigInt(bytes);
}
function bigIntToField(x) {
  let field = Field(1);
  field.value = [0, bigIntToBytes(x, 32)];
  return field;
}
function bytesToBigInt(bytes) {
  let x = 0n;
  let bitPosition = 0n;
  for (let byte of bytes) {
    x += BigInt(byte) << bitPosition;
    bitPosition += 8n;
  }
  return x;
}
function bigIntToBytes(x, length) {
  let bytes = [];
  for (; x > 0; x >>= 8n) {
    bytes.push(Number(x & 0xffn));
  }
  let array = new Uint8Array(bytes);
  if (length === void 0)
    return array;
  if (array.length > length)
    throw Error(`bigint doesn't fit into ${length} bytes.`);
  let sizedArray = new Uint8Array(length);
  sizedArray.set(array);
  return sizedArray;
}
function bytesToBigIntArray(bytes, bytesPerBigInt2) {
  let bigints = [];
  for (let i2 = 0; i2 < bytes.byteLength; i2 += bytesPerBigInt2) {
    bigints.push(bytesToBigInt(bytes.subarray(i2, i2 + bytesPerBigInt2)));
  }
  return bigints;
}
function bigIntArrayToBytes(bigints, bytesPerBigInt2) {
  let bytes = new Uint8Array(bigints.length * bytesPerBigInt2);
  let offset = 0;
  for (let b of bigints) {
    bytes.set(bigIntToBytes(b, bytesPerBigInt2), offset);
    offset += bytesPerBigInt2;
  }
  let i2 = bytes.byteLength - 1;
  for (; i2 >= 0; i2--) {
    if (bytes[i2] !== 0)
      break;
  }
  return bytes.slice(0, i2 + 1);
}
function fieldToBase58(x, versionByte, versionNumber) {
  if (!x.isConstant()) {
    throw Error("encode: Field is not constant, can't read its value");
  }
  let bytes = [...x.value[1]];
  if (versionNumber !== void 0)
    bytes.unshift(versionNumber);
  let binaryString = String.fromCharCode(...bytes);
  let ocamlBytes = { t: 9, c: binaryString, l: bytes.length };
  return Ledger.encoding.toBase58(ocamlBytes, versionByte);
}
function fieldFromBase58(base58, versionByte, versionNumber) {
  let ocamlBytes = Ledger.encoding.ofBase58(base58, versionByte);
  let bytes = [...ocamlBytes.c].map((_, i2) => ocamlBytes.c.charCodeAt(i2));
  if (versionNumber !== void 0)
    bytes.shift();
  let uint8array = new Uint8Array(32);
  uint8array.set(bytes);
  return Object.assign(Object.create(Field.one.constructor.prototype), {
    value: [0, uint8array]
  });
}
function customEncoding(versionByte, versionNumber) {
  return {
    toBase58(field) {
      return fieldToBase58(field, versionByte(), versionNumber);
    },
    fromBase58(base58) {
      return fieldFromBase58(base58, versionByte(), versionNumber);
    }
  };
}
var RECEIPT_CHAIN_HASH_VERSION = 1;
var LEDGER_HASH_VERSION = 1;
var EPOCH_SEED_VERSION = 1;
var STATE_HASH_VERSION = 1;
var TokenId = customEncoding(() => Ledger.encoding.versionBytes.tokenIdKey);
var ReceiptChainHash = customEncoding(() => Ledger.encoding.versionBytes.receiptChainHash, RECEIPT_CHAIN_HASH_VERSION);
var LedgerHash = customEncoding(() => Ledger.encoding.versionBytes.ledgerHash, LEDGER_HASH_VERSION);
var EpochSeed = customEncoding(() => Ledger.encoding.versionBytes.epochSeed, EPOCH_SEED_VERSION);
var StateHash = customEncoding(() => Ledger.encoding.versionBytes.stateHash, STATE_HASH_VERSION);

// dist/node/snarky/parties-leaves.js
var emptyType = {
  sizeInFields: () => 0,
  toFields: () => [],
  toAuxiliary: () => [],
  fromFields: () => null,
  check: () => {
  },
  toInput: () => ({}),
  toJSON: () => null
};
var TokenId2 = {
  ...circuitValue(Field),
  toJSON(x) {
    return TokenId.toBase58(x);
  }
};
var AuthRequired = {
  ...circuitValue({ constant: Bool, signatureNecessary: Bool, signatureSufficient: Bool }, {
    customObjectKeys: [
      "constant",
      "signatureNecessary",
      "signatureSufficient"
    ]
  }),
  toJSON(x) {
    let c = Number(x.constant.toBoolean());
    let n = Number(x.signatureNecessary.toBoolean());
    let s = Number(x.signatureSufficient.toBoolean());
    switch (`${c}${n}${s}`) {
      case "110":
        return "Impossible";
      case "101":
        return "None";
      case "000":
        return "Proof";
      case "011":
        return "Signature";
      case "001":
        return "Either";
      default:
        throw Error("Unexpected permission");
    }
  }
};
var { fromCircuitValue: fromCircuitValue2 } = AsFieldsAndAux;
var TypeMap = {
  Field: fromCircuitValue2(Field),
  Bool: fromCircuitValue2(Bool),
  UInt32: fromCircuitValue2(UInt32),
  UInt64: fromCircuitValue2(UInt64),
  Sign: fromCircuitValue2(Sign),
  TokenId: fromCircuitValue2(TokenId2),
  AuthRequired: fromCircuitValue2(AuthRequired),
  PublicKey: fromCircuitValue2(PublicKey),
  number: {
    ...emptyType,
    toAuxiliary: (value = 0) => [value],
    toJSON: (value) => value,
    fromFields: (_, aux) => aux.pop()
  },
  string: {
    ...emptyType,
    toAuxiliary: (value = "") => [value],
    toJSON: (value) => value,
    fromFields: (_, aux) => aux.pop()
  },
  null: emptyType,
  undefined: {
    ...emptyType,
    fromFields: () => void 0
  }
};
var Events = {
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
  check() {
  },
  toInput({ hash }) {
    return { fields: [hash] };
  }
};
var StringWithHash = {
  sizeInFields() {
    return 1;
  },
  toFields({ hash }) {
    return [hash];
  },
  toAuxiliary(value) {
    return [value?.data ?? ""];
  },
  fromFields(fields, aux) {
    let hash = fields.pop();
    let data = aux.pop();
    return { data, hash };
  },
  toJSON({ data }) {
    return data;
  },
  check() {
  },
  toInput({ hash }) {
    return { fields: [hash] };
  }
};

// dist/node/snarky/parties-helpers.js
function asFieldsAndAux(typeData, customTypes2) {
  return {
    sizeInFields() {
      return sizeInFields(typeData, customTypes2);
    },
    toFields(value) {
      return toFields(typeData, value, customTypes2);
    },
    toAuxiliary(value) {
      return toAuxiliary(typeData, value, customTypes2);
    },
    fromFields(fields, aux) {
      return fromFields(typeData, fields, aux, customTypes2);
    },
    toJSON(value) {
      return toJSON(typeData, value, customTypes2);
    },
    check(value) {
      check(typeData, value, customTypes2);
    },
    toInput(value) {
      return toInput(typeData, value, customTypes2);
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
    }
  };
}
function toJSON(typeData, value, customTypes2) {
  return layoutFold({
    map(type, value2) {
      return type.toJSON(value2);
    },
    reduceArray(array) {
      return array;
    },
    reduceObject(_, object) {
      return object;
    },
    reduceFlaggedOption({ isSome, value: value2 }) {
      return isSome ? value2 : null;
    },
    reduceOrUndefined(value2) {
      return value2 ?? null;
    },
    customTypes: customTypes2
  }, typeData, value);
}
function toFields(typeData, value, customTypes2) {
  return layoutFold({
    map(type, value2) {
      return type.toFields(value2);
    },
    reduceArray(array) {
      return array.flat();
    },
    reduceObject(keys, object) {
      return keys.map((key) => object[key]).flat();
    },
    reduceFlaggedOption({ isSome, value: value2 }) {
      return [isSome, value2].flat();
    },
    reduceOrUndefined(_) {
      return [];
    },
    customTypes: customTypes2
  }, typeData, value);
}
function toAuxiliary(typeData, value, customTypes2) {
  return layoutFold({
    map(type, value2) {
      return type.toAuxiliary(value2);
    },
    reduceArray(array, { staticLength }) {
      let length = staticLength ?? array.length;
      return [length].concat(array.flat());
    },
    reduceObject(keys, object) {
      return keys.map((key) => object[key]).flat();
    },
    reduceFlaggedOption({ isSome, value: value2 }) {
      return [isSome, value2].flat();
    },
    reduceOrUndefined(value2) {
      return value2 === void 0 ? [false] : [true].concat(value2);
    },
    customTypes: customTypes2
  }, typeData, value);
}
function sizeInFields(typeData, customTypes2) {
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
    customTypes: customTypes2
  };
  return layoutFold(spec, typeData);
}
function fromFields(typeData, fields, aux, customTypes2) {
  return fromFieldsReversed(typeData, [...fields].reverse(), [...aux].reverse(), customTypes2);
}
function fromFieldsReversed(typeData, fields, aux, customTypes2) {
  let { checkedTypeName } = typeData;
  if (checkedTypeName) {
    return customTypes2[checkedTypeName].fromFields(fields, aux);
  }
  if (typeData.type === "array") {
    let value = [];
    let length = aux.pop();
    for (let i2 = 0; i2 < length; i2++) {
      value[i2] = fromFieldsReversed(typeData.inner, fields, aux, customTypes2);
    }
    return value;
  }
  if (typeData.type === "option") {
    let { optionType, inner } = typeData;
    switch (optionType) {
      case "flaggedOption":
        let isSome = Bool.Unsafe.ofField(fields.pop());
        let value = fromFieldsReversed(inner, fields, aux, customTypes2);
        return { isSome, value };
      case "orUndefined":
        let isDefined = aux.pop();
        return isDefined ? fromFieldsReversed(inner, fields, aux, customTypes2) : void 0;
      default:
        throw Error("bug");
    }
  }
  if (typeData.type === "object") {
    let { name, keys, entries } = typeData;
    let values = {};
    for (let key of keys) {
      values[key] = fromFieldsReversed(entries[key], fields, aux, customTypes2);
    }
    return values;
  }
  return TypeMap[typeData.type].fromFields(fields, aux);
}
function check(typeData, value, customTypes2) {
  return layoutFold({
    map(type, value2) {
      return type.check(value2);
    },
    reduceArray() {
    },
    reduceObject() {
    },
    reduceFlaggedOption() {
    },
    reduceOrUndefined() {
    },
    customTypes: customTypes2
  }, typeData, value);
}
function toInput(typeData, value, customTypes2) {
  return layoutFold({
    map(type, value2) {
      return type.toInput(value2);
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
    reduceFlaggedOption({ isSome, value: value2 }) {
      return {
        fields: value2.fields,
        packed: isSome.packed.concat(value2.packed ?? [])
      };
    },
    reduceOrUndefined(_) {
      return {};
    },
    customTypes: customTypes2
  }, typeData, value);
}
function layoutFold(spec, typeData, value) {
  let { checkedTypeName } = typeData;
  if (checkedTypeName) {
    return spec.map(spec.customTypes[checkedTypeName], value);
  }
  if (typeData.type === "array") {
    let v = value;
    let array = v?.map((x) => layoutFold(spec, typeData.inner, x)) ?? [];
    return spec.reduceArray(array, typeData);
  }
  if (typeData.type === "option") {
    let { optionType, inner } = typeData;
    switch (optionType) {
      case "flaggedOption":
        let v = value;
        return spec.reduceFlaggedOption({
          isSome: spec.map(TypeMap.Bool, v?.isSome),
          value: layoutFold(spec, inner, v?.value)
        });
      case "orUndefined":
        let mapped = value === void 0 ? void 0 : layoutFold(spec, inner, value);
        return spec.reduceOrUndefined(mapped);
      default:
        throw Error("bug");
    }
  }
  if (typeData.type === "object") {
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

// dist/node/snarky/gen/parties.js
var parties_exports = {};
__export(parties_exports, {
  AuthRequired: () => AuthRequired,
  Bool: () => Bool,
  Events: () => Events,
  Field: () => Field,
  Json: () => parties_json_exports,
  Parties: () => Parties,
  Party: () => Party,
  PublicKey: () => PublicKey,
  SequenceEvents: () => Events,
  Sign: () => Sign,
  StringWithHash: () => StringWithHash,
  TokenId: () => TokenId2,
  TokenSymbol: () => TokenSymbol,
  TypeMap: () => TypeMap,
  UInt32: () => UInt32,
  UInt64: () => UInt64,
  customTypes: () => customTypes
});

// dist/node/snarky/gen/parties-json.js
var parties_json_exports = {};
__markAsModule(parties_json_exports);

// dist/node/snarky/gen/js-layout.js
var jsLayout = {
  Parties: {
    type: "object",
    name: "Parties",
    docs: null,
    keys: ["feePayer", "otherParties", "memo"],
    entries: {
      feePayer: {
        type: "object",
        name: "ZkappPartyFeePayer",
        docs: null,
        keys: ["body", "authorization"],
        entries: {
          body: {
            type: "object",
            name: "FeePayerPartyBody",
            docs: null,
            keys: ["publicKey", "fee", "validUntil", "nonce"],
            entries: {
              publicKey: { type: "PublicKey" },
              fee: { type: "UInt64" },
              validUntil: {
                type: "option",
                optionType: "orUndefined",
                inner: { type: "UInt32" }
              },
              nonce: { type: "UInt32" }
            },
            docEntries: {
              publicKey: null,
              fee: null,
              validUntil: null,
              nonce: null
            }
          },
          authorization: { type: "string" }
        },
        docEntries: { body: null, authorization: null }
      },
      otherParties: {
        type: "array",
        inner: {
          type: "object",
          name: "ZkappParty",
          docs: "A party to a zkApp transaction",
          keys: ["body", "authorization"],
          entries: {
            body: {
              type: "object",
              name: "PartyBody",
              docs: null,
              keys: [
                "publicKey",
                "tokenId",
                "update",
                "balanceChange",
                "incrementNonce",
                "events",
                "sequenceEvents",
                "callData",
                "callDepth",
                "preconditions",
                "useFullCommitment",
                "caller"
              ],
              entries: {
                publicKey: { type: "PublicKey" },
                tokenId: { type: "TokenId" },
                update: {
                  type: "object",
                  name: "PartyUpdate",
                  docs: null,
                  keys: [
                    "appState",
                    "delegate",
                    "verificationKey",
                    "permissions",
                    "zkappUri",
                    "tokenSymbol",
                    "timing",
                    "votingFor"
                  ],
                  entries: {
                    appState: {
                      type: "array",
                      inner: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      staticLength: 8
                    },
                    delegate: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: { type: "PublicKey" }
                    },
                    verificationKey: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: {
                        type: "object",
                        name: "VerificationKeyWithHash",
                        docs: null,
                        keys: ["data", "hash"],
                        entries: {
                          data: { type: "string" },
                          hash: { type: "Field" }
                        },
                        docEntries: { data: null, hash: null }
                      }
                    },
                    permissions: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: {
                        type: "object",
                        name: "Permissions",
                        docs: null,
                        keys: [
                          "editState",
                          "send",
                          "receive",
                          "setDelegate",
                          "setPermissions",
                          "setVerificationKey",
                          "setZkappUri",
                          "editSequenceState",
                          "setTokenSymbol",
                          "incrementNonce",
                          "setVotingFor"
                        ],
                        entries: {
                          editState: { type: "AuthRequired" },
                          send: { type: "AuthRequired" },
                          receive: { type: "AuthRequired" },
                          setDelegate: { type: "AuthRequired" },
                          setPermissions: { type: "AuthRequired" },
                          setVerificationKey: { type: "AuthRequired" },
                          setZkappUri: { type: "AuthRequired" },
                          editSequenceState: { type: "AuthRequired" },
                          setTokenSymbol: { type: "AuthRequired" },
                          incrementNonce: { type: "AuthRequired" },
                          setVotingFor: { type: "AuthRequired" }
                        },
                        docEntries: {
                          editState: null,
                          send: null,
                          receive: null,
                          setDelegate: null,
                          setPermissions: null,
                          setVerificationKey: null,
                          setZkappUri: null,
                          editSequenceState: null,
                          setTokenSymbol: null,
                          incrementNonce: null,
                          setVotingFor: null
                        }
                      }
                    },
                    zkappUri: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: {
                        type: "string",
                        checkedType: {
                          type: "object",
                          name: "Events",
                          docs: null,
                          keys: ["data", "hash"],
                          entries: {
                            data: { type: "string" },
                            hash: { type: "Field" }
                          },
                          docEntries: { data: null, hash: null }
                        },
                        checkedTypeName: "StringWithHash"
                      }
                    },
                    tokenSymbol: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: {
                        type: "string",
                        checkedType: { type: "TokenSymbol" },
                        checkedTypeName: "TokenSymbol"
                      }
                    },
                    timing: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: {
                        type: "object",
                        name: "Timing",
                        docs: null,
                        keys: [
                          "initialMinimumBalance",
                          "cliffTime",
                          "cliffAmount",
                          "vestingPeriod",
                          "vestingIncrement"
                        ],
                        entries: {
                          initialMinimumBalance: { type: "UInt64" },
                          cliffTime: { type: "UInt32" },
                          cliffAmount: { type: "UInt64" },
                          vestingPeriod: { type: "UInt32" },
                          vestingIncrement: { type: "UInt64" }
                        },
                        docEntries: {
                          initialMinimumBalance: null,
                          cliffTime: null,
                          cliffAmount: null,
                          vestingPeriod: null,
                          vestingIncrement: null
                        }
                      }
                    },
                    votingFor: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: { type: "Field" }
                    }
                  },
                  docEntries: {
                    appState: null,
                    delegate: null,
                    verificationKey: null,
                    permissions: null,
                    zkappUri: null,
                    tokenSymbol: null,
                    timing: null,
                    votingFor: null
                  }
                },
                balanceChange: {
                  type: "object",
                  name: "BalanceChange",
                  docs: null,
                  keys: ["magnitude", "sgn"],
                  entries: {
                    magnitude: { type: "UInt64" },
                    sgn: { type: "Sign" }
                  },
                  docEntries: { magnitude: null, sgn: null }
                },
                incrementNonce: { type: "Bool" },
                events: {
                  type: "array",
                  inner: {
                    type: "array",
                    inner: { type: "Field" },
                    staticLength: null
                  },
                  staticLength: null,
                  checkedType: {
                    type: "object",
                    name: "Events",
                    docs: null,
                    keys: ["data", "hash"],
                    entries: {
                      data: {
                        type: "array",
                        inner: {
                          type: "array",
                          inner: { type: "Field" },
                          staticLength: null
                        },
                        staticLength: null
                      },
                      hash: { type: "Field" }
                    },
                    docEntries: { data: null, hash: null }
                  },
                  checkedTypeName: "Events"
                },
                sequenceEvents: {
                  type: "array",
                  inner: {
                    type: "array",
                    inner: { type: "Field" },
                    staticLength: null
                  },
                  staticLength: null,
                  checkedType: {
                    type: "object",
                    name: "Events",
                    docs: null,
                    keys: ["data", "hash"],
                    entries: {
                      data: {
                        type: "array",
                        inner: {
                          type: "array",
                          inner: { type: "Field" },
                          staticLength: null
                        },
                        staticLength: null
                      },
                      hash: { type: "Field" }
                    },
                    docEntries: { data: null, hash: null }
                  },
                  checkedTypeName: "SequenceEvents"
                },
                callData: { type: "Field" },
                callDepth: { type: "number" },
                preconditions: {
                  type: "object",
                  name: "Preconditions",
                  docs: null,
                  keys: ["network", "account"],
                  entries: {
                    network: {
                      type: "object",
                      name: "NetworkPrecondition",
                      docs: null,
                      keys: [
                        "snarkedLedgerHash",
                        "timestamp",
                        "blockchainLength",
                        "minWindowDensity",
                        "totalCurrency",
                        "globalSlotSinceHardFork",
                        "globalSlotSinceGenesis",
                        "stakingEpochData",
                        "nextEpochData"
                      ],
                      entries: {
                        snarkedLedgerHash: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: { type: "Field" }
                        },
                        timestamp: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "BlockTimeInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt64" },
                              upper: { type: "UInt64" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        blockchainLength: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "LengthInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt32" },
                              upper: { type: "UInt32" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        minWindowDensity: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "LengthInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt32" },
                              upper: { type: "UInt32" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        totalCurrency: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "CurrencyAmountInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt64" },
                              upper: { type: "UInt64" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        globalSlotSinceHardFork: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "GlobalSlotInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt32" },
                              upper: { type: "UInt32" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        globalSlotSinceGenesis: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "GlobalSlotInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt32" },
                              upper: { type: "UInt32" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        stakingEpochData: {
                          type: "object",
                          name: "EpochDataPrecondition",
                          docs: null,
                          keys: [
                            "ledger",
                            "seed",
                            "startCheckpoint",
                            "lockCheckpoint",
                            "epochLength"
                          ],
                          entries: {
                            ledger: {
                              type: "object",
                              name: "EpochLedgerPrecondition",
                              docs: null,
                              keys: ["hash", "totalCurrency"],
                              entries: {
                                hash: {
                                  type: "option",
                                  optionType: "flaggedOption",
                                  inner: { type: "Field" }
                                },
                                totalCurrency: {
                                  type: "option",
                                  optionType: "flaggedOption",
                                  inner: {
                                    type: "object",
                                    name: "CurrencyAmountInterval",
                                    docs: null,
                                    keys: ["lower", "upper"],
                                    entries: {
                                      lower: { type: "UInt64" },
                                      upper: { type: "UInt64" }
                                    },
                                    docEntries: { lower: null, upper: null }
                                  }
                                }
                              },
                              docEntries: { hash: null, totalCurrency: null }
                            },
                            seed: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: { type: "Field" }
                            },
                            startCheckpoint: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: { type: "Field" }
                            },
                            lockCheckpoint: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: { type: "Field" }
                            },
                            epochLength: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: {
                                type: "object",
                                name: "LengthInterval",
                                docs: null,
                                keys: ["lower", "upper"],
                                entries: {
                                  lower: { type: "UInt32" },
                                  upper: { type: "UInt32" }
                                },
                                docEntries: { lower: null, upper: null }
                              }
                            }
                          },
                          docEntries: {
                            ledger: null,
                            seed: null,
                            startCheckpoint: null,
                            lockCheckpoint: null,
                            epochLength: null
                          }
                        },
                        nextEpochData: {
                          type: "object",
                          name: "EpochDataPrecondition",
                          docs: null,
                          keys: [
                            "ledger",
                            "seed",
                            "startCheckpoint",
                            "lockCheckpoint",
                            "epochLength"
                          ],
                          entries: {
                            ledger: {
                              type: "object",
                              name: "EpochLedgerPrecondition",
                              docs: null,
                              keys: ["hash", "totalCurrency"],
                              entries: {
                                hash: {
                                  type: "option",
                                  optionType: "flaggedOption",
                                  inner: { type: "Field" }
                                },
                                totalCurrency: {
                                  type: "option",
                                  optionType: "flaggedOption",
                                  inner: {
                                    type: "object",
                                    name: "CurrencyAmountInterval",
                                    docs: null,
                                    keys: ["lower", "upper"],
                                    entries: {
                                      lower: { type: "UInt64" },
                                      upper: { type: "UInt64" }
                                    },
                                    docEntries: { lower: null, upper: null }
                                  }
                                }
                              },
                              docEntries: { hash: null, totalCurrency: null }
                            },
                            seed: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: { type: "Field" }
                            },
                            startCheckpoint: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: { type: "Field" }
                            },
                            lockCheckpoint: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: { type: "Field" }
                            },
                            epochLength: {
                              type: "option",
                              optionType: "flaggedOption",
                              inner: {
                                type: "object",
                                name: "LengthInterval",
                                docs: null,
                                keys: ["lower", "upper"],
                                entries: {
                                  lower: { type: "UInt32" },
                                  upper: { type: "UInt32" }
                                },
                                docEntries: { lower: null, upper: null }
                              }
                            }
                          },
                          docEntries: {
                            ledger: null,
                            seed: null,
                            startCheckpoint: null,
                            lockCheckpoint: null,
                            epochLength: null
                          }
                        }
                      },
                      docEntries: {
                        snarkedLedgerHash: null,
                        timestamp: null,
                        blockchainLength: null,
                        minWindowDensity: null,
                        totalCurrency: null,
                        globalSlotSinceHardFork: null,
                        globalSlotSinceGenesis: null,
                        stakingEpochData: null,
                        nextEpochData: null
                      }
                    },
                    account: {
                      type: "object",
                      name: "AccountPrecondition",
                      docs: null,
                      keys: [
                        "balance",
                        "nonce",
                        "receiptChainHash",
                        "delegate",
                        "state",
                        "sequenceState",
                        "provedState",
                        "isNew"
                      ],
                      entries: {
                        balance: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "BalanceInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt64" },
                              upper: { type: "UInt64" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        nonce: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: {
                            type: "object",
                            name: "NonceInterval",
                            docs: null,
                            keys: ["lower", "upper"],
                            entries: {
                              lower: { type: "UInt32" },
                              upper: { type: "UInt32" }
                            },
                            docEntries: { lower: null, upper: null }
                          }
                        },
                        receiptChainHash: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: { type: "Field" }
                        },
                        delegate: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: { type: "PublicKey" }
                        },
                        state: {
                          type: "array",
                          inner: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: { type: "Field" }
                          },
                          staticLength: 8
                        },
                        sequenceState: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: { type: "Field" }
                        },
                        provedState: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: { type: "Bool" }
                        },
                        isNew: {
                          type: "option",
                          optionType: "flaggedOption",
                          inner: { type: "Bool" }
                        }
                      },
                      docEntries: {
                        balance: null,
                        nonce: null,
                        receiptChainHash: null,
                        delegate: null,
                        state: null,
                        sequenceState: null,
                        provedState: null,
                        isNew: null
                      }
                    }
                  },
                  docEntries: { network: null, account: null }
                },
                useFullCommitment: { type: "Bool" },
                caller: { type: "TokenId" }
              },
              docEntries: {
                publicKey: null,
                tokenId: null,
                update: null,
                balanceChange: null,
                incrementNonce: null,
                events: null,
                sequenceEvents: null,
                callData: null,
                callDepth: null,
                preconditions: null,
                useFullCommitment: null,
                caller: null
              }
            },
            authorization: {
              type: "object",
              name: "Control",
              docs: null,
              keys: ["proof", "signature"],
              entries: {
                proof: {
                  type: "option",
                  optionType: "orUndefined",
                  inner: { type: "string" }
                },
                signature: {
                  type: "option",
                  optionType: "orUndefined",
                  inner: { type: "string" }
                }
              },
              docEntries: { proof: null, signature: null }
            }
          },
          docEntries: { body: null, authorization: null }
        },
        staticLength: null
      },
      memo: { type: "string" }
    },
    docEntries: { feePayer: null, otherParties: null, memo: null }
  },
  Party: {
    type: "object",
    name: "ZkappParty",
    docs: "A party to a zkApp transaction",
    keys: ["body", "authorization"],
    entries: {
      body: {
        type: "object",
        name: "PartyBody",
        docs: null,
        keys: [
          "publicKey",
          "tokenId",
          "update",
          "balanceChange",
          "incrementNonce",
          "events",
          "sequenceEvents",
          "callData",
          "callDepth",
          "preconditions",
          "useFullCommitment",
          "caller"
        ],
        entries: {
          publicKey: { type: "PublicKey" },
          tokenId: { type: "TokenId" },
          update: {
            type: "object",
            name: "PartyUpdate",
            docs: null,
            keys: [
              "appState",
              "delegate",
              "verificationKey",
              "permissions",
              "zkappUri",
              "tokenSymbol",
              "timing",
              "votingFor"
            ],
            entries: {
              appState: {
                type: "array",
                inner: {
                  type: "option",
                  optionType: "flaggedOption",
                  inner: { type: "Field" }
                },
                staticLength: 8
              },
              delegate: {
                type: "option",
                optionType: "flaggedOption",
                inner: { type: "PublicKey" }
              },
              verificationKey: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "object",
                  name: "VerificationKeyWithHash",
                  docs: null,
                  keys: ["data", "hash"],
                  entries: {
                    data: { type: "string" },
                    hash: { type: "Field" }
                  },
                  docEntries: { data: null, hash: null }
                }
              },
              permissions: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "object",
                  name: "Permissions",
                  docs: null,
                  keys: [
                    "editState",
                    "send",
                    "receive",
                    "setDelegate",
                    "setPermissions",
                    "setVerificationKey",
                    "setZkappUri",
                    "editSequenceState",
                    "setTokenSymbol",
                    "incrementNonce",
                    "setVotingFor"
                  ],
                  entries: {
                    editState: { type: "AuthRequired" },
                    send: { type: "AuthRequired" },
                    receive: { type: "AuthRequired" },
                    setDelegate: { type: "AuthRequired" },
                    setPermissions: { type: "AuthRequired" },
                    setVerificationKey: { type: "AuthRequired" },
                    setZkappUri: { type: "AuthRequired" },
                    editSequenceState: { type: "AuthRequired" },
                    setTokenSymbol: { type: "AuthRequired" },
                    incrementNonce: { type: "AuthRequired" },
                    setVotingFor: { type: "AuthRequired" }
                  },
                  docEntries: {
                    editState: null,
                    send: null,
                    receive: null,
                    setDelegate: null,
                    setPermissions: null,
                    setVerificationKey: null,
                    setZkappUri: null,
                    editSequenceState: null,
                    setTokenSymbol: null,
                    incrementNonce: null,
                    setVotingFor: null
                  }
                }
              },
              zkappUri: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "string",
                  checkedType: {
                    type: "object",
                    name: "Events",
                    docs: null,
                    keys: ["data", "hash"],
                    entries: {
                      data: { type: "string" },
                      hash: { type: "Field" }
                    },
                    docEntries: { data: null, hash: null }
                  },
                  checkedTypeName: "StringWithHash"
                }
              },
              tokenSymbol: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "string",
                  checkedType: { type: "TokenSymbol" },
                  checkedTypeName: "TokenSymbol"
                }
              },
              timing: {
                type: "option",
                optionType: "flaggedOption",
                inner: {
                  type: "object",
                  name: "Timing",
                  docs: null,
                  keys: [
                    "initialMinimumBalance",
                    "cliffTime",
                    "cliffAmount",
                    "vestingPeriod",
                    "vestingIncrement"
                  ],
                  entries: {
                    initialMinimumBalance: { type: "UInt64" },
                    cliffTime: { type: "UInt32" },
                    cliffAmount: { type: "UInt64" },
                    vestingPeriod: { type: "UInt32" },
                    vestingIncrement: { type: "UInt64" }
                  },
                  docEntries: {
                    initialMinimumBalance: null,
                    cliffTime: null,
                    cliffAmount: null,
                    vestingPeriod: null,
                    vestingIncrement: null
                  }
                }
              },
              votingFor: {
                type: "option",
                optionType: "flaggedOption",
                inner: { type: "Field" }
              }
            },
            docEntries: {
              appState: null,
              delegate: null,
              verificationKey: null,
              permissions: null,
              zkappUri: null,
              tokenSymbol: null,
              timing: null,
              votingFor: null
            }
          },
          balanceChange: {
            type: "object",
            name: "BalanceChange",
            docs: null,
            keys: ["magnitude", "sgn"],
            entries: { magnitude: { type: "UInt64" }, sgn: { type: "Sign" } },
            docEntries: { magnitude: null, sgn: null }
          },
          incrementNonce: { type: "Bool" },
          events: {
            type: "array",
            inner: {
              type: "array",
              inner: { type: "Field" },
              staticLength: null
            },
            staticLength: null,
            checkedType: {
              type: "object",
              name: "Events",
              docs: null,
              keys: ["data", "hash"],
              entries: {
                data: {
                  type: "array",
                  inner: {
                    type: "array",
                    inner: { type: "Field" },
                    staticLength: null
                  },
                  staticLength: null
                },
                hash: { type: "Field" }
              },
              docEntries: { data: null, hash: null }
            },
            checkedTypeName: "Events"
          },
          sequenceEvents: {
            type: "array",
            inner: {
              type: "array",
              inner: { type: "Field" },
              staticLength: null
            },
            staticLength: null,
            checkedType: {
              type: "object",
              name: "Events",
              docs: null,
              keys: ["data", "hash"],
              entries: {
                data: {
                  type: "array",
                  inner: {
                    type: "array",
                    inner: { type: "Field" },
                    staticLength: null
                  },
                  staticLength: null
                },
                hash: { type: "Field" }
              },
              docEntries: { data: null, hash: null }
            },
            checkedTypeName: "SequenceEvents"
          },
          callData: { type: "Field" },
          callDepth: { type: "number" },
          preconditions: {
            type: "object",
            name: "Preconditions",
            docs: null,
            keys: ["network", "account"],
            entries: {
              network: {
                type: "object",
                name: "NetworkPrecondition",
                docs: null,
                keys: [
                  "snarkedLedgerHash",
                  "timestamp",
                  "blockchainLength",
                  "minWindowDensity",
                  "totalCurrency",
                  "globalSlotSinceHardFork",
                  "globalSlotSinceGenesis",
                  "stakingEpochData",
                  "nextEpochData"
                ],
                entries: {
                  snarkedLedgerHash: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Field" }
                  },
                  timestamp: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "BlockTimeInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt64" },
                        upper: { type: "UInt64" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  blockchainLength: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "LengthInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  minWindowDensity: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "LengthInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  totalCurrency: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "CurrencyAmountInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt64" },
                        upper: { type: "UInt64" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  globalSlotSinceHardFork: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "GlobalSlotInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  globalSlotSinceGenesis: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "GlobalSlotInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  stakingEpochData: {
                    type: "object",
                    name: "EpochDataPrecondition",
                    docs: null,
                    keys: [
                      "ledger",
                      "seed",
                      "startCheckpoint",
                      "lockCheckpoint",
                      "epochLength"
                    ],
                    entries: {
                      ledger: {
                        type: "object",
                        name: "EpochLedgerPrecondition",
                        docs: null,
                        keys: ["hash", "totalCurrency"],
                        entries: {
                          hash: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: { type: "Field" }
                          },
                          totalCurrency: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: {
                              type: "object",
                              name: "CurrencyAmountInterval",
                              docs: null,
                              keys: ["lower", "upper"],
                              entries: {
                                lower: { type: "UInt64" },
                                upper: { type: "UInt64" }
                              },
                              docEntries: { lower: null, upper: null }
                            }
                          }
                        },
                        docEntries: { hash: null, totalCurrency: null }
                      },
                      seed: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      startCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      lockCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      epochLength: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: {
                          type: "object",
                          name: "LengthInterval",
                          docs: null,
                          keys: ["lower", "upper"],
                          entries: {
                            lower: { type: "UInt32" },
                            upper: { type: "UInt32" }
                          },
                          docEntries: { lower: null, upper: null }
                        }
                      }
                    },
                    docEntries: {
                      ledger: null,
                      seed: null,
                      startCheckpoint: null,
                      lockCheckpoint: null,
                      epochLength: null
                    }
                  },
                  nextEpochData: {
                    type: "object",
                    name: "EpochDataPrecondition",
                    docs: null,
                    keys: [
                      "ledger",
                      "seed",
                      "startCheckpoint",
                      "lockCheckpoint",
                      "epochLength"
                    ],
                    entries: {
                      ledger: {
                        type: "object",
                        name: "EpochLedgerPrecondition",
                        docs: null,
                        keys: ["hash", "totalCurrency"],
                        entries: {
                          hash: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: { type: "Field" }
                          },
                          totalCurrency: {
                            type: "option",
                            optionType: "flaggedOption",
                            inner: {
                              type: "object",
                              name: "CurrencyAmountInterval",
                              docs: null,
                              keys: ["lower", "upper"],
                              entries: {
                                lower: { type: "UInt64" },
                                upper: { type: "UInt64" }
                              },
                              docEntries: { lower: null, upper: null }
                            }
                          }
                        },
                        docEntries: { hash: null, totalCurrency: null }
                      },
                      seed: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      startCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      lockCheckpoint: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: { type: "Field" }
                      },
                      epochLength: {
                        type: "option",
                        optionType: "flaggedOption",
                        inner: {
                          type: "object",
                          name: "LengthInterval",
                          docs: null,
                          keys: ["lower", "upper"],
                          entries: {
                            lower: { type: "UInt32" },
                            upper: { type: "UInt32" }
                          },
                          docEntries: { lower: null, upper: null }
                        }
                      }
                    },
                    docEntries: {
                      ledger: null,
                      seed: null,
                      startCheckpoint: null,
                      lockCheckpoint: null,
                      epochLength: null
                    }
                  }
                },
                docEntries: {
                  snarkedLedgerHash: null,
                  timestamp: null,
                  blockchainLength: null,
                  minWindowDensity: null,
                  totalCurrency: null,
                  globalSlotSinceHardFork: null,
                  globalSlotSinceGenesis: null,
                  stakingEpochData: null,
                  nextEpochData: null
                }
              },
              account: {
                type: "object",
                name: "AccountPrecondition",
                docs: null,
                keys: [
                  "balance",
                  "nonce",
                  "receiptChainHash",
                  "delegate",
                  "state",
                  "sequenceState",
                  "provedState",
                  "isNew"
                ],
                entries: {
                  balance: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "BalanceInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt64" },
                        upper: { type: "UInt64" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  nonce: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: {
                      type: "object",
                      name: "NonceInterval",
                      docs: null,
                      keys: ["lower", "upper"],
                      entries: {
                        lower: { type: "UInt32" },
                        upper: { type: "UInt32" }
                      },
                      docEntries: { lower: null, upper: null }
                    }
                  },
                  receiptChainHash: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Field" }
                  },
                  delegate: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "PublicKey" }
                  },
                  state: {
                    type: "array",
                    inner: {
                      type: "option",
                      optionType: "flaggedOption",
                      inner: { type: "Field" }
                    },
                    staticLength: 8
                  },
                  sequenceState: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Field" }
                  },
                  provedState: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Bool" }
                  },
                  isNew: {
                    type: "option",
                    optionType: "flaggedOption",
                    inner: { type: "Bool" }
                  }
                },
                docEntries: {
                  balance: null,
                  nonce: null,
                  receiptChainHash: null,
                  delegate: null,
                  state: null,
                  sequenceState: null,
                  provedState: null,
                  isNew: null
                }
              }
            },
            docEntries: { network: null, account: null }
          },
          useFullCommitment: { type: "Bool" },
          caller: { type: "TokenId" }
        },
        docEntries: {
          publicKey: null,
          tokenId: null,
          update: null,
          balanceChange: null,
          incrementNonce: null,
          events: null,
          sequenceEvents: null,
          callData: null,
          callDepth: null,
          preconditions: null,
          useFullCommitment: null,
          caller: null
        }
      },
      authorization: {
        type: "object",
        name: "Control",
        docs: null,
        keys: ["proof", "signature"],
        entries: {
          proof: {
            type: "option",
            optionType: "orUndefined",
            inner: { type: "string" }
          },
          signature: {
            type: "option",
            optionType: "orUndefined",
            inner: { type: "string" }
          }
        },
        docEntries: { proof: null, signature: null }
      }
    },
    docEntries: { body: null, authorization: null }
  }
};

// dist/node/snarky/gen/parties.js
var customTypes = {
  StringWithHash,
  TokenSymbol,
  Events,
  SequenceEvents: Events
};
var Parties = asFieldsAndAux(jsLayout.Parties, customTypes);
var Party = asFieldsAndAux(jsLayout.Party, customTypes);

// dist/node/snarky/types.js
function asFieldsAndAux2(layout) {
  return asFieldsAndAux(layout, customTypes);
}

// dist/node/lib/mina.js
var mina_exports = {};
__export(mina_exports, {
  BerkeleyQANet: () => BerkeleyQANet,
  LocalBlockchain: () => LocalBlockchain,
  accountCreationFee: () => accountCreationFee,
  createTransaction: () => createTransaction,
  currentSlot: () => currentSlot,
  currentTransaction: () => currentTransaction,
  fetchEvents: () => fetchEvents,
  getAccount: () => getAccount,
  getActions: () => getActions,
  getBalance: () => getBalance,
  getNetworkState: () => getNetworkState,
  hasAccount: () => hasAccount,
  sendTransaction: () => sendTransaction,
  setActiveInstance: () => setActiveInstance,
  transaction: () => transaction
});

// dist/node/lib/precondition.js
function preconditions(party, isSelf) {
  initializePreconditions(party, isSelf);
  return { account: Account(party), network: Network(party) };
}
function Network(party) {
  let layout = jsLayout.Party.entries.body.entries.preconditions.entries.network;
  let context = getPreconditionContextExn(party);
  return preconditionClass(layout, "network", party, context);
}
function Account(party) {
  let layout = jsLayout.Party.entries.body.entries.preconditions.entries.account;
  let context = getPreconditionContextExn(party);
  return preconditionClass(layout, "account", party, context);
}
var unimplementedPreconditions = [
  "network.stakingEpochData.seed",
  "network.nextEpochData.seed",
  "account.provedState"
];
var baseMap = { UInt64, UInt32, Field, Bool };
function preconditionClass(layout, baseKey, party, context) {
  if (layout.type === "option") {
    if (layout.optionType === "flaggedOption" && layout.inner.type === "object" && layout.inner.keys.join(",") === "lower,upper") {
      let lower = layout.inner.entries.lower.type;
      let baseType = baseMap[lower];
      return {
        ...preconditionSubclass(party, baseKey, baseType, context),
        assertBetween(lower2, upper) {
          context.constrained.add(baseKey);
          let property = getPath(party.body.preconditions, baseKey);
          property.isSome = Bool(true);
          property.value.lower = lower2;
          property.value.upper = upper;
        }
      };
    } else if (layout.optionType === "flaggedOption") {
      let baseType = baseMap[layout.inner.type];
      return preconditionSubclass(party, baseKey, baseType, context);
    }
  } else if (layout.type === "array") {
    return {};
  } else if (layout.type === "object") {
    return Object.fromEntries(layout.keys.map((key) => {
      let value = layout.entries[key];
      return [
        key,
        preconditionClass(value, `${baseKey}.${key}`, party, context)
      ];
    }));
  } else
    throw Error("bug");
}
function preconditionSubclass(party, longKey, fieldType, context) {
  return {
    get() {
      if (unimplementedPreconditions.includes(longKey)) {
        let self = context.isSelf ? "this" : "party";
        throw Error(`${self}.${longKey}.get() is not implemented yet.`);
      }
      let { read, vars } = context;
      read.add(longKey);
      return vars[longKey] ?? (vars[longKey] = getVariable(party, longKey, fieldType));
    },
    assertEquals(value) {
      context.constrained.add(longKey);
      let property = getPath(party.body.preconditions, longKey);
      if ("isSome" in property) {
        property.isSome = Bool(true);
        if ("lower" in property.value && "upper" in property.value) {
          property.value.lower = value;
          property.value.upper = value;
        } else {
          property.value = value;
        }
      } else {
        setPath(party.body.preconditions, longKey, value);
      }
    },
    assertNothing() {
      context.constrained.add(longKey);
    }
  };
}
function getVariable(party, longKey, fieldType) {
  if (inCompile() || inAnalyze()) {
    return Circuit.witness(fieldType, () => {
      throw Error(`This error is thrown because you are reading out the value of a variable, when that value is not known.
To write a correct circuit, you must avoid any dependency on the concrete value of variables.`);
    });
  }
  let [accountOrNetwork, ...rest] = longKey.split(".");
  let key = rest.join(".");
  let value;
  if (accountOrNetwork === "account") {
    let account = getAccountPreconditions(party);
    value = account[key];
  } else if (accountOrNetwork === "network") {
    let networkState = getNetworkState();
    value = getPath(networkState, key);
  } else {
    throw Error("impossible");
  }
  if (inProver()) {
    return Circuit.witness(fieldType, () => value);
  } else {
    return value;
  }
}
function getAccountPreconditions(party) {
  let { publicKey, tokenId } = party.body;
  let hasAccount2 = hasAccount(publicKey, tokenId);
  if (!hasAccount2) {
    return {
      balance: UInt64.zero,
      nonce: UInt32.zero,
      receiptChainHash: emptyReceiptChainHash(),
      sequenceState: SequenceEvents.emptySequenceState(),
      delegate: publicKey,
      provedState: Bool(false),
      isNew: Bool(true)
    };
  }
  let account = getAccount(publicKey, tokenId);
  return {
    balance: account.balance,
    nonce: account.nonce,
    receiptChainHash: account.receiptChainHash,
    sequenceState: account.sequenceState ?? SequenceEvents.emptySequenceState(),
    delegate: account.delegate ?? account.publicKey,
    provedState: account.provedState,
    isNew: Bool(false)
  };
}
function initializePreconditions(party, isSelf) {
  preconditionContexts.set(party, {
    read: new Set(),
    constrained: new Set(),
    vars: {},
    isSelf
  });
}
function cleanPreconditionsCache(party) {
  let context = preconditionContexts.get(party);
  if (context !== void 0)
    context.vars = {};
}
function assertPreconditionInvariants(party) {
  let context = getPreconditionContextExn(party);
  let self = context.isSelf ? "this" : "party";
  let dummyPreconditions = Preconditions.ignoreAll();
  for (let preconditionPath of context.read) {
    if (context.constrained.has(preconditionPath))
      continue;
    let precondition = getPath(party.body.preconditions, preconditionPath);
    let dummy = getPath(dummyPreconditions, preconditionPath);
    if (!circuitValueEquals(precondition, dummy))
      continue;
    let hasAssertBetween = isRangeCondition(precondition);
    let shortPath = preconditionPath.split(".").pop();
    let errorMessage = `You used \`${self}.${preconditionPath}.get()\` without adding a precondition that links it to the actual ${shortPath}.
Consider adding this line to your code:
${self}.${preconditionPath}.assertEquals(${self}.${preconditionPath}.get());${hasAssertBetween ? `
You can also add more flexible preconditions with \`${self}.${preconditionPath}.assertBetween(...)\`.` : ""}`;
    throw Error(errorMessage);
  }
}
function getPreconditionContextExn(party) {
  let c = preconditionContexts.get(party);
  if (c === void 0)
    throw Error("bug: precondition context not found");
  return c;
}
var preconditionContexts = new WeakMap();
function isRangeCondition(condition) {
  return "isSome" in condition && "lower" in condition.value;
}
function getPath(obj, path) {
  let pathArray = path.split(".").reverse();
  while (pathArray.length > 0) {
    let key = pathArray.pop();
    obj = obj[key];
  }
  return obj;
}
function setPath(obj, path, value) {
  let pathArray = path.split(".");
  let key = pathArray.pop();
  getPath(obj, pathArray.join("."))[key] = value;
}

// dist/node/lib/party.js
var ZkappStateLength = 8;
function keep(dummy) {
  return { isSome: Bool(false), value: dummy };
}
var True = () => Bool(true);
var False = () => Bool(false);
var Permission = {
  impossible: () => ({
    constant: True(),
    signatureNecessary: True(),
    signatureSufficient: False()
  }),
  none: () => ({
    constant: True(),
    signatureNecessary: False(),
    signatureSufficient: True()
  }),
  proof: () => ({
    constant: False(),
    signatureNecessary: False(),
    signatureSufficient: False()
  }),
  signature: () => ({
    constant: False(),
    signatureNecessary: True(),
    signatureSufficient: True()
  }),
  proofOrSignature: () => ({
    constant: False(),
    signatureNecessary: False(),
    signatureSufficient: True()
  })
};
var Permissions = {
  ...Permission,
  default: () => ({
    editState: Permission.proof(),
    send: Permission.signature(),
    receive: Permission.none(),
    setDelegate: Permission.signature(),
    setPermissions: Permission.signature(),
    setVerificationKey: Permission.signature(),
    setZkappUri: Permission.signature(),
    editSequenceState: Permission.proof(),
    setTokenSymbol: Permission.signature(),
    incrementNonce: Permissions.signature(),
    setVotingFor: Permission.signature()
  }),
  initial: () => ({
    editState: Permission.signature(),
    send: Permission.signature(),
    receive: Permission.none(),
    setDelegate: Permission.signature(),
    setPermissions: Permission.signature(),
    setVerificationKey: Permission.signature(),
    setZkappUri: Permission.signature(),
    editSequenceState: Permission.signature(),
    setTokenSymbol: Permission.signature(),
    incrementNonce: Permissions.signature(),
    setVotingFor: Permission.signature()
  })
};
var Events2 = {
  empty() {
    let hash = emptyHashWithPrefix("MinaZkappEventsEmpty");
    return { hash, data: [] };
  },
  pushEvent(events, event) {
    let eventHash = hashWithPrefix(prefixes.event, event);
    let hash = hashWithPrefix(prefixes.events, [events.hash, eventHash]);
    return { hash, data: [event, ...events.data] };
  },
  hash(events) {
    return events.reverse().reduce(Events2.pushEvent, Events2.empty()).hash;
  }
};
var SequenceEvents = {
  empty() {
    let hash = emptyHashWithPrefix("MinaZkappSequenceEmpty");
    return { hash, data: [] };
  },
  pushEvent(sequenceEvents, event) {
    let eventHash = hashWithPrefix(prefixes.event, event);
    let hash = hashWithPrefix(prefixes.sequenceEvents, [
      sequenceEvents.hash,
      eventHash
    ]);
    return { hash, data: [event, ...sequenceEvents.data] };
  },
  hash(events) {
    return events.reverse().reduce(SequenceEvents.pushEvent, SequenceEvents.empty()).hash;
  },
  emptySequenceState() {
    return emptyHashWithPrefix("MinaZkappSequenceStateEmptyElt");
  },
  updateSequenceState(state2, sequenceEventsHash) {
    return hashWithPrefix(prefixes.sequenceEvents, [state2, sequenceEventsHash]);
  }
};
var Body = {
  noUpdate() {
    return {
      appState: Array(ZkappStateLength).fill(0).map(() => keep(Field.zero)),
      delegate: keep(PublicKey.empty()),
      verificationKey: keep({ data: "", hash: Field.zero }),
      permissions: keep(Permissions.initial()),
      zkappUri: keep({
        data: "",
        hash: Field("22930868938364086394602058221028773520482901241511717002947639863679740444066")
      }),
      tokenSymbol: keep(TokenSymbol.empty),
      timing: keep({
        cliffAmount: UInt64.zero,
        cliffTime: UInt32.zero,
        initialMinimumBalance: UInt64.zero,
        vestingIncrement: UInt64.zero,
        vestingPeriod: UInt32.zero
      }),
      votingFor: keep(Field.zero)
    };
  },
  keepAll(publicKey) {
    return {
      publicKey,
      update: Body.noUpdate(),
      tokenId: TokenId3.default,
      balanceChange: Int64.zero,
      events: Events2.empty(),
      sequenceEvents: SequenceEvents.empty(),
      caller: TokenId3.default,
      callData: Field.zero,
      callDepth: 0,
      preconditions: Preconditions.ignoreAll(),
      useFullCommitment: Bool(false),
      incrementNonce: Bool(false)
    };
  },
  dummy() {
    return Body.keepAll(PublicKey.empty());
  }
};
var FeePayerBody = {
  keepAll(publicKey, nonce) {
    return {
      publicKey,
      nonce,
      fee: UInt64.zero,
      validUntil: void 0
    };
  }
};
var NetworkPrecondition = {
  ignoreAll() {
    let stakingEpochData = {
      ledger: { hash: ignore(Field.zero), totalCurrency: ignore(uint64()) },
      seed: ignore(Field.zero),
      startCheckpoint: ignore(Field.zero),
      lockCheckpoint: ignore(Field.zero),
      epochLength: ignore(uint32())
    };
    let nextEpochData = cloneCircuitValue(stakingEpochData);
    return {
      snarkedLedgerHash: ignore(Field.zero),
      timestamp: ignore(uint64()),
      blockchainLength: ignore(uint32()),
      minWindowDensity: ignore(uint32()),
      totalCurrency: ignore(uint64()),
      globalSlotSinceHardFork: ignore(uint32()),
      globalSlotSinceGenesis: ignore(uint32()),
      stakingEpochData,
      nextEpochData
    };
  }
};
function ignore(dummy) {
  return { isSome: Bool(false), value: dummy };
}
var uint32 = () => ({ lower: UInt32.fromNumber(0), upper: UInt32.MAXINT() });
var uint64 = () => ({ lower: UInt64.fromNumber(0), upper: UInt64.MAXINT() });
var AccountPrecondition = {
  ignoreAll() {
    let appState = [];
    for (let i2 = 0; i2 < ZkappStateLength; ++i2) {
      appState.push(ignore(Field.zero));
    }
    return {
      balance: ignore(uint64()),
      nonce: ignore(uint32()),
      receiptChainHash: ignore(Field.zero),
      delegate: ignore(PublicKey.empty()),
      state: appState,
      sequenceState: ignore(SequenceEvents.emptySequenceState()),
      provedState: ignore(Bool(false)),
      isNew: ignore(Bool(false))
    };
  },
  nonce(nonce) {
    let p2 = AccountPrecondition.ignoreAll();
    Party2.assertEquals(p2.nonce, nonce);
    return p2;
  }
};
var Preconditions = {
  ignoreAll() {
    return {
      account: AccountPrecondition.ignoreAll(),
      network: NetworkPrecondition.ignoreAll()
    };
  }
};
var TokenId3 = {
  ...parties_exports.TokenId,
  ...TokenId,
  get default() {
    return Field.one;
  }
};
var Token = class {
  constructor(options) {
    let { tokenOwner, parentTokenId } = options ?? {};
    parentTokenId ?? (parentTokenId = TokenId3.default);
    try {
      Ledger.customTokenId(tokenOwner, parentTokenId);
    } catch (e) {
      throw new Error(`Could not create a custom token id:
Error: ${e.message}`);
    }
    this.parentTokenId = parentTokenId;
    this.tokenOwner = tokenOwner;
    if (tokenOwner.toFields().every((x) => x.isConstant()) && parentTokenId.isConstant()) {
      this.id = Ledger.customTokenId(tokenOwner, this.parentTokenId);
    } else {
      this.id = Ledger.customTokenIdChecked(tokenOwner, this.parentTokenId);
    }
  }
};
Token.Id = TokenId3;
var Party2 = class {
  constructor(body, authorization = {}, isSelf = false) {
    this.lazyAuthorization = void 0;
    this.children = [];
    this.parent = void 0;
    this.body = body;
    this.authorization = authorization;
    let { account, network } = preconditions(this, isSelf);
    this.account = account;
    this.network = network;
    this.isSelf = isSelf;
  }
  static clone(party) {
    let body = cloneCircuitValue(party.body);
    let authorization = cloneCircuitValue(party.authorization);
    let clonedParty = new Party2(body, authorization, party.isSelf);
    clonedParty.lazyAuthorization = cloneCircuitValue(party.lazyAuthorization);
    clonedParty.children = party.children;
    clonedParty.parent = party.parent;
    return clonedParty;
  }
  token() {
    let thisParty = this;
    let customToken = new Token({
      tokenOwner: thisParty.body.publicKey,
      parentTokenId: thisParty.body.tokenId
    });
    return {
      id: customToken.id,
      parentTokenId: customToken.parentTokenId,
      tokenOwner: customToken.tokenOwner,
      mint({ address, amount }) {
        let receiverParty = createChildParty(thisParty, address, {
          caller: this.id,
          tokenId: this.id
        });
        let { magnitude, sgn } = receiverParty.body.balanceChange;
        receiverParty.body.balanceChange = new Int64(magnitude, sgn).add(amount);
      },
      burn({ address, amount }) {
        let senderParty = createChildParty(thisParty, address, {
          caller: this.id,
          tokenId: this.id,
          useFullCommitment: Bool(true)
        });
        let { magnitude, sgn } = senderParty.body.balanceChange;
        senderParty.body.balanceChange = new Int64(magnitude, sgn).sub(amount);
        Authorization.setLazySignature(senderParty);
      },
      send({ from, to, amount }) {
        let senderParty = createChildParty(thisParty, from, {
          caller: this.id,
          tokenId: this.id,
          useFullCommitment: Bool(true)
        });
        let i0 = senderParty.body.balanceChange;
        senderParty.body.balanceChange = new Int64(i0.magnitude, i0.sgn).sub(amount);
        Authorization.setLazySignature(senderParty);
        let receiverParty = createChildParty(thisParty, to, {
          caller: this.id,
          tokenId: this.id
        });
        let i1 = receiverParty.body.balanceChange;
        receiverParty.body.balanceChange = new Int64(i1.magnitude, i1.sgn).add(amount);
      }
    };
  }
  get tokenId() {
    return this.body.tokenId;
  }
  get tokenSymbol() {
    let party = this;
    return {
      set(tokenSymbol) {
        Party2.setValue(party.update.tokenSymbol, TokenSymbol.from(tokenSymbol));
      }
    };
  }
  send({ to, amount }) {
    let party = this;
    let receiverParty;
    if (to.constructor === Party2) {
      receiverParty = to;
      makeChildParty(party, receiverParty);
    } else {
      receiverParty = createChildParty(party, to, {
        tokenId: party.body.tokenId,
        caller: party.body.tokenId
      });
    }
    let i0 = party.body.balanceChange;
    party.body.balanceChange = new Int64(i0.magnitude, i0.sgn).sub(amount);
    let i1 = receiverParty.body.balanceChange;
    receiverParty.body.balanceChange = new Int64(i1.magnitude, i1.sgn).add(amount);
  }
  get balance() {
    let party = this;
    return {
      addInPlace(x) {
        let { magnitude, sgn } = party.body.balanceChange;
        party.body.balanceChange = new Int64(magnitude, sgn).add(x);
      },
      subInPlace(x) {
        let { magnitude, sgn } = party.body.balanceChange;
        party.body.balanceChange = new Int64(magnitude, sgn).sub(x);
      }
    };
  }
  get update() {
    return this.body.update;
  }
  static setValue(maybeValue, value) {
    maybeValue.isSome = Bool(true);
    maybeValue.value = value;
  }
  static assertBetween(property, lower, upper) {
    property.isSome = Bool(true);
    property.value.lower = lower;
    property.value.upper = upper;
  }
  static assertEquals(property, value) {
    property.isSome = Bool(true);
    if ("lower" in property.value && "upper" in property.value) {
      property.value.lower = value;
      property.value.upper = value;
    } else {
      property.value = value;
    }
  }
  get publicKey() {
    return this.body.publicKey;
  }
  signInPlace(privateKey, fallbackToZeroNonce = false) {
    this.setNoncePrecondition(fallbackToZeroNonce);
    this.body.incrementNonce = Bool(true);
    Authorization.setLazySignature(this, { privateKey });
  }
  sign(privateKey) {
    let party = Party2.clone(this);
    party.signInPlace(privateKey);
    return party;
  }
  static signFeePayerInPlace(feePayer, privateKey, fallbackToZeroNonce = false) {
    feePayer.body.nonce = this.getNonce(feePayer, fallbackToZeroNonce);
    feePayer.authorization = Ledger.dummySignature();
    feePayer.lazyAuthorization = { kind: "lazy-signature", privateKey };
  }
  static getNonce(party, fallbackToZero = false) {
    let nonce;
    let inProver2 = Circuit.inProver();
    if (inProver2 || !Circuit.inCheckedComputation()) {
      try {
        let account = getAccount(party.body.publicKey, party.body.tokenId ?? TokenId3.default);
        nonce = account.nonce;
      } catch (err) {
        if (fallbackToZero)
          nonce = UInt32.zero;
        else
          throw err;
      }
      nonce = inProver2 ? Circuit.witness(UInt32, () => nonce) : nonce;
    } else {
      nonce = Circuit.witness(UInt32, () => {
        throw Error("this should never happen");
      });
    }
    return nonce;
  }
  setNoncePrecondition(fallbackToZero = false) {
    let nonce = Party2.getNonce(this, fallbackToZero);
    let accountPrecondition = this.body.preconditions.account;
    Party2.assertEquals(accountPrecondition.nonce, nonce);
    return nonce;
  }
  toFields() {
    return parties_exports.Party.toFields(this);
  }
  toJSON() {
    return parties_exports.Party.toJSON(this);
  }
  hash() {
    if (inCheckedComputation()) {
      let input = parties_exports.Party.toInput(this);
      return hashWithPrefix(prefixes.body, packToFields(input));
    } else {
      let json = parties_exports.Party.toJSON(this);
      return Ledger.hashPartyFromJson(JSON.stringify(json));
    }
  }
  toPublicInput() {
    let party = this.hash();
    let calls = CallForest.hashChildren(this);
    return { party, calls };
  }
  static defaultParty(address) {
    const body = Body.keepAll(address);
    return new Party2(body);
  }
  static defaultFeePayer(address, key, nonce) {
    let body = FeePayerBody.keepAll(address, nonce);
    return {
      body,
      authorization: Ledger.dummySignature(),
      lazyAuthorization: { kind: "lazy-signature", privateKey: key }
    };
  }
  static dummyFeePayer() {
    let body = FeePayerBody.keepAll(PublicKey.empty(), UInt32.zero);
    return { body, authorization: Ledger.dummySignature() };
  }
  static createUnsigned(publicKey) {
    let party = Party2.defaultParty(publicKey);
    currentTransaction()?.parties.push(party);
    return party;
  }
  static createSigned(signer) {
    let publicKey = signer.toPublicKey();
    let body = Body.keepAll(publicKey);
    if (!currentTransaction.has()) {
      throw new Error("Party.createSigned: Cannot run outside of a transaction");
    }
    let nonce = Circuit.witness(UInt32, () => {
      let nonce2 = Number(getAccount(publicKey, body.tokenId).nonce.toString());
      let isFeePayer = currentTransaction()?.sender?.equals(signer);
      if (isFeePayer?.toBoolean())
        nonce2++;
      for (let party2 of currentTransaction.get().parties) {
        let shouldIncreaseNonce = party2.publicKey.equals(publicKey).and(party2.body.incrementNonce);
        if (shouldIncreaseNonce.toBoolean())
          nonce2++;
      }
      return UInt32.from(nonce2);
    });
    Party2.assertEquals(body.preconditions.account.nonce, nonce);
    body.incrementNonce = Bool(true);
    let party = new Party2(body);
    Authorization.setLazySignature(party, { privateKey: signer });
    currentTransaction.get().parties.push(party);
    return party;
  }
  static fundNewAccount(feePayerKey, { initialBalance = UInt64.zero } = {}) {
    let party = Party2.createSigned(feePayerKey);
    let amount = initialBalance instanceof UInt64 ? initialBalance : UInt64.fromString(`${initialBalance}`);
    party.balance.subInPlace(amount.add(accountCreationFee()));
  }
  static witness(type, compute, skipCheck = false) {
    let partyType = circuitArray(Field, parties_exports.Party.sizeInFields());
    let combinedType = circuitValue({
      party: partyType,
      result: type
    });
    let proverParty;
    let fieldsAndResult = Circuit.witness(combinedType, () => {
      let { party: party2, result } = compute();
      proverParty = party2;
      return { party: parties_exports.Party.toFields(party2), result };
    });
    let aux = parties_exports.Party.toAuxiliary(proverParty);
    let rawParty = parties_exports.Party.fromFields(fieldsAndResult.party, aux);
    if (!skipCheck)
      parties_exports.Party.check(rawParty);
    let party = new Party2(rawParty.body, rawParty.authorization);
    party.lazyAuthorization = proverParty && cloneCircuitValue(proverParty.lazyAuthorization);
    party.children = proverParty?.children ?? [];
    party.parent = proverParty?.parent;
    return { party, result: fieldsAndResult.result };
  }
};
var CallForest = {
  toFlatList(forest, depth = 0) {
    let parties = [];
    for (let party of forest) {
      party.body.callDepth = depth;
      let children = party.children.map((c) => c.party);
      parties.push(party, ...CallForest.toFlatList(children, depth + 1));
    }
    return parties;
  },
  emptyHash() {
    return Field.zero;
  },
  hashChildren(parent) {
    let stackHash = CallForest.emptyHash();
    for (let { party, calls } of parent.children.reverse()) {
      calls ?? (calls = CallForest.hashChildren(party));
      let nodeHash = hashWithPrefix(prefixes.partyNode, [party.hash(), calls]);
      stackHash = hashWithPrefix(prefixes.partyCons, [nodeHash, stackHash]);
    }
    return stackHash;
  }
};
function createChildParty(parent, childAddress, options) {
  let child = Party2.defaultParty(childAddress);
  const { caller, tokenId, useFullCommitment } = options ?? {};
  child.body.caller = caller ?? child.body.caller;
  child.body.tokenId = tokenId ?? child.body.tokenId;
  child.body.useFullCommitment = useFullCommitment ?? child.body.useFullCommitment;
  makeChildParty(parent, child);
  return child;
}
function makeChildParty(parent, child) {
  child.body.callDepth = parent.body.callDepth + 1;
  child.parent = parent;
  if (!parent.children.find(({ party }) => party === child)) {
    parent.children.push({ party: child, calls: void 0 });
  }
}
function partiesToJson({ feePayer, otherParties, memo }) {
  memo = Ledger.memoToBase58(memo);
  return parties_exports.Parties.toJSON({ feePayer, otherParties, memo });
}
var Authorization = {
  hasLazyProof(party) {
    return party.lazyAuthorization?.kind === "lazy-proof";
  },
  hasAny(party) {
    let { authorization: auth, lazyAuthorization: lazyAuth } = party;
    return !!(lazyAuth || "proof" in auth || "signature" in auth);
  },
  setSignature(party, signature) {
    party.authorization = { signature };
    party.lazyAuthorization = void 0;
  },
  setProof(party, proof) {
    party.authorization = { proof };
    party.lazyAuthorization = void 0;
  },
  setLazySignature(party, signature) {
    signature ?? (signature = {});
    party.authorization = {};
    party.lazyAuthorization = { ...signature, kind: "lazy-signature" };
  },
  setLazyProof(party, proof) {
    party.authorization = {};
    party.lazyAuthorization = { ...proof, kind: "lazy-proof" };
  }
};
function addMissingSignatures(parties, additionalKeys = []) {
  let additionalPublicKeys = additionalKeys.map((sk) => sk.toPublicKey());
  let { commitment, fullCommitment } = Ledger.transactionCommitments(JSON.stringify(partiesToJson(parties)));
  function addFeePayerSignature(party) {
    let { body, authorization, lazyAuthorization } = cloneCircuitValue(party);
    if (lazyAuthorization === void 0)
      return { body, authorization };
    let { privateKey } = lazyAuthorization;
    if (privateKey === void 0) {
      let i2 = additionalPublicKeys.findIndex((pk) => pk === party.body.publicKey);
      if (i2 === -1) {
        let pk = PublicKey.toBase58(party.body.publicKey);
        throw Error(`addMissingSignatures: Cannot add signature for fee payer (${pk}), private key is missing.`);
      }
      privateKey = additionalKeys[i2];
    }
    let signature = Ledger.signFieldElement(fullCommitment, privateKey);
    return { body, authorization: signature };
  }
  function addSignature(party) {
    party = Party2.clone(party);
    if (party.lazyAuthorization?.kind !== "lazy-signature") {
      return party;
    }
    let { privateKey } = party.lazyAuthorization;
    if (privateKey === void 0) {
      let i2 = additionalPublicKeys.findIndex((pk) => pk.equals(party.body.publicKey));
      if (i2 === -1)
        throw Error(`addMissingSignatures: Cannot add signature for ${party.publicKey.toBase58()}, private key is missing.`);
      privateKey = additionalKeys[i2];
    }
    let transactionCommitment = party.body.useFullCommitment.toBoolean() ? fullCommitment : commitment;
    let signature = Ledger.signFieldElement(transactionCommitment, privateKey);
    Authorization.setSignature(party, signature);
    return party;
  }
  let { feePayer, otherParties, memo } = parties;
  return {
    feePayer: addFeePayerSignature(feePayer),
    otherParties: otherParties.map(addSignature),
    memo
  };
}
var ZkappPublicInput = circuitValue({ party: Field, calls: Field }, { customObjectKeys: ["party", "calls"] });
function partyToPublicInput(self) {
  let party = self.hash();
  let calls = CallForest.hashChildren(self);
  return { party, calls };
}
async function addMissingProofs(parties) {
  async function addProof(party) {
    party = Party2.clone(party);
    if (party.lazyAuthorization?.kind !== "lazy-proof") {
      return { partyProved: party, proof: void 0 };
    }
    let { methodName, args, previousProofs, ZkappClass, memoized, blindingValue } = party.lazyAuthorization;
    let publicInput = partyToPublicInput(party);
    let publicInputFields = ZkappPublicInput.toFields(publicInput);
    if (ZkappClass._provers === void 0)
      throw Error(`Cannot prove execution of ${methodName}(), no prover found. Try calling \`await ${ZkappClass.name}.compile(address)\` first, this will cache provers in the background.`);
    let provers = ZkappClass._provers;
    let methodError2 = `Error when computing proofs: Method ${methodName} not found. Make sure your environment supports decorators, and annotate with \`@method ${methodName}\`.`;
    if (ZkappClass._methods === void 0)
      throw Error(methodError2);
    let i2 = ZkappClass._methods.findIndex((m) => m.methodName === methodName);
    if (i2 === -1)
      throw Error(methodError2);
    let [, [, proof]] = await snarkContext.runWithAsync({ inProver: true, witnesses: args }, () => memoizationContext.runWithAsync({ memoized, currentIndex: 0, blindingValue }, () => provers[i2](publicInputFields, previousProofs)));
    Authorization.setProof(party, Pickles.proofToBase64Transaction(proof));
    let maxProofsVerified = ZkappClass._maxProofsVerified;
    const Proof2 = ZkappClass.Proof();
    return {
      partyProved: party,
      proof: new Proof2({ publicInput, proof, maxProofsVerified })
    };
  }
  let { feePayer, otherParties, memo } = parties;
  let otherPartiesProved = [];
  let proofs = [];
  for (let party of otherParties) {
    let { partyProved, proof } = await addProof(party);
    otherPartiesProved.push(partyProved);
    proofs.push(proof);
  }
  return {
    parties: { feePayer, otherParties: otherPartiesProved, memo },
    proofs
  };
}
function signJsonTransaction(transactionJson, privateKey) {
  if (typeof privateKey === "string")
    privateKey = PrivateKey.fromBase58(privateKey);
  let publicKey = privateKey.toPublicKey().toBase58();
  let parties = JSON.parse(transactionJson);
  let feePayer = parties.feePayer;
  if (feePayer.body.publicKey === publicKey) {
    parties = JSON.parse(Ledger.signFeePayer(JSON.stringify(parties), privateKey));
  }
  for (let i2 = 0; i2 < parties.otherParties.length; i2++) {
    let party = parties.otherParties[i2];
    if (party.body.publicKey === publicKey && party.authorization.proof === null) {
      parties = JSON.parse(Ledger.signOtherParty(JSON.stringify(parties), privateKey, i2));
    }
  }
  return JSON.stringify(parties);
}

// dist/node/lib/fetch.js
var import_isomorphic_fetch = __toModule(require("isomorphic-fetch"));
var defaultGraphqlEndpoint = "none";
function setGraphqlEndpoint(graphqlEndpoint) {
  defaultGraphqlEndpoint = graphqlEndpoint;
}
async function fetchAccount(accountInfo, graphqlEndpoint = defaultGraphqlEndpoint, { timeout = defaultTimeout } = {}) {
  let publicKeyBase58 = accountInfo.publicKey instanceof PublicKey ? accountInfo.publicKey.toBase58() : accountInfo.publicKey;
  let response = await fetchAccountInternal({ publicKey: publicKeyBase58, tokenId: accountInfo.tokenId }, graphqlEndpoint, {
    timeout
  });
  return response.error === void 0 ? {
    account: parseFetchedAccount(response.account),
    error: void 0
  } : { account: void 0, error: response.error };
}
async function fetchAccountInternal(accountInfo, graphqlEndpoint = defaultGraphqlEndpoint, config) {
  const { publicKey, tokenId } = accountInfo;
  let [response, error] = await makeGraphqlRequest(accountQuery(publicKey, tokenId ?? TokenId3.toBase58(TokenId3.default)), graphqlEndpoint, config);
  if (error !== void 0)
    return { account: void 0, error };
  let account = response.data.account;
  if (account === null) {
    return {
      account: void 0,
      error: {
        statusCode: 404,
        statusText: `fetchAccount: Account with public key ${publicKey} does not exist.`
      }
    };
  }
  addCachedAccountInternal(account, graphqlEndpoint);
  return {
    account,
    error: void 0
  };
}
var defaultTimeout = 3e4;
function toPermission(p2) {
  switch (p2) {
    case "None":
      return Permission.none();
    case "Proof":
      return Permission.proof();
    case "Signature":
      return Permission.signature();
    case "Either":
      return Permission.proofOrSignature();
    case "Impossible":
      return Permission.impossible();
    default:
      throw Error("unexpected permission");
  }
}
var accountQuery = (publicKey, tokenId) => `{
  account(publicKey: "${publicKey}", token: "${tokenId}") {
    publicKey
    nonce
    zkappUri
    zkappState
    permissions {
      editState
      send
      receive
      setDelegate
      setPermissions
      setVerificationKey
      setZkappUri
      editSequenceState
      setTokenSymbol
      incrementNonce
      setVotingFor
    }
    receiptChainHash
    balance { total }
    delegateAccount { publicKey }
    sequenceEvents
    token
    tokenSymbol
  }
}
`;
function parseFetchedAccount({ publicKey, nonce, zkappState, balance, permissions, delegateAccount, receiptChainHash, sequenceEvents, token, tokenSymbol }) {
  return {
    publicKey: publicKey !== void 0 ? PublicKey.fromBase58(publicKey) : void 0,
    nonce: nonce !== void 0 ? UInt32.fromString(nonce) : void 0,
    balance: balance && UInt64.fromString(balance.total),
    appState: (zkappState && zkappState.map(Field)) ?? void 0,
    permissions: permissions && Object.fromEntries(Object.entries(permissions).map(([k, v]) => [k, toPermission(v)])),
    sequenceState: sequenceEvents != void 0 ? Field(sequenceEvents[0]) : void 0,
    receiptChainHash: receiptChainHash !== void 0 ? ReceiptChainHash.fromBase58(receiptChainHash) : void 0,
    delegate: delegateAccount && PublicKey.fromBase58(delegateAccount.publicKey),
    tokenId: token !== void 0 ? Ledger.fieldOfBase58(token) : void 0,
    tokenSymbol: tokenSymbol !== void 0 ? tokenSymbol : void 0
  };
}
function stringifyAccount(account) {
  let { publicKey, nonce, balance, zkapp, tokenId, tokenSymbol } = account;
  return {
    publicKey: publicKey instanceof PublicKey ? publicKey.toBase58() : publicKey,
    nonce: nonce?.toString(),
    zkappState: zkapp?.appState.map((s) => s.toString()) ?? Array(ZkappStateLength).fill("0"),
    balance: { total: balance?.toString() ?? "0" },
    token: tokenId ?? TokenId3.toBase58(TokenId3.default),
    tokenSymbol: tokenSymbol ?? ""
  };
}
var accountCache = {};
var networkCache = {};
var accountsToFetch = {};
var networksToFetch = {};
var cacheExpiry = 10 * 60 * 1e3;
function markAccountToBeFetched(publicKey, tokenId, graphqlEndpoint) {
  let publicKeyBase58 = publicKey.toBase58();
  let tokenBase58 = TokenId3.toBase58(tokenId);
  accountsToFetch[`${publicKeyBase58};${tokenBase58};${graphqlEndpoint}`] = {
    publicKey: publicKeyBase58,
    tokenId: tokenBase58,
    graphqlEndpoint
  };
}
function markNetworkToBeFetched(graphqlEndpoint) {
  networksToFetch[graphqlEndpoint] = { graphqlEndpoint };
}
async function fetchMissingData(graphqlEndpoint) {
  let expired = Date.now() - cacheExpiry;
  let accounts = Object.entries(accountsToFetch).filter(([key, account]) => {
    if (account.graphqlEndpoint !== graphqlEndpoint)
      return false;
    let cachedAccount = accountCache[key];
    return cachedAccount === void 0 || cachedAccount.timestamp < expired;
  });
  let promises = accounts.map(async ([key, { publicKey, tokenId }]) => {
    let response = await fetchAccountInternal({ publicKey, tokenId }, graphqlEndpoint);
    if (response.error === void 0)
      delete accountsToFetch[key];
  });
  let network = Object.entries(networksToFetch).find(([key, network2]) => {
    if (network2.graphqlEndpoint !== graphqlEndpoint)
      return;
    let cachedNetwork = networkCache[key];
    return cachedNetwork === void 0 || cachedNetwork.timestamp < expired;
  });
  if (network !== void 0) {
    promises.push((async () => {
      try {
        await fetchLastBlock(graphqlEndpoint);
        delete networksToFetch[network[0]];
      } catch {
      }
    })());
  }
  await Promise.all(promises);
}
function getCachedAccount(publicKey, tokenId, graphqlEndpoint = defaultGraphqlEndpoint) {
  let account = accountCache[`${publicKey.toBase58()};${TokenId3.toBase58(tokenId)};${graphqlEndpoint}`]?.account;
  if (account !== void 0)
    return parseFetchedAccount(account);
}
function getCachedNetwork(graphqlEndpoint = defaultGraphqlEndpoint) {
  return networkCache[graphqlEndpoint]?.network;
}
function addCachedAccount(account, graphqlEndpoint = defaultGraphqlEndpoint) {
  addCachedAccountInternal(stringifyAccount(account), graphqlEndpoint);
}
function addCachedAccountInternal(account, graphqlEndpoint) {
  accountCache[`${account.publicKey};${account.token};${graphqlEndpoint}`] = {
    account,
    graphqlEndpoint,
    timestamp: Date.now()
  };
}
async function fetchLastBlock(graphqlEndpoint = defaultGraphqlEndpoint) {
  let [resp, error] = await makeGraphqlRequest(lastBlockQuery, graphqlEndpoint);
  if (error)
    throw Error(error.statusText);
  let lastBlock = resp?.data?.bestChain?.[0];
  if (lastBlock === void 0) {
    throw Error("Failed to fetch latest network state.");
  }
  let network = parseFetchedBlock(lastBlock);
  networkCache[graphqlEndpoint] = {
    network,
    graphqlEndpoint,
    timestamp: Date.now()
  };
  return network;
}
var lastBlockQuery = `{
  bestChain(maxLength: 1) {
    protocolState {
      blockchainState {
        snarkedLedgerHash
        stagedLedgerHash
        date
        utcDate
        stagedLedgerProofEmitted
      }
      previousStateHash
      consensusState {
        blockHeight
        slotSinceGenesis
        slot
        nextEpochData {
          ledger {hash totalCurrency}
          seed
          startCheckpoint
          lockCheckpoint
          epochLength
        }
        stakingEpochData {
          ledger {hash totalCurrency}
          seed
          startCheckpoint
          lockCheckpoint
          epochLength
        }
        epochCount
        minWindowDensity
        totalCurrency
        epoch
      }
    }
  }
}`;
function parseFetchedBlock({ protocolState: { blockchainState: { snarkedLedgerHash, utcDate }, consensusState: { blockHeight, minWindowDensity, totalCurrency, slot, slotSinceGenesis, nextEpochData, stakingEpochData } } }) {
  return {
    snarkedLedgerHash: LedgerHash.fromBase58(snarkedLedgerHash),
    timestamp: UInt64.fromString(utcDate),
    blockchainLength: UInt32.fromString(blockHeight),
    minWindowDensity: UInt32.fromString(minWindowDensity),
    totalCurrency: UInt64.fromString(totalCurrency),
    globalSlotSinceHardFork: UInt32.fromString(slot),
    globalSlotSinceGenesis: UInt32.fromString(slotSinceGenesis),
    nextEpochData: parseEpochData(nextEpochData),
    stakingEpochData: parseEpochData(stakingEpochData)
  };
}
function parseEpochData({ ledger: { hash, totalCurrency }, seed, startCheckpoint, lockCheckpoint, epochLength }) {
  return {
    ledger: {
      hash: LedgerHash.fromBase58(hash),
      totalCurrency: UInt64.fromString(totalCurrency)
    },
    seed: EpochSeed.fromBase58(seed),
    startCheckpoint: StateHash.fromBase58(startCheckpoint),
    lockCheckpoint: StateHash.fromBase58(lockCheckpoint),
    epochLength: UInt32.fromString(epochLength)
  };
}
function sendZkapp(json, graphqlEndpoint = defaultGraphqlEndpoint, { timeout = defaultTimeout } = {}) {
  return makeGraphqlRequest(sendZkappQuery(json), graphqlEndpoint, {
    timeout
  });
}
function sendZkappQuery(json) {
  return `mutation {
  sendZkapp(input: {
    parties: ${removeJsonQuotes(json)}
  }) {
    zkapp {
      parties {
        memo
      }
    }
  }
}
`;
}
function removeJsonQuotes(json) {
  let cleaned = JSON.stringify(JSON.parse(json), null, 2);
  return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, (match) => match.replace(/"/g, ""));
}
async function makeGraphqlRequest(query, graphqlEndpoint = defaultGraphqlEndpoint, { timeout = defaultTimeout } = {}) {
  if (graphqlEndpoint === "none")
    throw Error("Should have made a graphql request, but don't know to which endpoint. Try calling `setGraphqlEndpoint` first.");
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);
  try {
    let body = JSON.stringify({ operationName: null, query, variables: {} });
    let response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      signal: controller.signal
    });
    return await checkResponseStatus(response);
  } catch (error) {
    clearTimeout(timer);
    return [void 0, inferError(error)];
  }
}
async function checkResponseStatus(response) {
  if (response.ok) {
    return [await response.json(), void 0];
  } else {
    return [
      void 0,
      {
        statusCode: response.status,
        statusText: response.statusText
      }
    ];
  }
}
function inferError(error) {
  let errorMessage = JSON.stringify(error);
  if (error instanceof AbortSignal) {
    return { statusCode: 408, statusText: `Request Timeout: ${errorMessage}` };
  } else {
    return {
      statusCode: 500,
      statusText: `Unknown Error: ${errorMessage}`
    };
  }
}

// dist/node/lib/mina.js
var currentTransaction = Context.create();
function reportGetAccountError(publicKey, tokenId) {
  if (tokenId === TokenId3.toBase58(TokenId3.default)) {
    return `getAccount: Could not find account for public key ${publicKey}`;
  } else {
    return `getAccount: Could not find account for public key ${publicKey} with the tokenId ${tokenId}`;
  }
}
function createTransaction(feePayer, f, { fetchMode = "cached", isFinalRunOutsideCircuit = true } = {}) {
  if (currentTransaction.has()) {
    throw new Error("Cannot start new transaction within another transaction");
  }
  let feePayerKey = feePayer instanceof PrivateKey ? feePayer : feePayer?.feePayerKey;
  let fee = feePayer instanceof PrivateKey ? void 0 : feePayer?.fee;
  let memo = feePayer instanceof PrivateKey ? "" : feePayer?.memo ?? "";
  let transactionId = currentTransaction.enter({
    sender: feePayerKey,
    parties: [],
    fetchMode,
    isFinalRunOutsideCircuit
  });
  try {
    let err;
    while (true) {
      if (err !== void 0)
        err.bootstrap();
      try {
        snarkContext.runWith({ inRunAndCheck: true }, () => Circuit.runAndCheck(f));
        break;
      } catch (err_) {
        if (err_?.bootstrap)
          err = err_;
        else
          throw err_;
      }
    }
  } catch (err) {
    currentTransaction.leave(transactionId);
    throw err;
  }
  let otherParties = CallForest.toFlatList(currentTransaction.get().parties);
  try {
    for (let party of otherParties) {
      assertPreconditionInvariants(party);
    }
  } catch (err) {
    currentTransaction.leave(transactionId);
    throw err;
  }
  let feePayerParty;
  if (feePayerKey !== void 0) {
    let senderAddress = feePayerKey.toPublicKey();
    let senderAccount = getAccount(senderAddress, TokenId3.default);
    feePayerParty = Party2.defaultFeePayer(senderAddress, feePayerKey, senderAccount.nonce);
    if (fee !== void 0) {
      feePayerParty.body.fee = fee instanceof UInt64 ? fee : UInt64.fromString(String(fee));
    }
  } else {
    feePayerParty = Party2.dummyFeePayer();
  }
  let transaction2 = { otherParties, feePayer: feePayerParty, memo };
  currentTransaction.leave(transactionId);
  let self = {
    transaction: transaction2,
    sign(additionalKeys) {
      self.transaction = addMissingSignatures(self.transaction, additionalKeys);
      return self;
    },
    async prove() {
      let { parties, proofs } = await addMissingProofs(self.transaction);
      self.transaction = parties;
      return proofs;
    },
    toJSON() {
      let json = partiesToJson(self.transaction);
      return JSON.stringify(json);
    },
    toGraphqlQuery() {
      return sendZkappQuery(self.toJSON());
    },
    send() {
      return sendTransaction(self);
    }
  };
  return self;
}
var defaultAccountCreationFee = 1e9;
function LocalBlockchain({ accountCreationFee: accountCreationFee2 = defaultAccountCreationFee } = {}) {
  const msPerSlot = 3 * 60 * 1e3;
  const startTime = new Date().valueOf();
  const ledger = Ledger.create([]);
  let networkState = defaultNetworkState();
  function addAccount(pk, balance) {
    ledger.addAccount(pk, balance);
  }
  let testAccounts = [];
  for (let i2 = 0; i2 < 10; ++i2) {
    const largeValue = "30000000000";
    const k = PrivateKey.random();
    const pk = k.toPublicKey();
    addAccount(pk, largeValue);
    testAccounts.push({ privateKey: k, publicKey: pk });
  }
  const events = {};
  const actions = {};
  return {
    accountCreationFee: () => UInt64.from(accountCreationFee2),
    currentSlot() {
      return UInt32.fromNumber(Math.ceil((new Date().valueOf() - startTime) / msPerSlot));
    },
    hasAccount(publicKey, tokenId = TokenId3.default) {
      return !!ledger.getAccount(publicKey, tokenId);
    },
    getAccount(publicKey, tokenId = TokenId3.default) {
      let ledgerAccount = ledger.getAccount(publicKey, tokenId);
      if (ledgerAccount == void 0) {
        throw new Error(reportGetAccountError(publicKey.toBase58(), TokenId3.toBase58(tokenId)));
      } else {
        return {
          publicKey,
          tokenId,
          balance: new UInt64(ledgerAccount.balance.value),
          nonce: new UInt32(ledgerAccount.nonce.value),
          appState: ledgerAccount.zkapp?.appState ?? Array(ZkappStateLength).fill(Field.zero),
          tokenSymbol: ledgerAccount.tokenSymbol,
          receiptChainHash: ledgerAccount.receiptChainHash,
          provedState: Bool(ledgerAccount.zkapp?.provedState ?? false),
          delegate: ledgerAccount.delegate && PublicKey.from(ledgerAccount.delegate),
          sequenceState: ledgerAccount.zkapp?.sequenceState[0] ?? SequenceEvents.emptySequenceState()
        };
      }
    },
    getNetworkState() {
      return networkState;
    },
    sendTransaction(txn) {
      txn.sign();
      let partiesJson = partiesToJson(txn.transaction);
      ledger.applyJsonTransaction(JSON.stringify(partiesJson), String(accountCreationFee2), JSON.stringify(networkState));
      partiesJson.otherParties.forEach((p2) => {
        let addr = p2.body.publicKey;
        let tokenId = p2.body.tokenId;
        if (events[addr] === void 0) {
          events[addr] = {};
        }
        if (p2.body.events.length > 0) {
          if (events[addr][tokenId] === void 0) {
            events[addr][tokenId] = [];
          }
          events[addr][tokenId].push({
            events: p2.body.events,
            slot: networkState.globalSlotSinceHardFork.toString()
          });
        }
        let n = actions[addr]?.[tokenId]?.length ?? 1;
        let sequenceState = actions?.[addr]?.[tokenId]?.[n - 1]?.hash;
        let latestActionsHash = sequenceState === void 0 ? SequenceEvents.emptySequenceState() : Ledger.fieldOfBase58(sequenceState);
        let actionList = p2.body.sequenceEvents;
        let eventsHash = SequenceEvents.hash(actionList.map((e) => e.map((f) => Field(f))));
        if (actions[addr] === void 0) {
          actions[addr] = {};
        }
        if (p2.body.sequenceEvents.length > 0) {
          latestActionsHash = SequenceEvents.updateSequenceState(latestActionsHash, eventsHash);
          if (actions[addr][tokenId] === void 0) {
            actions[addr][tokenId] = [];
          }
          actions[addr][tokenId].push({
            actions: actionList,
            hash: Ledger.fieldToBase58(latestActionsHash)
          });
        }
      });
      return { wait: async () => {
      } };
    },
    async transaction(sender, f) {
      let tx = createTransaction(sender, f, {
        isFinalRunOutsideCircuit: false
      });
      let hasProofs = tx.transaction.otherParties.some(Authorization.hasLazyProof);
      return createTransaction(sender, f, {
        isFinalRunOutsideCircuit: !hasProofs
      });
    },
    applyJsonTransaction(json) {
      return ledger.applyJsonTransaction(json, String(accountCreationFee2), JSON.stringify(defaultNetworkState()));
    },
    async fetchEvents(publicKey, tokenId = TokenId3.default) {
      return events?.[publicKey.toBase58()]?.[TokenId3.toBase58(tokenId)] ?? [];
    },
    getActions(publicKey, tokenId = TokenId3.default) {
      return actions?.[publicKey.toBase58()]?.[Ledger.fieldToBase58(tokenId)] ?? [];
    },
    addAccount,
    testAccounts,
    setTimestamp(ms) {
      networkState.timestamp = ms;
    },
    setGlobalSlot(slot) {
      networkState.globalSlotSinceGenesis = slot;
    },
    setGlobalSlotSinceHardfork(slot) {
      networkState.globalSlotSinceHardFork = slot;
    },
    setBlockchainLength(height) {
      networkState.blockchainLength = height;
    },
    setTotalCurrency(currency) {
      networkState.totalCurrency = currency;
    }
  };
}
function RemoteBlockchain(graphqlEndpoint) {
  let accountCreationFee2 = UInt64.from(defaultAccountCreationFee);
  setGraphqlEndpoint(graphqlEndpoint);
  return {
    accountCreationFee: () => accountCreationFee2,
    currentSlot() {
      throw Error("currentSlot() is not implemented yet for remote blockchains.");
    },
    hasAccount(publicKey, tokenId = TokenId3.default) {
      if (!currentTransaction.has() || currentTransaction.get().fetchMode === "cached") {
        return !!getCachedAccount(publicKey, tokenId, graphqlEndpoint);
      }
      return false;
    },
    getAccount(publicKey, tokenId = TokenId3.default) {
      if (currentTransaction()?.fetchMode === "test") {
        markAccountToBeFetched(publicKey, tokenId, graphqlEndpoint);
        let account = getCachedAccount(publicKey, tokenId, graphqlEndpoint);
        return account ?? dummyAccount(publicKey);
      }
      if (!currentTransaction.has() || currentTransaction.get().fetchMode === "cached") {
        let account = getCachedAccount(publicKey, tokenId, graphqlEndpoint);
        if (account !== void 0)
          return account;
      }
      throw Error(`${reportGetAccountError(publicKey.toBase58(), TokenId3.toBase58(tokenId))}
Graphql endpoint: ${graphqlEndpoint}`);
    },
    getNetworkState() {
      if (currentTransaction()?.fetchMode === "test") {
        markNetworkToBeFetched(graphqlEndpoint);
        let network = getCachedNetwork(graphqlEndpoint);
        return network ?? defaultNetworkState();
      }
      if (!currentTransaction.has() || currentTransaction.get().fetchMode === "cached") {
        let network = getCachedNetwork(graphqlEndpoint);
        if (network !== void 0)
          return network;
      }
      throw Error(`getNetworkState: Could not fetch network state from graphql endpoint ${graphqlEndpoint}`);
    },
    sendTransaction(txn) {
      txn.sign();
      let sendPromise = sendZkapp(txn.toJSON());
      return {
        async wait() {
          let [response, error] = await sendPromise;
          if (error === void 0) {
            if (response.data === null && response.errors?.length > 0) {
              console.log("got graphql errors", response.errors);
            } else {
              console.log("got graphql response", response?.data);
              console.log("Info: waiting for inclusion in a block is not implemented yet.");
            }
          } else {
            console.log("got fetch error", error);
          }
        }
      };
    },
    async transaction(sender, f) {
      let tx = createTransaction(sender, f, {
        fetchMode: "test",
        isFinalRunOutsideCircuit: false
      });
      await fetchMissingData(graphqlEndpoint);
      let hasProofs = tx.transaction.otherParties.some(Authorization.hasLazyProof);
      return createTransaction(sender, f, {
        fetchMode: "cached",
        isFinalRunOutsideCircuit: !hasProofs
      });
    },
    async fetchEvents() {
      throw Error("fetchEvents() is not implemented yet for remote blockchains.");
    },
    getActions() {
      throw Error("fetchEvents() is not implemented yet for remote blockchains.");
    }
  };
}
function BerkeleyQANet(graphqlEndpoint) {
  return RemoteBlockchain(graphqlEndpoint);
}
var activeInstance = {
  accountCreationFee: () => UInt64.from(defaultAccountCreationFee),
  currentSlot: () => {
    throw new Error("must call Mina.setActiveInstance first");
  },
  hasAccount(publicKey, tokenId = TokenId3.default) {
    if (!currentTransaction.has() || currentTransaction.get().fetchMode === "cached") {
      return !!getCachedAccount(publicKey, tokenId, defaultGraphqlEndpoint);
    }
    return false;
  },
  getAccount(publicKey, tokenId = TokenId3.default) {
    if (currentTransaction()?.fetchMode === "test") {
      markAccountToBeFetched(publicKey, tokenId, defaultGraphqlEndpoint);
      return dummyAccount(publicKey);
    }
    if (!currentTransaction.has() || currentTransaction.get().fetchMode === "cached") {
      let account = getCachedAccount(publicKey, tokenId, defaultGraphqlEndpoint);
      if (account === void 0)
        throw Error(`${reportGetAccountError(publicKey.toBase58(), TokenId3.toBase58(tokenId))}

Either call Mina.setActiveInstance first or explicitly add the account with addCachedAccount`);
      return account;
    }
    throw new Error("must call Mina.setActiveInstance first");
  },
  getNetworkState() {
    throw new Error("must call Mina.setActiveInstance first");
  },
  sendTransaction() {
    throw new Error("must call Mina.setActiveInstance first");
  },
  async transaction(sender, f) {
    return createTransaction(sender, f);
  },
  fetchEvents() {
    throw Error("must call Mina.setActiveInstance first");
  },
  getActions() {
    throw Error("must call Mina.setActiveInstance first");
  }
};
function setActiveInstance(m) {
  activeInstance = m;
}
function transaction(senderOrF, fOrUndefined) {
  let sender;
  let f;
  if (fOrUndefined !== void 0) {
    sender = senderOrF;
    f = fOrUndefined;
  } else {
    sender = void 0;
    f = senderOrF;
  }
  return activeInstance.transaction(sender, f);
}
function currentSlot() {
  return activeInstance.currentSlot();
}
function getAccount(publicKey, tokenId) {
  return activeInstance.getAccount(publicKey, tokenId);
}
function hasAccount(publicKey, tokenId) {
  return activeInstance.hasAccount(publicKey, tokenId);
}
function getNetworkState() {
  return activeInstance.getNetworkState();
}
function getBalance(publicKey, tokenId) {
  return activeInstance.getAccount(publicKey, tokenId).balance;
}
function accountCreationFee() {
  return activeInstance.accountCreationFee();
}
function sendTransaction(txn) {
  return activeInstance.sendTransaction(txn);
}
async function fetchEvents(publicKey, tokenId) {
  return await activeInstance.fetchEvents(publicKey, tokenId);
}
function getActions(publicKey, tokenId) {
  return activeInstance.getActions(publicKey, tokenId);
}
function dummyAccount(pubkey) {
  return {
    balance: UInt64.zero,
    nonce: UInt32.zero,
    publicKey: pubkey ?? PublicKey.empty(),
    tokenId: TokenId3.default,
    appState: Array(ZkappStateLength).fill(Field.zero),
    tokenSymbol: "",
    provedState: Bool(false),
    receiptChainHash: emptyReceiptChainHash(),
    delegate: void 0,
    sequenceState: SequenceEvents.emptySequenceState()
  };
}
function defaultNetworkState() {
  let epochData = {
    ledger: { hash: Field.zero, totalCurrency: UInt64.zero },
    seed: Field.zero,
    startCheckpoint: Field.zero,
    lockCheckpoint: Field.zero,
    epochLength: UInt32.zero
  };
  return {
    snarkedLedgerHash: Field.zero,
    timestamp: UInt64.zero,
    blockchainLength: UInt32.zero,
    minWindowDensity: UInt32.zero,
    totalCurrency: UInt64.zero,
    globalSlotSinceHardFork: UInt32.zero,
    globalSlotSinceGenesis: UInt32.zero,
    stakingEpochData: epochData,
    nextEpochData: cloneCircuitValue(epochData)
  };
}

// dist/node/lib/state.js
function State() {
  return createState();
}
function state(stateType) {
  return function(target, key, _descriptor) {
    const ZkappClass = target.constructor;
    if (reservedPropNames.has(key)) {
      throw Error(`Property name ${key} is reserved.`);
    }
    let sc = smartContracts.get(ZkappClass);
    if (sc === void 0) {
      sc = { states: [], layout: void 0 };
      smartContracts.set(ZkappClass, sc);
    }
    sc.states.push([key, stateType]);
    Object.defineProperty(target, key, {
      get() {
        return this._?.[key];
      },
      set(v) {
        if (v._contract !== void 0)
          throw Error("A State should only be assigned once to a SmartContract");
        if (this._?.[key])
          throw Error("A @state should only be assigned once");
        v._contract = {
          key,
          stateType,
          instance: this,
          class: ZkappClass,
          wasConstrained: false,
          wasRead: false,
          cachedVariable: void 0
        };
        (this._ ?? (this._ = {}))[key] = v;
      }
    });
  };
}
function declareState(SmartContract2, states) {
  for (let key in states) {
    let CircuitValue2 = states[key];
    state(CircuitValue2)(SmartContract2.prototype, key);
  }
}
function createState() {
  return {
    _contract: void 0,
    set(state2) {
      if (this._contract === void 0)
        throw Error("set can only be called when the State is assigned to a SmartContract @state.");
      let layout = getLayoutPosition(this._contract);
      let stateAsFields = this._contract.stateType.toFields(state2);
      let party = this._contract.instance.self;
      stateAsFields.forEach((x, i2) => {
        Party2.setValue(party.body.update.appState[layout.offset + i2], x);
      });
    },
    assertEquals(state2) {
      if (this._contract === void 0)
        throw Error("assertEquals can only be called when the State is assigned to a SmartContract @state.");
      let layout = getLayoutPosition(this._contract);
      let stateAsFields = this._contract.stateType.toFields(state2);
      let party = this._contract.instance.self;
      stateAsFields.forEach((x, i2) => {
        Party2.assertEquals(party.body.preconditions.account.state[layout.offset + i2], x);
      });
      this._contract.wasConstrained = true;
    },
    assertNothing() {
      if (this._contract === void 0)
        throw Error("assertNothing can only be called when the State is assigned to a SmartContract @state.");
      this._contract.wasConstrained = true;
    },
    get() {
      if (this._contract === void 0)
        throw Error("get can only be called when the State is assigned to a SmartContract @state.");
      if (this._contract.cachedVariable !== void 0 && inCheckedComputation()) {
        this._contract.wasRead = true;
        return this._contract.cachedVariable;
      }
      let layout = getLayoutPosition(this._contract);
      let address = this._contract.instance.address;
      let stateAsFields;
      let inProver_ = inProver();
      let stateFieldsType = circuitArray(Field, layout.length);
      if (!inCompile() && !inAnalyze()) {
        let account;
        try {
          account = getAccount(address, this._contract.instance.self.body.tokenId);
        } catch (err) {
          if (inProver_) {
            throw err;
          }
          throw Error(`${this._contract.key}.get() failed, because the zkapp account was not found in the cache. Try calling \`await fetchAccount(zkappAddress)\` first.`);
        }
        if (account.appState === void 0) {
          stateAsFields = Array(layout.length).fill(Field.zero);
        } else {
          stateAsFields = [];
          for (let i2 = 0; i2 < layout.length; ++i2) {
            stateAsFields.push(account.appState[layout.offset + i2]);
          }
        }
        stateAsFields = inProver_ ? Circuit.witness(stateFieldsType, () => stateAsFields) : stateAsFields;
      } else {
        stateAsFields = Circuit.witness(stateFieldsType, () => {
          throw Error(`This error is thrown because you are reading out the value of a variable, when that value is not known.
To write a correct circuit, you must avoid any dependency on the concrete value of variables.`);
        });
      }
      let state2 = this._contract.stateType.ofFields(stateAsFields);
      this._contract.stateType.check?.(state2);
      this._contract.wasRead = true;
      this._contract.cachedVariable = state2;
      return state2;
    },
    async fetch() {
      if (this._contract === void 0)
        throw Error("fetch can only be called when the State is assigned to a SmartContract @state.");
      if (currentTransaction.has())
        throw Error("fetch is not intended to be called inside a transaction block.");
      let layout = getLayoutPosition(this._contract);
      let address = this._contract.instance.address;
      let { account } = await fetchAccount({
        publicKey: address,
        tokenId: TokenId3.toBase58(TokenId3.default)
      });
      if (account === void 0)
        return void 0;
      let stateAsFields;
      if (account.appState === void 0) {
        stateAsFields = Array(layout.length).fill(Field.zero);
      } else {
        stateAsFields = [];
        for (let i2 = 0; i2 < layout.length; i2++) {
          stateAsFields.push(account.appState[layout.offset + i2]);
        }
      }
      return this._contract.stateType.ofFields(stateAsFields);
    }
  };
}
function getLayoutPosition({ key, class: contractClass }) {
  let layout = getLayout(contractClass);
  let stateLayout = layout.get(key);
  if (stateLayout === void 0) {
    throw new Error(`state ${key} not found`);
  }
  return stateLayout;
}
function getLayout(scClass) {
  let sc = smartContracts.get(scClass);
  if (sc === void 0)
    throw Error("bug");
  if (sc.layout === void 0) {
    let layout = new Map();
    sc.layout = layout;
    let offset = 0;
    sc.states.forEach(([key, stateType]) => {
      let length = stateType.sizeInFields();
      layout.set(key, { offset, length });
      offset += length;
    });
  }
  return sc.layout;
}
var smartContracts = new WeakMap();
var reservedPropNames = new Set(["_methods", "_"]);
function assertStatePrecondition(sc) {
  try {
    for (let [key, context] of getStateContexts(sc)) {
      if (!context?.wasRead || context.wasConstrained)
        continue;
      let errorMessage = `You used \`this.${key}.get()\` without adding a precondition that links it to the actual on-chain state.
Consider adding this line to your code:
this.${key}.assertEquals(this.${key}.get());`;
      throw Error(errorMessage);
    }
  } finally {
    cleanStatePrecondition(sc);
  }
}
function cleanStatePrecondition(sc) {
  for (let [, context] of getStateContexts(sc)) {
    if (context === void 0)
      continue;
    context.wasRead = false;
    context.wasConstrained = false;
    context.cachedVariable = void 0;
  }
}
function getStateContexts(sc) {
  let scClass = sc.constructor;
  let scInfo = smartContracts.get(scClass);
  if (scInfo === void 0)
    return [];
  return scInfo.states.map(([key]) => [key, sc[key]?._contract]);
}

// dist/node/lib/zkapp.js
var reservedPropNames2 = new Set(["_methods", "_"]);
function method(target, methodName, descriptor) {
  const ZkappClass = target.constructor;
  if (reservedPropNames2.has(methodName)) {
    throw Error(`Property name ${methodName} is reserved.`);
  }
  if (typeof target[methodName] !== "function") {
    throw Error(`@method decorator was applied to \`${methodName}\`, which is not a function.`);
  }
  let paramTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
  let returnType = Reflect.getMetadata("design:returntype", target, methodName);
  class SelfProof2 extends Proof {
  }
  SelfProof2.publicInputType = ZkappPublicInput;
  SelfProof2.tag = () => ZkappClass;
  let methodEntry = sortMethodArguments(ZkappClass.name, methodName, paramTypes, SelfProof2);
  if (isAsFields(returnType))
    methodEntry.returnType = returnType;
  ZkappClass._methods ?? (ZkappClass._methods = []);
  ZkappClass._methods.push(methodEntry);
  ZkappClass._maxProofsVerified ?? (ZkappClass._maxProofsVerified = 0);
  ZkappClass._maxProofsVerified = Math.max(ZkappClass._maxProofsVerified, methodEntry.proofArgs.length);
  let func = descriptor.value;
  descriptor.value = wrapMethod(func, ZkappClass, methodEntry);
}
var smartContractContext = Context.create();
function wrapMethod(method2, ZkappClass, methodIntf) {
  return function wrappedMethod(...actualArgs) {
    cleanStatePrecondition(this);
    let isCallback = smartContractContext()?.isCallback ?? false;
    if (!smartContractContext.has() || isCallback) {
      return smartContractContext.runWith({ this: this, methodCallDepth: 0, isCallback: false }, () => {
        if (inCheckedComputation() && !isCallback) {
          let [, result2] = currentTransaction.runWith({
            sender: void 0,
            parties: [],
            fetchMode: inProver() ? "cached" : "test",
            isFinalRunOutsideCircuit: false
          }, () => {
            let publicInput = actualArgs[0];
            actualArgs = actualArgs.slice(1);
            let party = this.self;
            let blindingValue = Circuit.witness(Field, getBlindingValue);
            let context = memoizationContext() ?? {
              memoized: [],
              currentIndex: 0
            };
            let [, result3] = memoizationContext.runWith({ ...context, blindingValue }, () => method2.apply(this, actualArgs));
            let callDataFields = computeCallData(methodIntf, actualArgs, result3, blindingValue);
            party.body.callData = Poseidon2.hash(callDataFields);
            checkPublicInput(publicInput, party);
            assertPreconditionInvariants(party);
            cleanPreconditionsCache(party);
            assertStatePrecondition(this);
            return result3;
          });
          return result2;
        } else if (!currentTransaction.has()) {
          let result2 = method2.apply(this, actualArgs);
          assertPreconditionInvariants(this.self);
          cleanPreconditionsCache(this.self);
          assertStatePrecondition(this);
          return result2;
        } else {
          let clonedArgs = cloneCircuitValue(actualArgs);
          let party = this.self;
          let blindingValue = getBlindingValue();
          let [{ memoized }, result2] = memoizationContext.runWith({
            memoized: [],
            currentIndex: 0,
            blindingValue
          }, () => {
            method2.apply(this, actualArgs);
          });
          assertStatePrecondition(this);
          let callDataFields = computeCallData(methodIntf, actualArgs, result2, blindingValue);
          party.body.callData = Poseidon2.hash(callDataFields);
          if (!Authorization.hasAny(party)) {
            Authorization.setLazyProof(party, {
              methodName: methodIntf.methodName,
              args: clonedArgs,
              previousProofs: getPreviousProofsForProver(actualArgs, methodIntf),
              ZkappClass,
              memoized,
              blindingValue
            });
          }
          return result2;
        }
      })[1];
    }
    let parentParty = smartContractContext.get().this.self;
    let methodCallDepth = smartContractContext.get().methodCallDepth;
    let [, result] = smartContractContext.runWith({ this: this, methodCallDepth: methodCallDepth + 1, isCallback: false }, () => {
      let { returnType } = methodIntf;
      let noReturnTypeError = `To return a result from ${methodIntf.methodName}() inside another zkApp, you need to declare the return type.
This can be done by annotating the type at the end of the function signature. For example:

@method ${methodIntf.methodName}(): Field {
  // ...
}

Note: Only types built out of \`Field\` are valid return types. This includes snarkyjs primitive types and custom CircuitValues.`;
      if (ZkappClass._methodMetadata[methodIntf.methodName]?.hasReturn && returnType === void 0) {
        throw Error(noReturnTypeError);
      }
      let blindingValue = getBlindingValue();
      let runCalledContract = () => {
        let constantArgs = methodArgumentsToConstant(methodIntf, actualArgs);
        let constantBlindingValue = blindingValue.toConstant();
        let party2 = this.self;
        let transaction2 = currentTransaction();
        if (transaction2 !== void 0)
          transaction2.parties.pop();
        let [{ memoized }, result3] = memoizationContext.runWith({
          memoized: [],
          currentIndex: 0,
          blindingValue: constantBlindingValue
        }, () => method2.apply(this, constantArgs));
        assertStatePrecondition(this);
        if (result3 !== void 0) {
          if (returnType === void 0) {
            throw Error(noReturnTypeError);
          } else {
            result3 = toConstant(returnType, result3);
          }
        }
        let callDataFields2 = computeCallData(methodIntf, constantArgs, result3, constantBlindingValue);
        party2.body.callData = Poseidon.hash(callDataFields2, false);
        if (!Authorization.hasAny(party2)) {
          Authorization.setLazyProof(party2, {
            methodName: methodIntf.methodName,
            args: constantArgs,
            previousProofs: getPreviousProofsForProver(constantArgs, methodIntf),
            ZkappClass,
            memoized,
            blindingValue: constantBlindingValue
          });
        }
        return { party: party2, result: result3 ?? null };
      };
      let { party, result: result2 } = methodCallDepth === 0 ? Party2.witness(returnType ?? circuitValue(null), runCalledContract, true) : runCalledContract();
      party.body.callDepth = parentParty.body.callDepth + 1;
      party.parent = parentParty;
      let calls = Circuit.witness(Field, () => CallForest.hashChildren(party));
      parentParty.children.push({ party, calls });
      party.body.publicKey.assertEquals(this.address);
      party.body.tokenId.assertEquals(this.self.body.tokenId);
      let callDataFields = computeCallData(methodIntf, actualArgs, result2, blindingValue);
      let callData = Poseidon2.hash(callDataFields);
      party.body.callData.assertEquals(callData);
      return result2;
    });
    return result;
  };
}
function checkPublicInput({ party, calls }, self) {
  let otherInput = partyToPublicInput(self);
  party.assertEquals(otherInput.party);
  calls.assertEquals(otherInput.calls);
}
function computeCallData(methodIntf, argumentValues, returnValue, blindingValue) {
  let { returnType, methodName } = methodIntf;
  let args = methodArgumentTypesAndValues(methodIntf, argumentValues);
  let argSizesAndFields = args.map(({ type, value }) => [
    Field(type.sizeInFields()),
    ...type.toFields(value)
  ]);
  let totalArgSize = Field(args.map(({ type }) => type.sizeInFields()).reduce((s, t) => s + t, 0));
  let totalArgFields = argSizesAndFields.flat();
  let returnSize = Field(returnType?.sizeInFields() ?? 0);
  let returnFields = returnType?.toFields(returnValue) ?? [];
  let methodNameFields = stringToFields(methodName);
  return [
    totalArgSize,
    ...totalArgFields,
    returnSize,
    ...returnFields,
    ...methodNameFields,
    blindingValue
  ];
}
var Callback = class extends GenericArgument {
  constructor(instance, methodName, args) {
    super();
    this.instance = instance;
    let ZkappClass = instance.constructor;
    let methodIntf = (ZkappClass._methods ?? []).find((i2) => i2.methodName === methodName);
    if (methodIntf === void 0)
      throw Error(`Callback: could not find method ${ZkappClass.name}.${methodName}`);
    this.methodIntf = methodIntf;
    this.args = args;
  }
};
function partyFromCallback(parentZkapp, callback, disallowChildren = false) {
  let { party } = Party2.witness(circuitValue(null), () => {
    if (callback.isEmpty)
      throw Error("bug: empty callback");
    let { instance, methodIntf, args } = callback;
    let method2 = instance[methodIntf.methodName];
    let party2 = instance.self;
    if (currentTransaction.has()) {
      currentTransaction.get().parties.pop();
    }
    smartContractContext.runWith({
      this: instance,
      methodCallDepth: (smartContractContext()?.methodCallDepth ?? 0) + 1,
      isCallback: true
    }, () => method2.apply(instance, args));
    return { party: party2, result: null };
  }, true);
  let parentParty = parentZkapp.self;
  party.body.callDepth = parentParty.body.callDepth + 1;
  party.parent = parentParty;
  if (disallowChildren) {
    let calls = Circuit.witness(Field, () => CallForest.hashChildren(party));
    calls.assertEquals(CallForest.emptyHash());
    parentParty.children.push({ party, calls });
  } else {
    parentParty.children.push({ party });
  }
  return party;
}
var SmartContract = class {
  constructor(address, nativeToken) {
    this.events = {};
    this.address = address;
    this.nativeToken = nativeToken ?? TokenId3.default;
    Object.defineProperty(this, "reducer", {
      set(reducer) {
        var _a;
        ((_a = this)._ ?? (_a._ = {})).reducer = reducer;
      },
      get() {
        return getReducer(this);
      }
    });
  }
  static Proof() {
    var _a;
    let Contract = this;
    return _a = class extends Proof {
    }, _a.publicInputType = ZkappPublicInput, _a.tag = () => Contract, _a;
  }
  static async compile(address, tokenId = TokenId3.default) {
    let methodIntfs = this._methods ?? [];
    let methods = methodIntfs.map(({ methodName }) => {
      return (...args) => {
        let instance = new this(address, tokenId);
        instance[methodName](...args);
      };
    });
    this.analyzeMethods(address, tokenId);
    let { getVerificationKeyArtifact, provers, verify: verify2, tag } = compileProgram(ZkappPublicInput, methodIntfs, methods, this, { self: selfParty(address, tokenId) });
    let verificationKey = getVerificationKeyArtifact();
    this._provers = provers;
    this._verificationKey = {
      data: verificationKey.data,
      hash: Field(verificationKey.hash)
    };
    return { verificationKey, provers, verify: verify2 };
  }
  static digest(address, tokenId = TokenId3.default) {
    let methodData = this.analyzeMethods(address, tokenId);
    let hash = Poseidon.hash(Object.values(methodData).map((d) => Field(BigInt("0x" + d.digest))), false);
    return hash.toBigInt().toString(16);
  }
  deploy({ verificationKey, zkappKey }) {
    verificationKey ?? (verificationKey = this.constructor._verificationKey);
    if (verificationKey !== void 0) {
      let { hash: hash_, data } = verificationKey;
      let hash = typeof hash_ === "string" ? Field(hash_) : hash_;
      this.setValue(this.self.update.verificationKey, { hash, data });
    }
    this.setValue(this.self.update.permissions, Permissions.default());
    this.sign(zkappKey, true);
  }
  sign(zkappKey, fallbackToZeroNonce) {
    this.self.signInPlace(zkappKey, fallbackToZeroNonce);
  }
  executionState() {
    if (!currentTransaction.has()) {
      return {
        transactionId: NaN,
        party: selfParty(this.address, this.nativeToken)
      };
    }
    let executionState = this._executionState;
    if (executionState !== void 0 && executionState.transactionId === currentTransaction.id()) {
      return executionState;
    }
    let transaction2 = currentTransaction.get();
    let id = currentTransaction.id();
    let party = selfParty(this.address, this.nativeToken);
    transaction2.parties.push(party);
    executionState = { transactionId: id, party };
    this._executionState = executionState;
    return executionState;
  }
  get self() {
    return this.executionState().party;
  }
  get account() {
    return this.self.account;
  }
  get network() {
    return this.self.network;
  }
  get experimental() {
    let zkapp = this;
    return {
      get token() {
        return zkapp.self.token();
      }
    };
  }
  send(args) {
    return this.self.send(args);
  }
  get tokenId() {
    return this.self.tokenId;
  }
  get tokenSymbol() {
    return this.self.tokenSymbol;
  }
  get balance() {
    return this.self.balance;
  }
  get nonce() {
    return this.self.setNoncePrecondition();
  }
  emitEvent(type, event) {
    let party = this.self;
    let eventTypes = Object.keys(this.events);
    if (eventTypes.length === 0)
      throw Error(`emitEvent: You are trying to emit an event without having declared the types of your events.
Make sure to add a property \`events\` on ${this.constructor.name}, for example: 
class ${this.constructor.name} extends SmartContract {
  events = { 'my-event': Field }
}`);
    let eventNumber = eventTypes.sort().indexOf(type);
    if (eventNumber === -1)
      throw Error(`emitEvent: Unknown event type "${type}". The declared event types are: ${eventTypes.join(", ")}.`);
    let eventType = this.events[type];
    let eventFields;
    if (eventTypes.length === 1) {
      eventFields = eventType.toFields(event);
    } else {
      eventFields = [Field(eventNumber), ...eventType.toFields(event)];
    }
    party.body.events = Events2.pushEvent(party.body.events, eventFields);
  }
  async fetchEvents(start = UInt32.from(0), end) {
    let events = (await fetchEvents(this.address, this.self.body.tokenId)).filter((el) => {
      let slot = UInt32.from(el.slot);
      return end === void 0 ? start.lte(slot).toBoolean() : start.lte(slot).toBoolean() && slot.lte(end).toBoolean();
    }).map((el) => el.events).flat();
    let sortedEventTypes = Object.keys(this.events).sort();
    return events.map((event) => {
      if (sortedEventTypes.length === 1) {
        let type = sortedEventTypes[0];
        return {
          type,
          event: this.events[type].ofFields(event.map((f) => Field.fromString(f)))
        };
      } else {
        let type = sortedEventTypes[event[0]];
        event.shift();
        return {
          type,
          event: this.events[type].ofFields(event.map((f) => Field.fromString(f)))
        };
      }
    });
  }
  static runOutsideCircuit(run) {
    if (currentTransaction()?.isFinalRunOutsideCircuit || inProver())
      Circuit.asProver(run);
  }
  static analyzeMethods(address, tokenId = TokenId3.default) {
    let ZkappClass = this;
    let instance = new ZkappClass(address, tokenId);
    let methodIntfs = ZkappClass._methods ?? [];
    if (!methodIntfs.every((m) => m.methodName in ZkappClass._methodMetadata) && !inAnalyze()) {
      if (snarkContext.get().inRunAndCheck) {
        let err = new Error("Can not analyze methods inside Circuit.runAndCheck, because this creates a circuit nested in another circuit");
        err.bootstrap = () => ZkappClass.analyzeMethods(address, tokenId);
        throw err;
      }
      for (let methodIntf of methodIntfs) {
        let { rows, digest, result } = analyzeMethod(ZkappPublicInput, methodIntf, (...args) => instance[methodIntf.methodName](...args));
        let party = instance._executionState?.party;
        ZkappClass._methodMetadata[methodIntf.methodName] = {
          sequenceEvents: party.body.sequenceEvents.data.length,
          rows,
          digest,
          hasReturn: result !== void 0
        };
      }
    }
    return ZkappClass._methodMetadata;
  }
  setValue(maybeValue, value) {
    Party2.setValue(maybeValue, value);
  }
  setPermissions(permissions) {
    this.setValue(this.self.update.permissions, permissions);
  }
};
SmartContract._methodMetadata = {};
function getReducer(contract) {
  var _a;
  let reducer = ((_a = contract)._ ?? (_a._ = {})).reducer;
  if (reducer === void 0)
    throw Error(`You are trying to use a reducer without having declared its type.
Make sure to add a property \`reducer\` on ${contract.constructor.name}, for example:
class ${contract.constructor.name} extends SmartContract {
  reducer = { actionType: Field };
}`);
  return {
    dispatch(action) {
      let party = contract.self;
      let eventFields = reducer.actionType.toFields(action);
      party.body.sequenceEvents = SequenceEvents.pushEvent(party.body.sequenceEvents, eventFields);
    },
    reduce(actionLists, stateType, reduce, { state: state2, actionsHash }, { maxTransactionsWithActions = 32 } = {}) {
      if (actionLists.length > maxTransactionsWithActions) {
        throw Error(`reducer.reduce: Exceeded the maximum number of lists of actions, ${maxTransactionsWithActions}.
Use the optional \`maxTransactionsWithActions\` argument to increase this number.`);
      }
      let methodData = contract.constructor.analyzeMethods(contract.address);
      let possibleActionsPerTransaction = [
        ...new Set(Object.values(methodData).map((o) => o.sequenceEvents)).add(0)
      ].sort((x, y) => x - y);
      let possibleActionTypes = possibleActionsPerTransaction.map((n) => circuitArray(reducer.actionType, n));
      for (let i2 = 0; i2 < maxTransactionsWithActions; i2++) {
        let actions = i2 < actionLists.length ? actionLists[i2] : [];
        let length = actions.length;
        let lengths = possibleActionsPerTransaction.map((n) => Circuit.witness(Bool, () => Bool(length === n)));
        let actionss = possibleActionsPerTransaction.map((n, i3) => {
          let type = possibleActionTypes[i3];
          return Circuit.witness(type, () => length === n ? actions : emptyValue(type));
        });
        let eventsHashes = actionss.map((actions2) => {
          let events = actions2.map((u) => reducer.actionType.toFields(u));
          return SequenceEvents.hash(events);
        });
        let eventsHash = Circuit.switch(lengths, Field, eventsHashes);
        let newActionsHash = SequenceEvents.updateSequenceState(actionsHash, eventsHash);
        let isEmpty = lengths[0];
        actionsHash = Circuit.if(isEmpty, actionsHash, newActionsHash);
        let newStates = actionss.map((actions2) => {
          let newState = Circuit.witness(stateType, () => {
            let { toFields: toFields2, ofFields } = stateType;
            return ofFields(toFields2(state2).map((x) => x.toConstant()));
          });
          Circuit.assertEqual(newState, state2);
          actions2.forEach((action) => {
            newState = reduce(newState, action);
          });
          return newState;
        });
        state2 = Circuit.switch(lengths, stateType, newStates);
      }
      contract.account.sequenceState.assertEquals(actionsHash);
      return { state: state2, actionsHash };
    },
    getActions({ fromActionHash, endActionHash }) {
      let actionsForAccount = [];
      Circuit.asProver(() => {
        fromActionHash = fromActionHash?.equals(SequenceEvents.emptySequenceState()).toBoolean() ? void 0 : fromActionHash;
        let start = fromActionHash ? Ledger.fieldToBase58(fromActionHash) : void 0;
        let end = endActionHash ? Ledger.fieldToBase58(endActionHash) : void 0;
        let actions = getActions(contract.address, contract.self.tokenId);
        let startIndex = start ? actions.findIndex((e) => e.hash === start) + 1 : 0;
        let endIndex = end ? actions.findIndex((e) => e.hash === end) + 1 : void 0;
        actionsForAccount = actions.slice(startIndex, endIndex === 0 ? void 0 : endIndex).map((event) => event.actions.map((action) => reducer.actionType.ofFields(action.map((fieldAsString) => Field.fromString(fieldAsString)))));
      });
      return actionsForAccount;
    }
  };
}
function selfParty(address, tokenId) {
  let body = Body.keepAll(address);
  if (tokenId) {
    body.tokenId = tokenId;
    body.caller = tokenId;
  }
  return new Party2(body, {}, true);
}
async function deploy(SmartContract2, { zkappKey, verificationKey, initialBalance, feePayer, tokenId = TokenId3.default }) {
  let address = zkappKey.toPublicKey();
  let feePayerKey = feePayer instanceof PrivateKey ? feePayer : feePayer?.feePayerKey;
  let tx = await transaction(feePayer, () => {
    if (initialBalance !== void 0) {
      if (feePayerKey === void 0)
        throw Error(`When using the optional initialBalance argument, you need to also supply the fee payer's private key as part of the \`feePayer\` argument, to sign the initial balance funding.`);
      let amount = UInt64.fromString(String(initialBalance)).add(accountCreationFee());
      let feePayerAddress = feePayerKey.toPublicKey();
      let party = Party2.defaultParty(feePayerAddress);
      party.body.useFullCommitment = Bool(true);
      party.balance.subInPlace(amount);
      currentTransaction()?.parties.push(party);
    }
    let zkapp = new SmartContract2(address, tokenId);
    zkapp.deploy({ verificationKey, zkappKey });
    if (initialBalance !== void 0) {
      let amount = UInt64.fromString(String(initialBalance));
      zkapp.self.balance.addInPlace(amount);
    }
  });
  return tx.sign().toJSON();
}
function signFeePayer(transactionJson, feePayerKey, { transactionFee = 0, feePayerNonce = void 0, memo: feePayerMemo = void 0 }) {
  let parties = JSON.parse(transactionJson);
  if (typeof feePayerKey === "string")
    feePayerKey = PrivateKey.fromBase58(feePayerKey);
  let senderAddress = feePayerKey.toPublicKey();
  if (feePayerNonce === void 0) {
    let senderAccount = getAccount(senderAddress, TokenId3.default);
    feePayerNonce = senderAccount.nonce.toString();
  }
  if (feePayerMemo)
    parties.memo = Ledger.memoToBase58(feePayerMemo);
  parties.feePayer.body.nonce = `${feePayerNonce}`;
  parties.feePayer.body.publicKey = Ledger.publicKeyToString(senderAddress);
  parties.feePayer.body.fee = `${transactionFee}`;
  return signJsonTransaction(JSON.stringify(parties), feePayerKey);
}
function declareMethods(SmartContract2, methodArguments) {
  for (let key in methodArguments) {
    let argumentTypes = methodArguments[key];
    let target = SmartContract2.prototype;
    Reflect.metadata("design:paramtypes", argumentTypes)(target, key);
    let descriptor = Object.getOwnPropertyDescriptor(target, key);
    method(SmartContract2.prototype, key, descriptor);
    Object.defineProperty(target, key, descriptor);
  }
}
var Reducer = Object.defineProperty(function(reducer) {
  return reducer;
}, "initialActionsHash", { get: SequenceEvents.emptySequenceState });

// dist/node/lib/encryption.js
var encryption_exports = {};
__export(encryption_exports, {
  decrypt: () => decrypt,
  encrypt: () => encrypt
});
function encrypt(message, otherPublicKey) {
  let privateKey = Circuit.inCheckedComputation() ? Circuit.witness(Scalar, () => Scalar.random()) : Scalar.random();
  let publicKey = Group.generator.scale(privateKey);
  let sharedSecret = otherPublicKey.toGroup().scale(privateKey);
  let sponge = new Poseidon2.Sponge();
  sponge.absorb(sharedSecret.x);
  let cipherText = [];
  for (let i2 = 0; i2 < message.length; i2++) {
    let keyStream = sponge.squeeze();
    let encryptedChunk = message[i2].add(keyStream);
    cipherText.push(encryptedChunk);
    if (i2 % 2 === 1)
      sponge.absorb(cipherText[i2 - 1]);
    if (i2 % 2 === 1 || i2 === message.length - 1)
      sponge.absorb(cipherText[i2]);
  }
  let authenticationTag = sponge.squeeze();
  cipherText.push(authenticationTag);
  return { publicKey, cipherText };
}
function decrypt({ publicKey, cipherText }, privateKey) {
  let sharedSecret = publicKey.scale(privateKey.s);
  let sponge = new Poseidon2.Sponge();
  sponge.absorb(sharedSecret.x);
  let authenticationTag = cipherText.pop();
  let message = [];
  for (let i2 = 0; i2 < cipherText.length; i2++) {
    let keyStream = sponge.squeeze();
    let messageChunk = cipherText[i2].sub(keyStream);
    message.push(messageChunk);
    if (i2 % 2 === 1)
      sponge.absorb(cipherText[i2 - 1]);
    if (i2 % 2 === 1 || i2 === cipherText.length - 1)
      sponge.absorb(cipherText[i2]);
  }
  sponge.squeeze().assertEquals(authenticationTag);
  return message;
}

// dist/node/lib/string.js
var import_tslib3 = __toModule(require("tslib"));
var DEFAULT_STRING_LENGTH = 128;
var Character = class extends CircuitValue {
  isNull() {
    return this.equals(NullCharacter());
  }
  toField() {
    return this.value;
  }
  toString() {
    const charCode = Number(this.value.toString());
    return String.fromCharCode(charCode);
  }
  static fromString(str) {
    const char = Field(str.charCodeAt(0));
    return new Character(char);
  }
  static check(c) {
    c.value.rangeCheckHelper(16).assertEquals(c.value);
  }
};
(0, import_tslib3.__decorate)([
  prop,
  (0, import_tslib3.__metadata)("design:type", Field)
], Character.prototype, "value", void 0);
var CircuitString = class extends CircuitValue {
  constructor(values) {
    super(values);
  }
  static fromCharacters(chars) {
    return new CircuitString(fillWithNull(chars, this.maxLength));
  }
  maxLength() {
    return this.constructor.maxLength;
  }
  computeLengthAndMask() {
    let n = this.values.length;
    let length = Field.zero;
    let mask = [];
    let wasntNullAlready = Bool(true);
    for (let i2 = 0; i2 < n; i2++) {
      let isNull = this.values[i2].isNull();
      mask[i2] = isNull.and(wasntNullAlready);
      wasntNullAlready = isNull.not().and(wasntNullAlready);
      length.add(wasntNullAlready.toField());
    }
    mask[n] = wasntNullAlready;
    this._length = length;
    this._mask = mask;
    return { mask, length };
  }
  lengthMask() {
    return this._mask ?? this.computeLengthAndMask().mask;
  }
  length() {
    return this._length ?? this.computeLengthAndMask().length;
  }
  append(str) {
    let n = this.maxLength();
    this.length().add(str.length()).assertLt(n);
    let chars = this.values;
    let otherChars = fillWithNull(str.values, n);
    let possibleResults = [];
    for (let length = 0; length < n + 1; length++) {
      possibleResults[length] = chars.slice(0, length).concat(otherChars.slice(0, n - length));
    }
    let result = [];
    let mask = this.lengthMask();
    for (let i2 = 0; i2 < n; i2++) {
      let possibleCharsAtI = possibleResults.map((r) => r[i2]);
      result[i2] = Circuit.switch(mask, Character, possibleCharsAtI);
    }
    return CircuitString.fromCharacters(result);
  }
  hash() {
    return Poseidon2.hash(this.values.map((x) => x.value));
  }
  substring(start, end) {
    return CircuitString.fromCharacters(this.values.slice(start, end));
  }
  toString() {
    return this.values.map((x) => x.toString()).join("").replace(/[^ -~]+/g, "");
  }
  static fromString(str) {
    if (str.length > this.maxLength) {
      throw Error("CircuitString.fromString: input string exceeds max length!");
    }
    let characters = str.split("").map((x) => Character.fromString(x));
    return CircuitString.fromCharacters(characters);
  }
};
CircuitString.maxLength = DEFAULT_STRING_LENGTH;
(0, import_tslib3.__decorate)([
  arrayProp(Character, DEFAULT_STRING_LENGTH),
  (0, import_tslib3.__metadata)("design:type", Array)
], CircuitString.prototype, "values", void 0);
var NullCharacter = () => new Character(Field.zero);
function fillWithNull([...values], length) {
  let nullChar = NullCharacter();
  for (let i2 = values.length; i2 < length; i2++) {
    values[i2] = nullChar;
  }
  return values;
}

// dist/node/lib/merkle_tree.js
var MerkleTree = class {
  constructor(height) {
    this.height = height;
    this.nodes = {};
    this.zeroes = [Field(0)];
    for (let i2 = 1; i2 < height; i2++) {
      this.zeroes.push(Poseidon2.hash([this.zeroes[i2 - 1], this.zeroes[i2 - 1]]));
    }
  }
  getNode(level, index) {
    return this.nodes[level]?.[index.toString()] ?? this.zeroes[level];
  }
  getRoot() {
    return this.getNode(this.height - 1, 0n);
  }
  setNode(level, index, value) {
    var _a;
    ((_a = this.nodes)[level] ?? (_a[level] = {}))[index.toString()] = value;
  }
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
      this.setNode(level, currIndex, Poseidon2.hash([left, right]));
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
  validate(index) {
    const path = this.getWitness(index);
    let hash = this.getNode(0, index);
    for (const node of path) {
      hash = Poseidon2.hash(node.isLeft ? [hash, node.sibling] : [node.sibling, hash]);
    }
    return hash.toString() === this.getRoot().toString();
  }
  fill(leaves) {
    leaves.forEach((value, index) => {
      this.setLeaf(BigInt(index), value);
    });
  }
  get leafCount() {
    return 2n ** BigInt(this.height - 1);
  }
};
var BaseMerkleWitness = class extends CircuitValue {
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
    for (let i2 = 1; i2 < n; ++i2) {
      const left = Circuit.if(this.isLeft[i2 - 1], hash, this.path[i2 - 1]);
      const right = Circuit.if(this.isLeft[i2 - 1], this.path[i2 - 1], hash);
      hash = Poseidon2.hash([left, right]);
    }
    return hash;
  }
  calculateIndex() {
    let powerOfTwo = Field(1);
    let index = Field(0);
    let n = this.height();
    for (let i2 = 1; i2 < n; ++i2) {
      index = Circuit.if(this.isLeft[i2 - 1], index, index.add(powerOfTwo));
      powerOfTwo = powerOfTwo.mul(2);
    }
    return index;
  }
};
function MerkleWitness(height) {
  class MerkleWitness_ extends BaseMerkleWitness {
  }
  MerkleWitness_.height = height;
  arrayProp(Field, height - 1)(MerkleWitness_.prototype, "path");
  arrayProp(Bool, height - 1)(MerkleWitness_.prototype, "isLeft");
  return MerkleWitness_;
}

// dist/node/index.js
var Experimental_ = {
  Reducer,
  Callback,
  partyFromCallback,
  createChildParty,
  memoizeWitness,
  jsLayout,
  asFieldsAndAux: asFieldsAndAux2,
  packToFields,
  MerkleTree,
  MerkleWitness
};
var Experimental;
(function(Experimental2) {
  Experimental2.Reducer = Experimental_.Reducer;
  Experimental2.createChildParty = Experimental_.createChildParty;
  Experimental2.memoizeWitness = Experimental_.memoizeWitness;
  Experimental2.jsLayout = Experimental_.jsLayout;
  Experimental2.asFieldsAndAux = Experimental_.asFieldsAndAux;
  Experimental2.packToFields = Experimental_.packToFields;
  Experimental2.MerkleTree = Experimental_.MerkleTree;
  Experimental2.MerkleWitness = Experimental_.MerkleWitness;
  Experimental2.partyFromCallback = Experimental_.partyFromCallback;
  Experimental2.Callback = Experimental_.Callback;
})(Experimental || (Experimental = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Bool,
  Character,
  Circuit,
  CircuitString,
  CircuitValue,
  Encoding,
  Encryption,
  Experimental,
  Field,
  Group,
  Int64,
  Ledger,
  Mina,
  Party,
  Permissions,
  Poseidon,
  PrivateKey,
  Proof,
  PublicKey,
  Scalar,
  SelfProof,
  Sign,
  Signature,
  SmartContract,
  State,
  Token,
  Types,
  UInt32,
  UInt64,
  ZkProgram,
  ZkappPublicInput,
  addCachedAccount,
  arrayProp,
  circuitMain,
  circuitValue,
  declareMethods,
  declareState,
  deploy,
  fetchAccount,
  fetchLastBlock,
  getSrs,
  isReady,
  matrixProp,
  method,
  partiesToJson,
  prop,
  public_,
  recoverVerificationKey,
  sendZkapp,
  serializeVerificationKey,
  setGraphqlEndpoint,
  shutdown,
  signFeePayer,
  state,
  verify
});
