import { Contract, Signer, providers } from "ethers";
import delegateAbi from "./abis/delegateAbi";
import config from "./config";
import { delegateTuple } from "./types";
import { ChainEnum } from "./chains";
import { ABIS } from "./abis";
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
		};
	} else if (chainId == ChainEnum.SEPOLIA) {
		throw new Error("Sepolia chain not supported yet");
	} else {
		// eth network by default
		return {
			cyberBrokersAddress: "0x892848074ddeA461A15f337250Da3ce55580CA85",
			delegateAddress: "0x00000000000076A84feF008CDAbe6409d2FE638B",
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
	let chain = await signer.getChainId();

	return getCbContractsByChainId(chain);
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
		config.infura.key || (chainId == 5 ? config.alchemy.goerli_key : config.alchemy.eth_key);
	if (!key) throw new Error("getDelegateContract: Please set alchemy.goerli_key or/and alchemy.eth_key in configs.");
	const ProviderClass = config.infura.key ? providers.InfuraProvider : providers.AlchemyProvider;
	if (!ProviderClass) throw new Error("getDelegateContract: No provider found");
	const provider = new ProviderClass(chainId, key);
	const addresses = getCbContractsByChainId(chainId);
	return new Contract(addresses.delegateAddress, delegateAbi, provider);
}
/**
 * Calls getDelegationsByDelegate to retrieve all vaults for a given delegate
 * @param chainId chain Id
 * @param address delegate address
 * @returns tuple
 */
export async function getWalletFromDelegate(chainId: number | ChainEnum, address: string) {
	const contract = getDelegateContract(chainId);
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
 * ==================== Delegate cash contract START ====
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
		config.infura.key || (chainId == 5 ? config.alchemy.goerli_key : config.alchemy.eth_key);
	if (!key) throw new Error("getContractForAddress: please set alchemy.goerli_key or/and alchemy.eth_key in configs.");
	const ProviderClass = config.infura.key ? providers.InfuraProvider : providers.AlchemyProvider;
	if (!ProviderClass) throw new Error("getContractForAddress: No provider found");
	const provider = new ProviderClass(chainId, key);
	const ABI = getABIByAddress(address);
	if(!ABI) throw new Error("getContractForAddress: No ABI found for address");
	return new Contract(address, ABI, provider);
}