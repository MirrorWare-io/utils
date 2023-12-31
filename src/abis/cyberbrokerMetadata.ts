export default [
	{
		inputs: [
			{
				internalType: "address",
				name: "_metadataStorageContract",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
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
				name: "_startIndex",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_thresholdCounter",
				type: "uint256",
			},
		],
		name: "_renderBroker",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
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
				internalType: "string",
				name: "_key",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_startIndex",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_thresholdCounter",
				type: "uint256",
			},
		],
		name: "_renderData",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
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
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "brokerDna",
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
		name: "contractDataStorage",
		outputs: [
			{
				internalType: "contract ContractDataStorage",
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
				name: "_tokenId",
				type: "uint256",
			},
		],
		name: "getBrokerName",
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
		name: "getDescription",
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
		name: "getExternalUrl",
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
		name: "getImageCache",
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
		name: "getLayerAttributes",
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
		name: "getLayers",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getOffchainSvgParser",
		outputs: [
			{
				internalType: "string",
				name: "_output",
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
		name: "getStatAttributes",
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
		name: "getStats",
		outputs: [
			{
				internalType: "uint256",
				name: "mind",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "body",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "soul",
				type: "uint256",
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
		name: "getTalent",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "talent",
						type: "string",
					},
					{
						internalType: "string",
						name: "species",
						type: "string",
					},
					{
						internalType: "string",
						name: "class",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
				],
				internalType: "struct ICyberBrokersMetadata.CyberBrokerTalent",
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
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "getTalentAttributes",
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
				name: "_tokenId",
				type: "uint256",
			},
		],
		name: "getTokenData",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
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
		name: "hasOnchainMetadata",
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
				name: "layerId",
				type: "uint256",
			},
		],
		name: "layerMap",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "key",
						type: "string",
					},
					{
						internalType: "string",
						name: "attributeName",
						type: "string",
					},
					{
						internalType: "string",
						name: "attributeValue",
						type: "string",
					},
				],
				internalType: "struct ICyberBrokersMetadata.CyberBrokerLayer",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "metadataStorageContract",
		outputs: [
			{
				internalType: "contract CyberBrokersMetadata",
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
		name: "render",
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
				name: "_tokenId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_startIndex",
				type: "uint256",
			},
		],
		name: "renderBroker",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
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
				internalType: "string",
				name: "_key",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "_startIndex",
				type: "uint256",
			},
		],
		name: "renderData",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
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
		inputs: [],
		name: "svgParser",
		outputs: [
			{
				internalType: "contract SvgParser",
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
				name: "talentId",
				type: "uint256",
			},
		],
		name: "talentMap",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "talent",
						type: "string",
					},
					{
						internalType: "string",
						name: "species",
						type: "string",
					},
					{
						internalType: "string",
						name: "class",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
				],
				internalType: "struct ICyberBrokersMetadata.CyberBrokerTalent",
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
];
