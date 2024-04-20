# web3.js-and-solidity
This is a repo which shows how Web3.js and Solidity based Smart Contracts can integrate together.
There are 2 different programs.

## 1 [SampleDebuggin.sol](SampleDebuggin.sol)  and [updateUint.js](updateUint.js)

Here the SOL file defines a Smart Contract which has a storage variable called `myUint`. It also has a function called `setMyUint()` which can update the value of this storage variable.

The [updateUint.js](updateUint.js) is a web3 program which interacts with this SC. It stores the deployed address of SC as well as the ABI array (to invoke the `setMyUint()` func). Then a new contract instance created and `setMyUint()` txn invoked using `send()` function and a `from` account.

## 2 [EventExample.sol](EventExample.sol) and [EventListener.js](EventListener.js)

This is to show how Web3.js can listen to smart contracts events.

The [EventExample.sol](EventExample.sol) emits a TokensSent() event along with some values like `_from`, `_to`, `_amt` whenever `sendToken()` txn  called. 

`_from` and `_to` are defined as indexed parameters to enable filtering of events on this field. 

This event is then caught in [EventListener.js](EventListener.js) which is written in JS fiddle at this [link](https://jsfiddle.net/bc1p5vxu/). Metamask injects itself into this JS script as `window.ethereum` object. Using this object, the JS script can interact with SC and blockchain. ABI and deploy address is used to create contractInstance. 

Then `contractInstance.getPastEvents()` is used to get all past events of TokensSent and a filter is applied on the `_to` field.


For more details refer [this](https://ethereum-blockchain-developer.com/2022-05-erc20-token/04-events-and-web3js/)

