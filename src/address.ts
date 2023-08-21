import {providers,utils,constants} from 'ethers'

export const AddressZero = constants.AddressZero

export const truncateAddress = (address: any) => {
	if (!address) return "No Account";
	const match = address.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/);
	if (!match) return address;
	return `${match[1]}…${match[2]}`;
};

/**
 * Method that gets anything (supports any string, including ENS names) and returns an ETH address or NULL
 * @param provider
 * @param addrOrENS
 * @returns
 */
export const cleanAddress = async (
	provider: providers.Web3Provider,
	addrOrENS?: string | null,
) => {
	if (!addrOrENS) {
		return null;
	}
	if (utils.isAddress(addrOrENS)) {
		return addrOrENS;
	}
	if (addrOrENS.match(/.eth$/)) {
		try {
			let addr = await provider.resolveName(addrOrENS);
			return addr;
		} catch (e) {
			console.error(e);
			return null;
		}
	}
};