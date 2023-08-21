export default [
	{
		inputs: [
			{
				internalType: "address",
				name: "tplRevealed",
				type: "address",
			},
			{
				internalType: "address",
				name: "tplAfterglow",
				type: "address",
			},
			{
				internalType: "address",
				name: "tplMech",
				type: "address",
			},
			{
				internalType: "address",
				name: "tplPartsEscrow",
				type: "address",
			},
			{
				internalType: "address",
				name: "delegateRegistry",
				type: "address",
			},
			{
				internalType: "address",
				name: "disassemblyFeeRecipient_",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "disassemblyFee_",
				type: "uint256",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "DelegationInactive",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidBodyPart",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidFees",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidModelAmount",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidPartsAmount",
		type: "error",
	},
	{
		inputs: [],
		name: "NotAuthorized",
		type: "error",
	},
	{
		inputs: [],
		name: "UserNotPartsOwner",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "partsIds",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "extraData",
				type: "uint256",
			},
		],
		name: "MechAssembly",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [],
		name: "DELEGATE_REGISTRY",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TPL_AFTERGLOW",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TPL_MECH",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TPL_PARTS_ESCROW",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TPL_REVEALED",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "partsIds",
				type: "uint256[]",
			},
			{
				internalType: "uint256",
				name: "afterglowId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "extraData",
				type: "uint256",
			},
		],
		name: "craft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "partsIds",
				type: "uint256[]",
			},
			{
				internalType: "uint256",
				name: "afterglowId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "extraData",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "vault",
				type: "address",
			},
		],
		name: "craftFor",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "delegationActive",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "mechId",
				type: "uint256",
			},
		],
		name: "disassemble",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "mechId",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "vault",
				type: "address",
			},
		],
		name: "disassembleFor",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		name: "disassemblyFee",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "disassemblyFeeRecipient",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "engineIds",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "extraData",
				type: "uint256",
			},
		],
		name: "parseExtraData",
		outputs: [
			{
				internalType: "uint256",
				name: "seed",
				type: "uint256",
			},
			{
				internalType: "uint256[]",
				name: "colors",
				type: "uint256[]",
			},
			{
				internalType: "bool[]",
				name: "colorsActive",
				type: "bool[]",
			},
			{
				internalType: "bool",
				name: "emissive",
				type: "bool",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bool",
				name: "isActive",
				type: "bool",
			},
		],
		name: "setDelegationActive",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newDisassemblyFeeRecipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "newFee",
				type: "uint256",
			},
		],
		name: "setDisassemblyFee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
