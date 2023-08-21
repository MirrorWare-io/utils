import { Contract, Signer, providers } from "ethers";
import delegateAbi from './abis/delegateAbi'
import config from "./config";
/**
 * Retrieves the contract addresses for the given chainId
 * @param chainId number 1 or 5 or 
 * @returns 
 */
export function getCbContractsByChainId(chainId: number) {
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
		};
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
 * ==================== Delegate cash contract START ====
 * 
 */
/**
 * Returns a ethers.Contract instance of the delegate contract
 * Needs 
 * @param chainId 
 * @returns 
 * @internal
 */
export function getDelegateContract(chainId: number) {
    const key = config.infura.key || (chainId == 5? config.alchemy.goerli_key : config.alchemy.eth_key)
    if(!key) throw new Error('getDelegateContract: No key found in envs.')
    const ProviderClass = config.infura.key? providers.InfuraProvider : providers.AlchemyProvider
    if(!ProviderClass) throw new Error('getDelegateContract: No provider found')
	const provider = new ProviderClass(
		chainId,
		key,
	);
	const addresses = getCbContractsByChainId(chainId);
	return new Contract(addresses.delegateAddress, delegateAbi, provider);
}
/**
 * Calls getDelegationsByDelegate to retrieve all vaults for a given delegate
 * @param chainId chain Id
 * @param address delegate address
 * @returns tuple
 * @internal
 */
export async function getWalletFromDelegate(chainId: number, address: string) {
	const contract = getDelegateContract(chainId);
	return await contract.getDelegationsByDelegate(address);
}
