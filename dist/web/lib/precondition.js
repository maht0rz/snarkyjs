import { Circuit, Bool, Field } from '../snarky.js';
import { circuitValueEquals } from './circuit_value.js';
import * as Mina from './mina.js';
import { SequenceEvents, Preconditions } from './party.js';
import { UInt32, UInt64 } from './int.js';
import { inAnalyze, inCompile, inProver } from './proof_system.js';
import { jsLayout } from '../snarky/types.js';
import { emptyReceiptChainHash } from './hash.js';
export { preconditions, Account, Network, assertPreconditionInvariants, cleanPreconditionsCache, };
function preconditions(party, isSelf) {
    initializePreconditions(party, isSelf);
    return { account: Account(party), network: Network(party) };
}
// note: please keep the two precondition implementations separate
// so we can add customized fields easily
function Network(party) {
    let layout = jsLayout.Party.entries.body.entries.preconditions.entries.network;
    let context = getPreconditionContextExn(party);
    return preconditionClass(layout, 'network', party, context);
}
function Account(party) {
    let layout = jsLayout.Party.entries.body.entries.preconditions.entries.account;
    let context = getPreconditionContextExn(party);
    return preconditionClass(layout, 'account', party, context);
}
let unimplementedPreconditions = [
    // unimplemented because its not checked in the protocol
    'network.stakingEpochData.seed',
    'network.nextEpochData.seed',
    // this is partially unimplemented because the field is missing on the account endpoint
    // but with the local ledger it works!
    'account.provedState',
];
let baseMap = { UInt64, UInt32, Field, Bool };
function preconditionClass(layout, baseKey, party, context) {
    if (layout.type === 'option') {
        // range condition
        if (layout.optionType === 'flaggedOption' &&
            layout.inner.type === 'object' &&
            layout.inner.keys.join(',') === 'lower,upper') {
            let lower = layout.inner.entries.lower.type;
            let baseType = baseMap[lower];
            return {
                ...preconditionSubclass(party, baseKey, baseType, context),
                assertBetween(lower, upper) {
                    context.constrained.add(baseKey);
                    let property = getPath(party.body.preconditions, baseKey);
                    property.isSome = Bool(true);
                    property.value.lower = lower;
                    property.value.upper = upper;
                },
            };
        }
        // value condition
        else if (layout.optionType === 'flaggedOption') {
            let baseType = baseMap[layout.inner.type];
            return preconditionSubclass(party, baseKey, baseType, context);
        }
    }
    else if (layout.type === 'array') {
        return {}; // not applicable yet, TODO if we implement state
    }
    else if (layout.type === 'object') {
        // for each field, create a recursive object
        return Object.fromEntries(layout.keys.map((key) => {
            let value = layout.entries[key];
            return [
                key,
                preconditionClass(value, `${baseKey}.${key}`, party, context),
            ];
        }));
    }
    else
        throw Error('bug');
}
function preconditionSubclass(party, longKey, fieldType, context) {
    return {
        get() {
            if (unimplementedPreconditions.includes(longKey)) {
                let self = context.isSelf ? 'this' : 'party';
                throw Error(`${self}.${longKey}.get() is not implemented yet.`);
            }
            let { read, vars } = context;
            read.add(longKey);
            return (vars[longKey] ?? (vars[longKey] = getVariable(party, longKey, fieldType)));
        },
        assertEquals(value) {
            context.constrained.add(longKey);
            let property = getPath(party.body.preconditions, longKey);
            if ('isSome' in property) {
                property.isSome = Bool(true);
                if ('lower' in property.value && 'upper' in property.value) {
                    property.value.lower = value;
                    property.value.upper = value;
                }
                else {
                    property.value = value;
                }
            }
            else {
                setPath(party.body.preconditions, longKey, value);
            }
        },
        assertNothing() {
            context.constrained.add(longKey);
        },
    };
}
function getVariable(party, longKey, fieldType) {
    // in compile, just return an empty variable
    if (inCompile() || inAnalyze()) {
        return Circuit.witness(fieldType, () => {
            // TODO this error is never thrown. instead, reading the value with e.g. `toString` ends up
            // calling snarky's eval_as_prover, which throws "Can't evaluate prover code outside an as_prover block"
            // this should be caught and replaced with a better error message
            throw Error(`This error is thrown because you are reading out the value of a variable, when that value is not known.
To write a correct circuit, you must avoid any dependency on the concrete value of variables.`);
        });
    }
    // if not in compile, get the variable's value first
    let [accountOrNetwork, ...rest] = longKey.split('.');
    let key = rest.join('.');
    let value;
    if (accountOrNetwork === 'account') {
        let account = getAccountPreconditions(party);
        value = account[key];
    }
    else if (accountOrNetwork === 'network') {
        let networkState = Mina.getNetworkState();
        value = getPath(networkState, key);
    }
    else {
        throw Error('impossible');
    }
    // in prover, return a new variable which holds the value
    // outside, just return the value
    if (inProver()) {
        return Circuit.witness(fieldType, () => value);
    }
    else {
        return value;
    }
}
function getAccountPreconditions(party) {
    let { publicKey, tokenId } = party.body;
    let hasAccount = Mina.hasAccount(publicKey, tokenId);
    if (!hasAccount) {
        return {
            balance: UInt64.zero,
            nonce: UInt32.zero,
            receiptChainHash: emptyReceiptChainHash(),
            sequenceState: SequenceEvents.emptySequenceState(),
            delegate: publicKey,
            provedState: Bool(false),
            isNew: Bool(true),
        };
    }
    let account = Mina.getAccount(publicKey, tokenId);
    return {
        balance: account.balance,
        nonce: account.nonce,
        receiptChainHash: account.receiptChainHash,
        sequenceState: account.sequenceState ?? SequenceEvents.emptySequenceState(),
        delegate: account.delegate ?? account.publicKey,
        provedState: account.provedState,
        isNew: Bool(false),
    };
}
function initializePreconditions(party, isSelf) {
    preconditionContexts.set(party, {
        read: new Set(),
        constrained: new Set(),
        vars: {},
        isSelf,
    });
}
function cleanPreconditionsCache(party) {
    let context = preconditionContexts.get(party);
    if (context !== undefined)
        context.vars = {};
}
function assertPreconditionInvariants(party) {
    let context = getPreconditionContextExn(party);
    let self = context.isSelf ? 'this' : 'party';
    let dummyPreconditions = Preconditions.ignoreAll();
    for (let preconditionPath of context.read) {
        // check if every precondition that was read was also contrained
        if (context.constrained.has(preconditionPath))
            continue;
        // check if the precondition was modified manually, which is also a valid way of avoiding an error
        let precondition = getPath(party.body.preconditions, preconditionPath);
        let dummy = getPath(dummyPreconditions, preconditionPath);
        if (!circuitValueEquals(precondition, dummy))
            continue;
        // we accessed a precondition field but not constrained it explicitly - throw an error
        let hasAssertBetween = isRangeCondition(precondition);
        let shortPath = preconditionPath.split('.').pop();
        let errorMessage = `You used \`${self}.${preconditionPath}.get()\` without adding a precondition that links it to the actual ${shortPath}.
Consider adding this line to your code:
${self}.${preconditionPath}.assertEquals(${self}.${preconditionPath}.get());${hasAssertBetween
            ? `
You can also add more flexible preconditions with \`${self}.${preconditionPath}.assertBetween(...)\`.`
            : ''}`;
        throw Error(errorMessage);
    }
}
function getPreconditionContextExn(party) {
    let c = preconditionContexts.get(party);
    if (c === undefined)
        throw Error('bug: precondition context not found');
    return c;
}
const preconditionContexts = new WeakMap();
function isRangeCondition(condition) {
    return 'isSome' in condition && 'lower' in condition.value;
}
// helper. getPath({a: {b: 'x'}}, 'a.b') === 'x'
// TODO: would be awesome to type this
function getPath(obj, path) {
    let pathArray = path.split('.').reverse();
    while (pathArray.length > 0) {
        let key = pathArray.pop();
        obj = obj[key];
    }
    return obj;
}
function setPath(obj, path, value) {
    let pathArray = path.split('.');
    let key = pathArray.pop();
    getPath(obj, pathArray.join('.'))[key] = value;
}
//# sourceMappingURL=precondition.js.map