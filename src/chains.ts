/* @internal */
export const SUPPORTED_CHAIN_IDS = [1, 5]; // 1: mainnet, 5: goerli, 11155111: sepolia
/* @internal */
export const ChainNames = ["eth", "goerli", "sepolia"] as const;
/* @internal */
export type ChainNames = (typeof ChainNames)[number];
/* @internal */
export enum ChainEnum {
	ETH = 1,
	GOERLI = 5,
	SEPOLIA = 11155111,
}

/* @internal */
export const CHAINS: Record<ChainNames, ChainEnum> = {
	eth: ChainEnum.ETH,
	goerli: ChainEnum.GOERLI,
	sepolia: ChainEnum.SEPOLIA,
};

/**
 * Parse a chain name such as "eth" and return its chain ID as number
 * @param chain 'eth' or 'goerli' or any string;
 * @returns number of the chain
 */
export const parseChain = (chain: string): ChainEnum | number => {
	switch (chain) {
		case "eth":
		case "mainnet":
		case "ethereum":
		case "homestead":
			return ChainEnum.ETH;
		case "goerli":
		case "testnet":
			return ChainEnum.GOERLI;
		default:
			return ChainEnum.ETH;
	}
};
