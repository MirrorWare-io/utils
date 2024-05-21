import { BigNumber } from "ethers";

/** Per {@link https://github.com/ethereum/EIPs/blob/master/EIPS/eip-3085.md#parameters EIP-3085} */
export interface AddEthereumChainParameter {
	chainId: number;
	chainName: string;
	nativeCurrency: {
		name: string;
		symbol: string;
		decimals: 18;
	};
	rpcUrls: string[];
	blockExplorerUrls?: string[];
	iconUrls?: string[];
}

export type delegateTuple = [number, string, string, string, BigNumber][];
export type delegateV2Tuple = [number, string, string, string,string, BigNumber,BigNumber][];

// For partially nested objects
export type Subset<K> = {
    [attr in keyof K]?: K[attr] extends object
        ? Subset<K[attr]>
        : K[attr] extends object | null
        ? Subset<K[attr]> | null
        : K[attr] extends object | null | undefined
        ? Subset<K[attr]> | null | undefined
        : K[attr];
};