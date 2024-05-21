import { BrowserProvider, isAddress, ZeroAddress } from "ethers";

/**
 * @type {string}
 */
export const AddressZero = ZeroAddress;

/**
 * Returns a truncated version of an ETH address
 * @param {string} address wallet to truncate
 * @returns truncated wallet
 */
export const truncateAddress = (address: string) => {
	if (!address) return "";
	const match = address.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/);
	if (!match) return address;
	return `${match[1]}…${match[2]}`;
};

/**
 * Method that gets anything (supports any string, including ENS names) and returns an ETH address or NULL
 * @param {BrowserProvider} provider web3 provider
 * @param {string} addrOrENS address or ENS name
 * @returns string or null
 */
export const cleanAddress = async (provider: BrowserProvider, addrOrENS?: string | null) => {
	if (!addrOrENS) {
		return null;
	}
	if (isAddress(addrOrENS)) {
		return addrOrENS;
	}
	if ((addrOrENS as string).match(/.eth$/)) {
		try {
			let addr = await provider.resolveName(addrOrENS);
			return addr;
		} catch (e) {
			console.error(e);
			return null;
		}
	}
};
