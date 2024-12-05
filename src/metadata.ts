import { getCbContractsByChainId, getContractForAddress } from "./contracts";
import cbMetadataJson from "../cb_metadata.json";
import { afterglowByTokenId } from "./data/afterglow";
import { unrevealedByTokenId } from "./data/unrevealed";
import { fetchURI } from "./helpers";
import { ChainEnum, chainIDToName } from "./chains";

/**
 * Returns the URI for the metadata of a given contract; replace % with the token ID;
 * @param chainId
 * @param contractAddress
 * @returns
 */
export const metadataURIByAddress = (contractAddress: string, chainId: number = 1) => {
	const chain = chainIDToName(chainId);
	const baseURI = `https://m.cyberbrokers.com/${chain}`;

	const ethAddresses = getCbContractsByChainId(ChainEnum.ETH);
	const goerliAddresses = getCbContractsByChainId(ChainEnum.GOERLI);
	const baseAddresses = getCbContractsByChainId(ChainEnum.BASE);
	const baseSepoliaAddresses = getCbContractsByChainId(ChainEnum.BASE_SEPOLIA);
	switch (contractAddress.toLowerCase()) {
		case ethAddresses.cyberBrokersAddress.toLowerCase():
		case goerliAddresses.cyberBrokersAddress.toLowerCase():
			return "util:/cyberbrokers";
		case ethAddresses.afterGlowAddress.toLowerCase():
		case goerliAddresses.afterGlowAddress.toLowerCase():
			return "util:/afterglow";
		case ethAddresses.unrevealedAddress.toLowerCase():
		case goerliAddresses.unrevealedAddress.toLowerCase():
			return "util:/unrevealed";
		case ethAddresses.mechAddress.toLowerCase():
		case goerliAddresses.mechAddress.toLowerCase():
			return `${baseURI}/mech/%`;
		case ethAddresses.revealedAddress.toLowerCase():
		case goerliAddresses.revealedAddress.toLowerCase():
			return `${baseURI}/part/%`;
		case baseAddresses.drifterBioCanvasAddress.toLowerCase():
		case baseSepoliaAddresses.drifterBioCanvasAddress.toLowerCase():
			return `${baseURI}/biocanvas/%`;
		case baseAddresses.drifterDNACardAddress.toLowerCase():
		case baseSepoliaAddresses.drifterDNACardAddress.toLowerCase():
			return `${baseURI}/dnaCard/%`;
		default:
			return null;
	}
};

/**
 * Returns the metadata for the given NFTs of a contract;
 * @param chainId 1 or 5 for mainnet or goerli
 * @param contractAddress
 * @param tokenIds string[]
 * @returns
 */
export const getMetadataForNFTs = async (
	contractAddress: string,
	tokenIds: string[],
	chainId: number = 1,
) => {
	const metadata = await Promise.all(
		tokenIds
			.map( async tokenId => {
				let uri = metadataURIByAddress(contractAddress, chainId);
				if (!uri)
					return {
						tokenId: tokenId,
						error: `Could not fetch metadata for ${contractAddress}: no URI found`,
					};
				if (uri.startsWith("util:")) {
					// Handle internal metadata; usually immutable metadata
					switch (uri) {
						case "util:/cyberbrokers":
							return (cbMetadataJson as Record<string, any>[]).find(x => x.tokenId == tokenId);
						case "util:/afterglow":
							return afterglowByTokenId(Number(tokenId));
						case "util:/unrevealed":
							return unrevealedByTokenId(Number(tokenId));
						default:
							return undefined;
					}
				}
				// Handle external metadata;
				uri = uri.replace("%", tokenId);
				const json = await fetchURI(uri);
                if('success' in json && !json.success) {
                    return {error: `Could not fetch metadata for ${contractAddress}:${chainId} id:${tokenId} -> success:false` }
                }
				return json || { tokenId: tokenId, error: `Could not fetch metadata for ${contractAddress}:${chainId} id:${tokenId}` };
			})
			.filter(x => !!x),
	);
	return metadata as Record<string, any>[];
};

export default getMetadataForNFTs;
