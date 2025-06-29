import { Contract, Signer, BrowserProvider, JsonRpcProvider, AlchemyProvider, InfuraProvider } from "ethers";
import delegateAbi from "./abis/delegateAbi";
import {config} from "./config";
import { delegateTuple, delegateV2Tuple } from "./types";
import { ChainEnum } from "./chains";
import { ABIS } from "./abis";
import delegateV2 from "./abis/delegateV2";
/**
 * Retrieves the contract addresses for the given chainId
 * @param chainId number 1 or 5 or
 * @returns
 */
export function getCbContractsByChainId(chainId: number | ChainEnum) {
	if (chainId == 5) {
		//goerli
		return {
			cyberBrokersAddress: "0xd85CF2bcc04039318908aCCdAc0DBb9C4472D938",
			delegateAddress: "0x00000000000076A84feF008CDAbe6409d2FE638B",
			delegateV2Address: "0x00000000000000447e69651d841bD8D104Bed493",
			claimAddress: "0xb98d9C766BD779744F6D74AD68aF7654c8D97CE6",
			unrevealedAddress: "0xbc4e5766a79c9b105f5cadec0a7261c9c0b8c2d0", // Actual production "0xECFDe07BB7558BF7C882a5fB32300aFC868cE846",
			afterGlowAddress: "0x653271bb96969643Ba45F622D6113a6Cd8b06ae2", //"0x655e85d080592925492922F2616E2b52C1f40B7C",
			afterGlowClaimAddress: "0xEf1e08Ad091c732C272D1C43C05a565c70dC3f98",
			revealedAddress: "0x97539A2A2125Ce3e80885Be35E2637D4280a5e8a", //'0x0B4bF9CbF8A695c4f6329B03De2534Bd5861A7D9',
			swapAddress: "0xD3e169Be37f18C6997683ebCc498bfA61c3E09e1", //'0xa8abe01772747aa7b3a3d1e9c78a7fa9f3aebde6',
			mechAddress: "0x0ccef3C248d10a54559684f024Df4c38bF7429e4",
			mechCrafter: "0x1528d3216a35052683F8dB6990a59778c490f003",
			versionBetaClaim: "",
			cyberbrokersAccolades: "0xbf28d6Db1b70A30BBb29F3d6d5698c07937337a1",
			cyberbrokersAccoladesClaim: "0x24B4717ac5C0962b4D3f41765785b87C6DC50796",
			drifterBioCanvasAddress: "",
			drifterBioCanvasSaleAddress: "",
			drifterDNACardAddress: "",
			drifterDNACardSaleAddress: "",
			drifterDnaCardAllowlistAddress: "",
			drifterDNACardRevealAddress: "",
			drifterDNACardClaimAddress: "",
			drifterGearAddress:"",
			drifterGearClaim:"",
			drifterAddress: "",
		};
	} else if (chainId == ChainEnum.SEPOLIA) {

		return {
			cyberBrokersAddress: "",
			delegateAddress: "0x00000000000076A84feF008CDAbe6409d2FE638B",
			delegateV2Address: "0x00000000000000447e69651d841bD8D104Bed493",
			claimAddress: "",
			unrevealedAddress: "", 
			afterGlowAddress: "", //"",
			afterGlowClaimAddress: "",
			revealedAddress: "", //'',
			swapAddress: "", //'',
			mechAddress: "",
			mechCrafter: "",
			versionBetaClaim: "",
			cyberbrokersAccolades: "",
			cyberbrokersAccoladesClaim: "",
			drifterBioCanvasAddress: "",
			drifterBioCanvasSaleAddress: "",
			drifterDnaCardAllowlistAddress: "",
			drifterDNACardAddress: "",
			drifterDNACardSaleAddress: "",
			drifterDNACardRevealAddress: "",
			drifterDNACardClaimAddress: "",
			drifterGearAddress:"",
			drifterGearClaim:"",
			drifterAddress: "",
		}
	} else if (chainId == ChainEnum.BASE) {
		return {
			cyberBrokersAddress: "",
			delegateAddress: "0x00000000000076A84feF008CDAbe6409d2FE638B",
			delegateV2Address: "0x00000000000000447e69651d841bD8D104Bed493",
			claimAddress: "",
			unrevealedAddress: "", 
			afterGlowAddress: "", //"",
			afterGlowClaimAddress: "",
			revealedAddress: "", //'',
			swapAddress: "", //'',
			mechAddress: "",
			mechCrafter: "",
			versionBetaClaim: "",
			cyberbrokersAccolades: "",
			cyberbrokersAccoladesClaim: "",
			drifterBioCanvasAddress: "0x3096ab8FE1000185491629e0488F4038bDA09cC9",
			drifterBioCanvasSaleAddress: "0xc2957001277eB0803754541330c44F98e53B3C67",
			drifterDnaCardAllowlistAddress: "0xD5042b342a0B33DfABE2e5e34EbF498AAE71f760",
			drifterDNACardAddress: "0x9FfAf75645C17132Cd12D3044C8cBb52d34677B9",
			drifterDNACardSaleAddress: "0xe4209038917e964ef44aD62824396CF245346865",
			drifterDNACardRevealAddress: "0x744b315Ac6D646Be104331dDFF85171db596C4C2",
			drifterDNACardClaimAddress: "0x94412724bF19dfe45681A8D763d2AFDcf86ba976",
			drifterGearAddress:"0x5d46722d55B4c469776AD937ef43268192184CA0",
			drifterGearClaim:"0xB9Ca6D132D0EB46c3a18f1857Bd8EC735cE1741C",
			drifterAddress: "0x435ABB165C93aba7D4AC2250839337663BaB3833",
		}
	}  else if (chainId == ChainEnum.BASE_SEPOLIA) {
		return {
			cyberBrokersAddress: "",
			delegateAddress: "0x00000000000076A84feF008CDAbe6409d2FE638B",
			delegateV2Address: "0x00000000000000447e69651d841bD8D104Bed493",
			claimAddress: "",
			unrevealedAddress: "", 
			afterGlowAddress: "", //"",
			afterGlowClaimAddress: "",
			revealedAddress: "", //'',
			swapAddress: "", //'',
			mechAddress: "",
			mechCrafter: "",
			versionBetaClaim: "",
			cyberbrokersAccolades: "",
			cyberbrokersAccoladesClaim: "",
			drifterBioCanvasAddress: "0x76aB63517794F05e7BbB5e3D91077245DEaaaE99",
			drifterBioCanvasSaleAddress: "0xd6f69726Cb6FFEf07a5101Bb12BD9dD07120fbcc",
			drifterDnaCardAllowlistAddress: "0x6225764a7ec0F271c8C632c5Ca4BEdC2de48dc1F",
			drifterDNACardAddress: "0xACaec40833B50BcA9a203ce3316936D35e55CD2b",
			drifterDNACardSaleAddress: "0xEee57B28Badc797bEC5D83eC444062F22536B079",
			drifterDNACardRevealAddress: "0x0978F9AFE5f11217C2e038b5715423A4b81fCf6d",
			drifterDNACardClaimAddress: "0x69584a5c5E569177dd9f142cD53a613171AE0D8d",
			drifterGearAddress: "0x36f74A545A23749D159F3D5600842bE7D9280770",
			drifterGearClaim:"0x4eE8cbc481D64f7E0b6E563f5220183a1A89911b",
			drifterAddress: "0xC475846f2FB025c858adcBBEB4756771074A1860",
		}
	}else {
		// eth network by default
		return {
			cyberBrokersAddress: "0x892848074ddeA461A15f337250Da3ce55580CA85",
			delegateAddress: "0x00000000000076A84feF008CDAbe6409d2FE638B",
			delegateV2Address: "0x00000000000000447e69651d841bD8D104Bed493",
			claimAddress: "0xa6B750fbb80FFDB9e77458466562a4c5627877ba",
			unrevealedAddress: "0xf4baCB2375654Ef2459f427C8c6cF34573f75154",
			afterGlowAddress: "0xa47FB7c4eDd3475CE66F49a66b9bf1edbc61e52d",
			revealedAddress: "0x7bC1e07cdFA283db7cF3C680D16ca7F161a64046", // Add mainnet REVEALED address
			swapAddress: "0xC963c2F8F9Bf25341DeFab8b729Af651dA794008", // Add mainnet SWAP address
			afterGlowClaimAddress: "0xB6bF34FA8625b8119D2105161741D56e6B42Af29",
			mechAddress: "0xb286ac8EFf9F44e2C377c6770CAd5Fc78BFf9eD6",
			mechCrafter: "0xcaaAbC37c3056D8be7Ab8Be9749026b9a757d2c0",
			versionBetaClaim: "0xC770dC511953265372840293a63Aa67AF631f3a3",
			cyberbrokersAccolades: "0x2310C58d808c4F7Be4C4982518Ab65d4e4505654",
			cyberbrokersAccoladesClaim: "0x4b656aE2394116E084B0D28B34C47CC8052C2C45",
			drifterBioCanvasAddress: "",
			drifterBioCanvasSaleAddress: "",
			drifterDNACardAddress: "",
			drifterDNACardSaleAddress: "",
			drifterDNACardRevealAddress: "",
			drifterDnaCardAllowlistAddress: "",
			drifterDNACardClaimAddress: "",
			drifterGearAddress:"",
			drifterGearClaim:"",
			drifterAddress: "",
		};
	}
}

/* @internal */
export const ALL_CB_CONTRACTS_ADDRESSES = [
	...Object.values(getCbContractsByChainId(5)),
	...Object.values(getCbContractsByChainId(1)),
];

/**
 * Gets object of all contracts given a signer (automatically detects chainId)
 * @param signer ethers signer
 * @returns object
 * @internal
 */
export const getContractsByChain = async (signer: Signer) => {
	let chain = await signer.provider?.getNetwork()
	const id = chain?.chainId
	return getCbContractsByChainId(Number(id));
};

/**
 * Get ABI by the contract Address
 * @param signer ethers signer
 * @returns object
 * @internal
 */
export const getABIByAddress = (address:string) => {
	const ethAddresses = getCbContractsByChainId(1);
	const goerliAddresses = getCbContractsByChainId(5);
	const baseAddresses = getCbContractsByChainId(ChainEnum.BASE);
	const baseSepoliaAddresses = getCbContractsByChainId(ChainEnum.BASE_SEPOLIA);
	
	switch (address.toLowerCase()) {
		/* Mechs */
		case ethAddresses.mechAddress.toLowerCase():
		case goerliAddresses.mechAddress.toLowerCase():
			return ABIS.mechAbi;
		/* Mech Assembler */
		case ethAddresses.mechCrafter.toLowerCase():
		case goerliAddresses.mechCrafter.toLowerCase():
			return ABIS.mechAssemblerAbi;
		/* CyberBrokers */
		case ethAddresses.cyberBrokersAddress.toLowerCase():
		case goerliAddresses.cyberBrokersAddress.toLowerCase():
			return ABIS.cyberbrokersAbi;
		/* Accolades */
		case ethAddresses.cyberbrokersAccolades.toLowerCase():
		case goerliAddresses.cyberbrokersAccolades.toLowerCase():
			return ABIS.accoladeAbi;
		/* Accolades Claim */
		case ethAddresses.cyberbrokersAccoladesClaim.toLowerCase():
		case goerliAddresses.cyberbrokersAccoladesClaim.toLowerCase():
			return ABIS.accoladeClaimAbi;
		/* Claim */
		case ethAddresses.claimAddress.toLowerCase():
		case goerliAddresses.claimAddress.toLowerCase():
			return ABIS.claimAbi;
		/* Afterglow */
		case ethAddresses.afterGlowAddress.toLowerCase():
		case goerliAddresses.afterGlowAddress.toLowerCase():
			return ABIS.afterglowAbi;
		/* Afterglow Claim */
		case ethAddresses.afterGlowClaimAddress.toLowerCase():
		case goerliAddresses.afterGlowClaimAddress.toLowerCase():
			return ABIS.claimAfterglowAbi;
		/* Revealed parts */
		case ethAddresses.revealedAddress.toLowerCase():
		case goerliAddresses.revealedAddress.toLowerCase():
			return ABIS.revealedAbi;
		/* Unrevealed parts */
		case ethAddresses.unrevealedAddress.toLowerCase():
		case goerliAddresses.unrevealedAddress.toLowerCase():
			return ABIS.unrevealedAbi;
		/* Delegate */
		case ethAddresses.delegateAddress.toLowerCase():
		case goerliAddresses.delegateAddress.toLowerCase():
			return ABIS.delegateAbi;
		/* Delegate V2 */
		case ethAddresses.delegateV2Address.toLowerCase():
		case goerliAddresses.delegateV2Address.toLowerCase():
			return ABIS.delegateV2Abi;
		/* Drifter DNA Card */
		case baseAddresses.drifterDNACardAddress.toLowerCase():
		case baseSepoliaAddresses.drifterDNACardAddress.toLowerCase():
			return ABIS.dnaCardAbi;
		/* Drifter Bio Canvas */
		case baseAddresses.drifterBioCanvasAddress.toLowerCase():
		case baseSepoliaAddresses.drifterBioCanvasAddress.toLowerCase():
			return ABIS.bioCanvasAbi;
		/* Drifter DNA card Sale Contract */
		case baseAddresses.drifterDNACardSaleAddress.toLowerCase():
		case baseSepoliaAddresses.drifterDNACardSaleAddress.toLowerCase():
			return ABIS.dnaCardSaleAbi;
		/* Drifter DNA card Reveal Contract */
		case baseAddresses.drifterDNACardRevealAddress.toLowerCase():
		case baseSepoliaAddresses.drifterDNACardRevealAddress.toLowerCase():
			return ABIS.dnaCardRevealAbi;
		/* Drifter DNA card Opened Contract */
		case baseAddresses.drifterDNACardClaimAddress.toLowerCase():
		case baseSepoliaAddresses.drifterDNACardClaimAddress.toLowerCase():
			return ABIS.drifterDnaCardClaimAbi;
		/* Drifter Gear Contract */
		case baseAddresses.drifterGearAddress.toLowerCase():
		case baseSepoliaAddresses.drifterGearAddress.toLowerCase():
			return ABIS.drifterGearAbi;
		/* Drifter Gear Claim Contract */
		case baseAddresses.drifterGearClaim.toLowerCase():
		case baseSepoliaAddresses.drifterGearClaim.toLowerCase():
			return ABIS.drifterGearClaimAbi;
		/* Drifter  Contract */
		case baseAddresses.drifterAddress.toLowerCase():
		case baseSepoliaAddresses.drifterAddress.toLowerCase():
			return ABIS.drifterAbi;
		/* Drifter  Contract */
		case baseAddresses.drifterDnaCardAllowlistAddress.toLowerCase():
		case baseSepoliaAddresses.drifterDnaCardAllowlistAddress.toLowerCase():
			return ABIS.drifterDnaCardALlowListAbis;
		default:
			return null
	}
};

/**
 * ==================== Delegate cash contract START ====
 *
 */
/**
 * Returns a ethers.Contract instance of the delegate contract
 * make sure you call "config.setConfig" before calling this function
 * @param chainId number or ChainEnum
 * @returns ethers.Contract instance
 * @internal
 */
export function getDelegateContract(chainId: number | ChainEnum) {
	const key =
	config.infura.key || (chainId == 5 ? config.alchemy.goerli_key : chainId == 11155111? config.alchemy.sepolia_key : config.alchemy.eth_key);
	if (!key) throw new Error("getDelegateContract: Please set alchemy.goerli_key, sepolia_key or/and alchemy.eth_key in configs. Chain : "+ chainId);
	const ProviderClass = config.infura.key ? InfuraProvider : AlchemyProvider;
	if (!ProviderClass) throw new Error("getDelegateContract: No provider found");
	const provider = new ProviderClass(chainId, key);
	const addresses = getCbContractsByChainId(chainId);
	return new Contract(addresses.delegateAddress, delegateAbi, provider);
}

/**
 * Returns a ethers.Contract instance of the delegate V2 contract
 * make sure you call "config.setConfig" before calling this function
 * @param chainId number or ChainEnum
 * @returns ethers.Contract instance
 * @internal
 */
export function getDelegateV2Contract(chainId: number | ChainEnum) {
	const key =
		config.infura.key || (chainId == 5 ? config.alchemy.goerli_key : chainId == 11155111? config.alchemy.sepolia_key : config.alchemy.eth_key);
	if (!key) throw new Error("getDelegateContract: Please set alchemy.goerli_key, sepolia_key or/and alchemy.eth_key in configs. Chain : "+ chainId);;
	const ProviderClass = config.infura.key ? InfuraProvider : AlchemyProvider;
	if (!ProviderClass) throw new Error("getDelegateContract: No provider found");
	const provider = new ProviderClass(chainId, key);
	const addresses = getCbContractsByChainId(chainId);
	return new Contract(addresses.delegateV2Address, delegateV2, provider);
}

/**
 * Returns a ethers.Contract instance of the delegate V2 contract
 * make sure you call "config.setConfig" before calling this function
 * @param chainId number or ChainEnum
 * @returns ethers.Contract instance
 */
export async function getDelegateV2ContractWithProvider(provider: JsonRpcProvider|BrowserProvider,chainId?: number | ChainEnum) {
	if(!chainId){
		chainId = Number((await provider.getNetwork()).chainId);
	}
	const addresses = getCbContractsByChainId(chainId);
	return new Contract(addresses.delegateAddress, delegateAbi, provider);
}

export async function getDelegateContractWithProvider(provider: JsonRpcProvider|BrowserProvider,chainId?: number | ChainEnum) {
	if(!chainId){
		chainId = Number((await provider.getNetwork()).chainId);
	}
	const addresses = getCbContractsByChainId(chainId);
	return new Contract(addresses.delegateAddress, delegateAbi, provider);
}

/**
 * Calls getDelegationsByDelegate to retrieve all vaults for a given delegate
 * @param chainId chain Id - only necessary if provider is not provided
 * @param provider ethers provider, optional;
 * @param address delegate address
 * @returns tuple
 */
export async function getWalletFromDelegate(address: string, provider?:JsonRpcProvider|BrowserProvider,chainId: number | ChainEnum=1) {
	const contract = provider?await getDelegateContractWithProvider(provider):getDelegateContract(chainId);
	let tuples: delegateTuple;
	try {
		tuples = await contract.getDelegationsByDelegate(address);
	} catch (e) {
		console.debug(e?.toString ? e.toString() : e);
		return [];
	}

	// const filtered = tuples.filter((tuple) => tuple[0] == 1) // only get vaults for "DelegateForAll" type
	return tuples;
}

/**
 * Calls getDelegationsByDelegateV2 to retrieve all vaults for a given delegate V2
 * @param chainId chain Id - only necessary if provider is not provided
 * @param provider ethers provider, optional;
 * @param address delegate address
 * @returns tuple
 */
export async function getWalletFromDelegateV2(address: string, provider?:JsonRpcProvider|BrowserProvider,chainId: number | ChainEnum=1) {
	const contract = provider?await getDelegateV2ContractWithProvider(provider):getDelegateV2Contract(chainId);
	let tuples: delegateV2Tuple;
	try {
		tuples = await contract.getIncomingDelegations(address);
	} catch (e) {
		console.debug(e?.toString ? e.toString() : e);
		return [];
	}

	// const filtered = tuples.filter((tuple) => tuple[0] == 1) // only get vaults for "DelegateForAll" type
	return tuples;
}

/**
 * Calls getDelegationsByDelegateV2 AND V1 to retrieve all vaults for a given delegate;
 * @param chainId chain Id - only necessary if provider is not provided
 * @param provider ethers provider, optional;
 * @param address delegate address
 * @returns tuple
 */
export async function getWalletFromALLDelegates(address: string, provider?:JsonRpcProvider|BrowserProvider,chainId: number | ChainEnum=1) {
	const contract = provider?await getDelegateV2ContractWithProvider(provider):getDelegateV2Contract(chainId);
	let tuples: delegateV2Tuple = []!;
	try {
		tuples = await contract.getIncomingDelegations(address);
	} catch (e) {
		console.debug(e?.toString ? e.toString() : e);
	}

	const contractV1 = provider?await getDelegateContractWithProvider(provider):getDelegateContract(chainId);
	let tuplesV1: delegateTuple = []!;
	try {
		tuplesV1 = await contractV1.getDelegationsByDelegate(address);
	} catch (e) {
		console.debug(e?.toString ? e.toString() : e);
	}

	// convert tuples to json for easier handling
	const json = [] as {
		version: "v1" | "v2";
		type: number;
		delegate: string;
		vault: string;
		rights: string;
		contract: string;
		tokenId: BigInt;
		amount: BigInt;
	}[]

/**
 *     struct Delegation V2 {
        DelegationType type_;
        address to;
        address from;
        bytes32 rights;
        address contract_;
        uint256 tokenId;
        uint256 amount;
    }
 */
	tuples.forEach((tuple) => {
		const [type, delegate, vault, rights, contract, tokenId, amount] = tuple;
		json.push({ version:"v2", type, delegate, vault, rights, contract, tokenId, amount });
	});

	/**
	 *     struct DelegationInfo {
        DelegationType type_;
        address vault;
        address delegate;
        address contract_;
        uint256 tokenId;
    }
	 */

	tuplesV1.forEach((tuple) => {
		const [type, vault,delegate, contract_, tokenId] = tuple;
		json.push({ version:"v1",type, delegate, vault, contract:contract_, tokenId, rights:"0x0000000000000000000000000000000000000000000000000000000000000000", amount: BigInt(0) });
	});
	return json;
}
/**
 * ==================== Delegate cash contract END ====
 *
 */
/**
 * Returns a ethers.Contract instance for the given address; provider is not signed;
 * make sure you call "config.setConfig" before calling this function
 * @param chainId number or ChainEnum
 * @param address address
 * @returns ethers.Contract instance
 * @internal
 */
export function getContractForAddress(chainId: number | ChainEnum, address: string) {
	const key =
	config.infura.key || (chainId == 5 ? config.alchemy.goerli_key : chainId == 11155111? config.alchemy.sepolia_key : config.alchemy.eth_key);

	if (!key) throw new Error("getContractForAddress: please set alchemy.goerli_key, sepolia_key or/and alchemy.eth_key in configs. Chain : "+ chainId);
	const ProviderClass = config.infura.key ? InfuraProvider : AlchemyProvider;
	if (!ProviderClass) throw new Error("getContractForAddress: No provider found");
	const provider = new ProviderClass(chainId, key);
	const ABI = getABIByAddress(address);
	if(!ABI) throw new Error("getContractForAddress: No ABI found for address");
	return new Contract(address, ABI, provider);
}