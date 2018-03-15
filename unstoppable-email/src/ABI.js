const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getUnreadEmail",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLastEmail",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "emailAddress",
				"type": "string"
			}
		],
		"name": "addAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "accounts",
		"outputs": [
			{
				"components": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"components": [
							{
								"name": "id",
								"type": "uint256"
							},
							{
								"name": "sender",
								"type": "address"
							},
							{
								"name": "reciever",
								"type": "address"
							},
							{
								"name": "message",
								"type": "string"
							},
							{
								"name": "subject",
								"type": "string"
							},
							{
								"name": "read",
								"type": "bool"
							}
						],
						"name": "mail",
						"type": "tuple[]"
					}
				],
				"name": "inbox",
				"type": "tuple"
			},
			{
				"name": "emailAddress",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "recieverAddress",
				"type": "address"
			},
			{
				"name": "subject",
				"type": "string"
			},
			{
				"name": "message",
				"type": "string"
			}
		],
		"name": "sendMail",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

export default abi;