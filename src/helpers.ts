import { Signer } from "ethers";


export const toHex = (num: any) => {
	const val = Number(num);
	return "0x" + val.toString(16);
};

/**
 * Given a string, (eg: a hex token ID) returns a string token Id
 * eg: 0x1234 -> "4660"
 * @param tokenId 
 * @returns string
 */
export const parseTokenId = (tokenId?: string) => {
	return tokenId ? (tokenId.startsWith("0x") ? parseInt(tokenId, 16).toString() : tokenId) : "";
};


export async function signTypedData(signer: Signer, typedData: {domain: any, types: any, message: string}) {
	try {
		const signature = await (signer as any)._signTypedData(
			typedData.domain,
			typedData.types,
			typedData.message,
		);
		return signature;
	} catch (e) {
		console.error(e);
		return null;
	}
}