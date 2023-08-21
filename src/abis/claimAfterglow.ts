export default [
	{
		inputs: [
			{
				internalType: "address payable",
				name: "_MechPartsAfterglowTokenAddress",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "_claimMerkleRoot",
				type: "bytes32",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
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
		inputs: [
			{
				internalType: "uint256[]",
				name: "_tokenIds",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "_tokenCounts",
				type: "uint256[]",
			},
		],
		name: "burnBatch",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_recipient",
				type: "address",
			},
			{
				internalType: "bytes32[][]",
				name: "_proofs",
				type: "bytes32[][]",
			},
			{
				internalType: "uint256[]",
				name: "_tokenIds",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "_tokenCounts",
				type: "uint256[]",
			},
		],
		name: "claim",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "claimAllowlistClaimed",
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
		inputs: [],
		name: "claimMerkleRoot",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "tokenCount",
				type: "uint256",
			},
		],
		name: "getLeaf",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "mechPartsAfterglowToken",
		outputs: [
			{
				internalType: "contract MechPartsAfterglowToken",
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
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "onERC1155BatchReceived",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "onERC1155Received",
		outputs: [
			{
				internalType: "bytes4",
				name: "",
				type: "bytes4",
			},
		],
		stateMutability: "pure",
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
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_sender",
				type: "address",
			},
			{
				internalType: "bytes32[]",
				name: "_proof",
				type: "bytes32[]",
			},
			{
				internalType: "uint256",
				name: "_tokenId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_tokenCount",
				type: "uint256",
			},
		],
		name: "reviewClaimProof",
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
				internalType: "bytes32",
				name: "_merkleRoot",
				type: "bytes32",
			},
		],
		name: "setClaimMerkleRoot",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4",
			},
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "pure",
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
