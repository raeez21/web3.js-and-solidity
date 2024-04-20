(async()=>{
    const address = "0x6160D0Ca6ad8AA9Cc68d143D01591d8050b7dD9f"
    const abiArray = [
	{
		"inputs": [],
		"name": "myUint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newUint",
				"type": "uint256"
			}
		],
		"name": "setMyUint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
    const contractInstance = new web3.eth.Contract(abiArray, address)
    console.log(await contractInstance.methods.myUint().call());

    let accounts = await web3.eth.getAccounts();
    let txnResult = await contractInstance.methods.setMyUint(345).send({from:accounts[0]});

    console.log(await contractInstance.methods.myUint().call());
    console.log(txnResult);
})()