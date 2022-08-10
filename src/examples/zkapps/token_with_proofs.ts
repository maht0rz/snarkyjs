import {
  Field,
  isReady,
  Ledger,
  method,
  Mina,
  Party,
  PrivateKey,
  SmartContract,
  state,
  State,
  PublicKey,
  UInt64,
  shutdown,
  Int64,
  Callback,
} from 'snarkyjs';

await isReady;

class TokenContract extends SmartContract {
  @state(Field) x = State<Field>();

  @method tokenDeploy(deployer: PrivateKey) {
    // super.token().deploy({ deployer });
  }

  @method update(y: Field) {
    this.x.assertEquals(this.x.get());
    this.x.set(y);
  }

  @method initialize() {
    this.x.set(Field.one);
  }

  @method mint(receiverAddress: PublicKey) {
    let amount = UInt64.from(1_000_000);
    this.token().mint({
      address: receiverAddress,
      amount,
    });
  }

  @method burn(receiverAddress: PublicKey) {
    let amount = UInt64.from(1_000);
    this.token().burn({
      address: receiverAddress,
      amount,
    });
  }

  @method sendTokens(
    senderAddress: PublicKey,
    receiverAddress: PublicKey,
    c: Callback<any>
  ) {
    console.log('DEBUG send tokens callback', c);

    // let parties = c.callback(c.args);

    // assert parties is correct

    let amount = UInt64.from(1_000);
    this.token().send({
      from: senderAddress,
      to: receiverAddress,
      amount,
    });
  }
}

class ZkAppB extends SmartContract {
  @state(Field) x = State<Field>();

  // deploy(args: DeployArgs) {
  //   super.deploy(args);
  //   this.setPermissions({
  //     ...Permissions.default(),
  //     editState: Permissions.proofOrSignature(),
  //     editSequenceState: Permissions.proofOrSignature(),
  //   });
  // }

  @method update(y: Field) {
    this.x.assertEquals(this.x.get());
    this.x.set(y);
  }

  @method authorizeSend(senderAddress: PublicKey, receiverAddress: PublicKey) {
    let amount = UInt64.from(1_000);

    let senderParty = Party.createUnsigned(this.address);
    senderParty.body.tokenId = this.nativeToken;
    senderParty.body.caller = this.nativeToken;
    let i0 = senderParty.body.balanceChange;
    senderParty.body.balanceChange = new Int64(i0.magnitude, i0.sgn).sub(
      amount
    );

    let receiverParty = Party.createUnsigned(receiverAddress);
    receiverParty.body.tokenId = this.nativeToken;
    receiverParty.body.caller = this.nativeToken;
    let i1 = receiverParty.body.balanceChange;
    receiverParty.body.balanceChange = new Int64(i1.magnitude, i1.sgn).add(
      amount
    );
  }
}

class C extends SmartContract {}

let Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);

// a test account that pays all the fees, and puts additional funds into the zkapp
let feePayer = Local.testAccounts[0].privateKey;

// the zkapp account
let tokenZkAppKey = PrivateKey.random();
let tokenZkAppAddress = tokenZkAppKey.toPublicKey();

let zkAppBKey = PrivateKey.random();
let zkAppBAddress = zkAppBKey.toPublicKey();

let zkAppCKey = PrivateKey.random();
let zkAppCAddress = zkAppCKey.toPublicKey();

let tokenAccount1Key = Local.testAccounts[1].privateKey;
let tokenAccount1 = tokenAccount1Key.toPublicKey();

let tokenAccount2Key = Local.testAccounts[2].privateKey;
let tokenAccount2 = tokenAccount2Key.toPublicKey();

let tokenZkApp = new TokenContract(tokenZkAppAddress);
let tokenId = tokenZkApp.token().id;

let zkAppB = new ZkAppB(zkAppBAddress, tokenId);

let zkAppC = new C(zkAppCAddress);
let tx;

console.log('tokenZkAppAddress', tokenZkAppAddress.toBase58());
console.log('zkAppB', zkAppBAddress.toBase58());

console.log('compile (TokenContract)');
await TokenContract.compile(tokenZkAppAddress);
console.log('compile (ZkAppB)');
let { verificationKey: verificationKeyB } = await ZkAppB.compile(zkAppBAddress);

console.log('deploy tokenZkApp');
tx = await Local.transaction(feePayer, () => {
  Party.fundNewAccount(feePayer);
  tokenZkApp.deploy({ zkappKey: tokenZkAppKey });
});
tx.send();

console.log('deploy zkAppB');
tx = await Local.transaction(feePayer, () => {
  Party.fundNewAccount(feePayer);
  tokenZkApp.tokenDeploy(zkAppBKey);
});
tx.sign([zkAppBKey]);

await tx.prove();
tx.send();

console.log(`test`);
console.log(Mina.getAccount(zkAppBAddress, tokenId).publicKey.toBase58());
console.log(
  Ledger.fieldToBase58(Mina.getAccount(zkAppBAddress, tokenId).tokenId)
);

console.log('authorize send');

tx = await Local.transaction(feePayer, () => {
  let authorizeSendingCallback = new Callback(zkAppB, zkAppB.authorizeSend, [
    zkAppBAddress,
    tokenAccount1,
  ]);
  console.log('authorizeSendingCallback', authorizeSendingCallback);
  // we call the token contract with the callback
  tokenZkApp.sendTokens(zkAppBAddress, tokenAccount1, authorizeSendingCallback);
});
tx.sign([zkAppBKey]);
await tx.prove();

// We can't update the state without getting authorization from the token contract since the tokenId is set in the constructor
// console.log('update zkAppB');
// tx = await Local.transaction(feePayer, () => {
//   tokenZkApp.tokenDeploy(zkAppBKey);
//   zkAppB.update(Field.one);
//   // zkAppB.sign(zkAppBKey);
// });
// tx.sign([zkAppBKey]);
// console.log(JSON.stringify(partiesToJson(tx.transaction)));
// tx.send();

shutdown();