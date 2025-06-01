export default [
			{
				"inputs": [
					{
						"internalType": "address payable",
						"name": "gearContractAddress",
						"type": "address"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "bioCanvasClaimed",
						"type": "bool"
					}
				],
				"name": "MerkleClaimProcessed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "bioCanvasClaimed",
						"type": "bool"
					}
				],
				"name": "OpenClaimProcessed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "RecipientRemoved",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "RecipientRemovedByAdmin",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "RecipientSet",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "RecipientSetByAdmin",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "maxClaimable",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "enum GEARClaim.ClaimType",
						"name": "claimType",
						"type": "uint8"
					},
					{
						"indexed": false,
						"internalType": "bytes32",
						"name": "merkleRoot",
						"type": "bytes32"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "includesBioCanvas",
						"type": "bool"
					}
				],
				"name": "TokenClaimAdded",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "TokenClaimRemoved",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "maxClaimable",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "enum GEARClaim.ClaimType",
						"name": "claimType",
						"type": "uint8"
					},
					{
						"indexed": false,
						"internalType": "bytes32",
						"name": "merkleRoot",
						"type": "bytes32"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "includesBioCanvas",
						"type": "bool"
					}
				],
				"name": "TokenClaimUpdated",
				"type": "event"
			},
			{
				"inputs": [],
				"name": "bioCanvasContract",
				"outputs": [
					{
						"internalType": "contract BioCanvas",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "canReceiveFor",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "allowedAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountToClaim",
						"type": "uint256"
					},
					{
						"internalType": "bytes32[]",
						"name": "proof",
						"type": "bytes32[]"
					}
				],
				"name": "claimMerkle",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "allowedAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountToClaim",
						"type": "uint256"
					},
					{
						"internalType": "bytes32[]",
						"name": "proof",
						"type": "bytes32[]"
					}
				],
				"name": "claimMerkle",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "tokenId",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "allowedAmount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountToClaim",
								"type": "uint256"
							},
							{
								"internalType": "bytes32[]",
								"name": "proof",
								"type": "bytes32[]"
							}
						],
						"internalType": "struct GEARClaim.MerkleClaim[]",
						"name": "claims",
						"type": "tuple[]"
					}
				],
				"name": "claimMultipleMerkle",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "tokenId",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "allowedAmount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountToClaim",
								"type": "uint256"
							},
							{
								"internalType": "bytes32[]",
								"name": "proof",
								"type": "bytes32[]"
							}
						],
						"internalType": "struct GEARClaim.MerkleClaim[]",
						"name": "claims",
						"type": "tuple[]"
					}
				],
				"name": "claimMultipleMerkle",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256[]",
						"name": "tokenIds",
						"type": "uint256[]"
					}
				],
				"name": "claimMultipleOpen",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "claimOpen",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxClaimable",
						"type": "uint256"
					},
					{
						"internalType": "enum GEARClaim.ClaimType",
						"name": "claimType",
						"type": "uint8"
					},
					{
						"internalType": "bytes32",
						"name": "merkleRoot",
						"type": "bytes32"
					},
					{
						"internalType": "bool",
						"name": "includesBioCanvas",
						"type": "bool"
					}
				],
				"name": "createTokenClaim",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "gearContract",
				"outputs": [
					{
						"internalType": "contract GEAR",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "getLeaf",
				"outputs": [
					{
						"internalType": "bytes32",
						"name": "",
						"type": "bytes32"
					}
				],
				"stateMutability": "pure",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					}
				],
				"name": "getMerkleClaimedAmount",
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
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					}
				],
				"name": "getValidRecipients",
				"outputs": [
					{
						"internalType": "address[]",
						"name": "",
						"type": "address[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					}
				],
				"name": "getValidRecipientsCount",
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
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					}
				],
				"name": "hasClaimedOpenClaim",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "isValidRecipient",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "merkleClaimedAmounts",
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
						"name": "",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "openClaimsClaimed",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "removeRecipient",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "removeRecipientForClaimer",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "removeTokenClaim",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "renounceOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address payable",
						"name": "bioCanvasContractAddress",
						"type": "address"
					}
				],
				"name": "setBioCanvasContract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address payable",
						"name": "gearContractAddress",
						"type": "address"
					}
				],
				"name": "setGearContract",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "setRecipient",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					}
				],
				"name": "setRecipientForClaimer",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "tokenClaims",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalClaimed",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxClaimable",
						"type": "uint256"
					},
					{
						"internalType": "enum GEARClaim.ClaimType",
						"name": "claimType",
						"type": "uint8"
					},
					{
						"internalType": "bytes32",
						"name": "merkleRoot",
						"type": "bytes32"
					},
					{
						"internalType": "bool",
						"name": "includesBioCanvas",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxClaimable",
						"type": "uint256"
					},
					{
						"internalType": "enum GEARClaim.ClaimType",
						"name": "claimType",
						"type": "uint8"
					},
					{
						"internalType": "bytes32",
						"name": "merkleRoot",
						"type": "bytes32"
					},
					{
						"internalType": "bool",
						"name": "includesBioCanvas",
						"type": "bool"
					}
				],
				"name": "updateTokenClaim",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"name": "validRecipients",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "claimer",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "allowedAmount",
						"type": "uint256"
					},
					{
						"internalType": "bytes32[]",
						"name": "proof",
						"type": "bytes32[]"
					}
				],
				"name": "verifyMerkleProof",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"stateMutability": "payable",
				"type": "receive"
			}
		]