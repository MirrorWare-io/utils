[@cyberbrokers/eth-utils](README.md) / Exports

# @cyberbrokers/eth-utils

## Table of contents

### Variables

- [ABIS](modules.md#abis)
- [ALL\_CB\_CONTRACTS\_ADDRESSES](modules.md#all_cb_contracts_addresses)
- [AddressZero](modules.md#addresszero)
- [SUPPORTED\_CHAIN\_IDS](modules.md#supported_chain_ids)

### Functions

- [cleanAddress](modules.md#cleanaddress)
- [getCbContractsByChainId](modules.md#getcbcontractsbychainid)
- [getContractsByChain](modules.md#getcontractsbychain)
- [getDelegateContract](modules.md#getdelegatecontract)
- [getWalletFromDelegate](modules.md#getwalletfromdelegate)
- [parseTokenId](modules.md#parsetokenid)
- [signTypedData](modules.md#signtypeddata)
- [toHex](modules.md#tohex)
- [truncateAddress](modules.md#truncateaddress)
- [web3ExtractErrorMessage](modules.md#web3extracterrormessage)

## Variables

### ABIS

• `Const` **ABIS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `afterglowAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "ApprovalForAll"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `name`: `string` = "autoApprovedOperators"; `outputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "receive" })[] |
| `claimAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address payable"; `name`: `string` = "\_MechPartsTokenAddress"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "claimAllowlistClaimed"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] |
| `claimAfterglowAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address payable"; `name`: `string` = "\_MechPartsAfterglowTokenAddress"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "previousOwner"; `type`: `string` = "address" }[] ; `name`: `string` = "OwnershipTransferred"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = ""; `type`: `string` = "address" }[] ; `name`: `string` = "claimAllowlistClaimed"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] |
| `delegateAbi` | ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "vault"; `type`: `string` = "address" }[] ; `name`: `string` = "DelegateForAll"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "delegate"; `type`: `string` = "address" }[] ; `name`: `string` = "checkDelegateForAll"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "vault"; `type`: `string` = "address" }[] ; `name`: `string` = "getContractLevelDelegations"; `outputs`: { `components`: { `internalType`: `string` = "address"; `name`: `string` = "contract\_"; `type`: `string` = "address" }[] ; `internalType`: `string` = "struct IDelegationRegistry.ContractDelegation[]"; `name`: `string` = "contractDelegations"; `type`: `string` = "tuple[]" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] |
| `mechAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: ({ `components`: { `internalType`: `string` = "string"; `name`: `string` = "contractURI"; `type`: `string` = "string" }[] ; `internalType`: `string` = "struct IERC721Common.ERC721CommonConfig"; `name`: `string` = "config"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "address"; `name`: `string` = "tplOrigin\_"; `type`: `string` = "address" })[] ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "operator"; `type`: `string` = "address" }[] ; `name`: `string` = "OperatorNotAllowed"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "tokenId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "getMechOrigin"; `outputs`: { `components`: ({ `components`: ({ `components?`: `undefined` ; `internalType`: `string` = "uint256"; `name`: `string` = "partId"; `type`: `string` = "uint256" } \| { `components`: { `internalType`: `string` = "uint256"; `name`: `string` = "generation"; `type`: `string` = "uint256" }[] ; `internalType`: `string` = "struct ITPLRevealedParts.TokenData"; `name`: `string` = "data"; `type`: `string` = "tuple" })[] ; `internalType`: `string` = "struct ITPLMechOrigin.TPLPartOrigin[]"; `name`: `string` = "parts"; `type`: `string` = "tuple[]" } \| { `components?`: `undefined` ; `internalType`: `string` = "uint256"; `name`: `string` = "afterglow"; `type`: `string` = "uint256" })[] ; `internalType`: `string` = "struct ITPLMechOrigin.MechOrigin"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] |
| `mechAssemblerAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "tplRevealed"; `type`: `string` = "address" }[] ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "DelegationInactive"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "uint256"; `name`: `string` = "id"; `type`: `string` = "uint256" }[] ; `name`: `string` = "MechAssembly"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `name`: `string` = "engineIds"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] |
| `revealedAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: { `components`: { `internalType`: `string` = "string"; `name`: `string` = "contractURI"; `type`: `string` = "string" }[] ; `internalType`: `string` = "struct IERC721Common.ERC721CommonConfig"; `name`: `string` = "config"; `type`: `string` = "tuple" }[] ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name`: `string` = "ApprovalCallerNotOwnerNorApproved"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "error" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "tokenId"; `type`: `string` = "uint256" }[] ; `name`: `string` = "tokenMechaPartData"; `outputs`: { `components`: ({ `components`: { `internalType`: `string` = "uint256"; `name`: `string` = "style"; `type`: `string` = "uint256" }[] ; `internalType`: `string` = "struct ITPLRevealedParts.TokenStats"; `name`: `string` = "stats"; `type`: `string` = "tuple" } \| { `components?`: `undefined` ; `internalType`: `string` = "uint256"; `name`: `string` = "bodyPart"; `type`: `string` = "uint256" })[] ; `internalType`: `string` = "struct ITPLRevealedParts.TokenData"; `name`: `string` = ""; `type`: `string` = "tuple" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] |
| `unrevealedAbi` | ({ `anonymous?`: `undefined` = false; `inputs`: `never`[] = []; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "constructor" } \| { `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "ApprovalForAll"; `outputs?`: `undefined` ; `stateMutability?`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous?`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "account"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" } \| { `anonymous?`: `undefined` = false; `inputs?`: `undefined` ; `name?`: `undefined` = "autoApprovedOperators"; `outputs?`: `undefined` ; `stateMutability`: `string` = "payable"; `type`: `string` = "receive" })[] |

#### Defined in

[index.ts:42](https://github.com/MirrorWare-io/utils/blob/53ec5c0/index.ts#L42)

___

### ALL\_CB\_CONTRACTS\_ADDRESSES

• `Const` **ALL\_CB\_CONTRACTS\_ADDRESSES**: `string`[]

#### Defined in

[src/contracts.ts:43](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/contracts.ts#L43)

___

### AddressZero

• `Const` **AddressZero**: ``"0x0000000000000000000000000000000000000000"``

#### Defined in

[src/address.ts:6](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/address.ts#L6)

___

### SUPPORTED\_CHAIN\_IDS

• `Const` **SUPPORTED\_CHAIN\_IDS**: `number`[]

#### Defined in

[src/chains.ts:1](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/chains.ts#L1)

## Functions

### cleanAddress

▸ **cleanAddress**(`provider`, `addrOrENS?`): `Promise`<`undefined` \| ``null`` \| `string`\>

Method that gets anything (supports any string, including ENS names) and returns an ETH address or NULL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `Web3Provider` | web3 provider |
| `addrOrENS?` | ``null`` \| `string` | address or ENS name |

#### Returns

`Promise`<`undefined` \| ``null`` \| `string`\>

string or null

#### Defined in

[src/address.ts:26](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/address.ts#L26)

___

### getCbContractsByChainId

▸ **getCbContractsByChainId**(`chainId`): `Object`

Retrieves the contract addresses for the given chainId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` | number 1 or 5 or |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `afterGlowAddress` | `string` |
| `afterGlowClaimAddress` | `string` |
| `claimAddress` | `string` |
| `cyberBrokersAddress` | `string` |
| `delegateAddress` | `string` |
| `mechAddress` | `string` |
| `mechCrafter` | `string` |
| `revealedAddress` | `string` |
| `swapAddress` | `string` |
| `unrevealedAddress` | `string` |

#### Defined in

[src/contracts.ts:10](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/contracts.ts#L10)

___

### getContractsByChain

▸ **getContractsByChain**(`signer`): `Promise`<{ `afterGlowAddress`: `string` = "0x653271bb96969643Ba45F622D6113a6Cd8b06ae2"; `afterGlowClaimAddress`: `string` = "0xEf1e08Ad091c732C272D1C43C05a565c70dC3f98"; `claimAddress`: `string` = "0xb98d9C766BD779744F6D74AD68aF7654c8D97CE6"; `cyberBrokersAddress`: `string` = "0xd85CF2bcc04039318908aCCdAc0DBb9C4472D938"; `delegateAddress`: `string` = "0x00000000000076A84feF008CDAbe6409d2FE638B"; `mechAddress`: `string` = "0x0ccef3C248d10a54559684f024Df4c38bF7429e4"; `mechCrafter`: `string` = "0x1528d3216a35052683F8dB6990a59778c490f003"; `revealedAddress`: `string` = "0x97539A2A2125Ce3e80885Be35E2637D4280a5e8a"; `swapAddress`: `string` = "0xD3e169Be37f18C6997683ebCc498bfA61c3E09e1"; `unrevealedAddress`: `string` = "0xbc4e5766a79c9b105f5cadec0a7261c9c0b8c2d0" }\>

Gets object of all contracts given a signer (automatically detects chainId)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `Signer` | ethers signer |

#### Returns

`Promise`<{ `afterGlowAddress`: `string` = "0x653271bb96969643Ba45F622D6113a6Cd8b06ae2"; `afterGlowClaimAddress`: `string` = "0xEf1e08Ad091c732C272D1C43C05a565c70dC3f98"; `claimAddress`: `string` = "0xb98d9C766BD779744F6D74AD68aF7654c8D97CE6"; `cyberBrokersAddress`: `string` = "0xd85CF2bcc04039318908aCCdAc0DBb9C4472D938"; `delegateAddress`: `string` = "0x00000000000076A84feF008CDAbe6409d2FE638B"; `mechAddress`: `string` = "0x0ccef3C248d10a54559684f024Df4c38bF7429e4"; `mechCrafter`: `string` = "0x1528d3216a35052683F8dB6990a59778c490f003"; `revealedAddress`: `string` = "0x97539A2A2125Ce3e80885Be35E2637D4280a5e8a"; `swapAddress`: `string` = "0xD3e169Be37f18C6997683ebCc498bfA61c3E09e1"; `unrevealedAddress`: `string` = "0xbc4e5766a79c9b105f5cadec0a7261c9c0b8c2d0" }\>

object

#### Defined in

[src/contracts.ts:54](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/contracts.ts#L54)

___

### getDelegateContract

▸ **getDelegateContract**(`chainId`): `Contract`

Returns a ethers.Contract instance of the delegate contract
Needs

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Contract`

#### Defined in

[src/contracts.ts:71](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/contracts.ts#L71)

___

### getWalletFromDelegate

▸ **getWalletFromDelegate**(`chainId`, `address`): `Promise`<`delegateTuple`\>

Calls getDelegationsByDelegate to retrieve all vaults for a given delegate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` | chain Id |
| `address` | `string` | delegate address |

#### Returns

`Promise`<`delegateTuple`\>

tuple

#### Defined in

[src/contracts.ts:88](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/contracts.ts#L88)

___

### parseTokenId

▸ **parseTokenId**(`tokenId?`): `string`

Given a string, (eg: a hex token ID) returns a string token Id
eg: 0x1234 -> "4660"

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId?` | `string` |

#### Returns

`string`

string

#### Defined in

[src/helpers.ts:14](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/helpers.ts#L14)

___

### signTypedData

▸ **signTypedData**(`signer`, `typedData`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `typedData` | `Object` |
| `typedData.domain` | `any` |
| `typedData.message` | `string` |
| `typedData.types` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/helpers.ts:18](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/helpers.ts#L18)

___

### toHex

▸ **toHex**(`num`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

`string`

#### Defined in

[src/helpers.ts:3](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/helpers.ts#L3)

___

### truncateAddress

▸ **truncateAddress**(`address`): `string`

Returns a truncated version of an ETH address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | wallet to truncate |

#### Returns

`string`

truncated wallet

#### Defined in

[src/address.ts:13](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/address.ts#L13)

___

### web3ExtractErrorMessage

▸ **web3ExtractErrorMessage**(`e`): `string`

Function that attempts to read an error message from a etherjs error object to display an appropriate error message

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Object` |
| `e.code?` | `any` |
| `e.data?` | `Object` |
| `e.data.code?` | `any` |
| `e.data.data?` | `string` |
| `e.data.message?` | `string` |
| `e.message?` | `string` |

#### Returns

`string`

string

#### Defined in

[src/error.ts:6](https://github.com/MirrorWare-io/utils/blob/53ec5c0/src/error.ts#L6)
