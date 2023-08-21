export default [
	{
		inputs: [
			{
				components: [
					{
						internalType: "string",
						name: "contractURI",
						type: "string",
					},
					{
						internalType: "string",
						name: "baseURI",
						type: "string",
					},
					{
						internalType: "address[]",
						name: "minters",
						type: "address[]",
					},
					{
						internalType: "address",
						name: "metadataManager",
						type: "address",
					},
					{
						internalType: "address",
						name: "royaltyReceiver",
						type: "address",
					},
					{
						internalType: "uint96",
						name: "royaltyFeeNumerator",
						type: "uint96",
					},
				],
				internalType: "struct IERC721Common.ERC721CommonConfig",
				name: "config",
				type: "tuple",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "ApprovalCallerNotOwnerNorApproved",
		type: "error",
	},
	{
		inputs: [],
		name: "ApprovalQueryForNonexistentToken",
		type: "error",
	},
	{
		inputs: [],
		name: "BalanceQueryForZeroAddress",
		type: "error",
	},
	{
		inputs: [],
		name: "MethodDisabled",
		type: "error",
	},
	{
		inputs: [],
		name: "MintERC2309QuantityExceedsLimit",
		type: "error",
	},
	{
		inputs: [],
		name: "MintToZeroAddress",
		type: "error",
	},
	{
		inputs: [],
		name: "MintZeroQuantity",
		type: "error",
	},
	{
		inputs: [],
		name: "OnlyMinter",
		type: "error",
	},
	{
		inputs: [],
		name: "OwnerQueryForNonexistentToken",
		type: "error",
	},
	{
		inputs: [],
		name: "OwnershipNotInitializedForExtraData",
		type: "error",
	},
	{
		inputs: [],
		name: "TooManyRequested",
		type: "error",
	},
	{
		inputs: [],
		name: "TransferCallerNotOwnerNorApproved",
		type: "error",
	},
	{
		inputs: [],
		name: "TransferFromIncorrectOwner",
		type: "error",
	},
	{
		inputs: [],
		name: "TransferToNonERC721ReceiverImplementer",
		type: "error",
	},
	{
		inputs: [],
		name: "TransferToZeroAddress",
		type: "error",
	},
	{
		inputs: [],
		name: "URIQueryForNonexistentToken",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "fromTokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "toTokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "ConsecutiveTransfer",
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
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "newBurners",
				type: "address[]",
			},
		],
		name: "addBurners",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "newMinters",
				type: "address[]",
			},
		],
		name: "addMinters",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "balanceOf",
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
		name: "baseURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "burn",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
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
				name: "",
				type: "address",
			},
		],
		name: "burners",
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
		name: "contractURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ethernalTokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "extraData",
		outputs: [
			{
				internalType: "uint24",
				name: "",
				type: "uint24",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getApproved",
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
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getStats",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "style",
						type: "uint256",
					},
					{
						internalType: "enum ITPLRevealedParts.StatType",
						name: "statType",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "stat",
						type: "uint256",
					},
				],
				internalType: "struct ITPLRevealedParts.TokenStats",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "getStatsBatch",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "style",
						type: "uint256",
					},
					{
						internalType: "enum ITPLRevealedParts.StatType",
						name: "statType",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "stat",
						type: "uint256",
					},
				],
				internalType: "struct ITPLRevealedParts.TokenStats[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getTokenExtra",
		outputs: [
			{
				internalType: "uint256",
				name: "originalId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "partType",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner_",
				type: "address",
			},
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
		],
		name: "isApprovedForAll",
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
				internalType: "address",
				name: "account",
				type: "address",
			},
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "isOwnerOfBatch",
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
		name: "metadataManager",
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
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				internalType: "uint24",
				name: "extraData_",
				type: "uint24",
			},
		],
		name: "mintTo",
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
		],
		name: "minters",
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
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "numberMinted",
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
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "ownerOf",
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
				internalType: "address[]",
				name: "oldBurners",
				type: "address[]",
			},
		],
		name: "removeBurners",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "oldMinters",
				type: "address[]",
			},
		],
		name: "removeMinters",
		outputs: [],
		stateMutability: "nonpayable",
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
				internalType: "uint256",
				name: "_tokenId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_salePrice",
				type: "uint256",
			},
		],
		name: "royaltyInfo",
		outputs: [
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
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes",
			},
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "newBaseURI",
				type: "string",
			},
		],
		name: "setBaseURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "newContractURI",
				type: "string",
			},
		],
		name: "setContractURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "receiver",
				type: "address",
			},
			{
				internalType: "uint96",
				name: "feeNumerator",
				type: "uint96",
			},
		],
		name: "setDefaultRoyalty",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newMetadataManager",
				type: "address",
			},
		],
		name: "setMetadataManager",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newStatsHolder",
				type: "address",
			},
		],
		name: "setStatsHolder",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "statsHolder",
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
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "tokenMechaPartData",
		outputs: [
			{
				components: [
					{
						components: [
							{
								internalType: "uint256",
								name: "style",
								type: "uint256",
							},
							{
								internalType: "enum ITPLRevealedParts.StatType",
								name: "statType",
								type: "uint8",
							},
							{
								internalType: "uint256",
								name: "stat",
								type: "uint256",
							},
						],
						internalType: "struct ITPLRevealedParts.TokenStats",
						name: "stats",
						type: "tuple",
					},
					{
						internalType: "uint256",
						name: "bodyPart",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "unrevealedTokenId",
						type: "uint256",
					},
				],
				internalType: "struct ITPLRevealedParts.TokenData",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]",
			},
		],
		name: "tokenMechaPartDataBatch",
		outputs: [
			{
				components: [
					{
						components: [
							{
								internalType: "uint256",
								name: "style",
								type: "uint256",
							},
							{
								internalType: "enum ITPLRevealedParts.StatType",
								name: "statType",
								type: "uint8",
							},
							{
								internalType: "uint256",
								name: "stat",
								type: "uint256",
							},
						],
						internalType: "struct ITPLRevealedParts.TokenStats",
						name: "stats",
						type: "tuple",
					},
					{
						internalType: "uint256",
						name: "bodyPart",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "unrevealedTokenId",
						type: "uint256",
					},
				],
				internalType: "struct ITPLRevealedParts.TokenData[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalMinted",
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
		name: "totalSupply",
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
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "payable",
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
