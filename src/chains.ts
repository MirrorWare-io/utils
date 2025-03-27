/* @internal */
export const SUPPORTED_CHAIN_IDS = [1, 5, 8453, 84532]; // 1: mainnet, 5: goerli, 11155111: sepolia, 8453: base, 84532: baseSepolia
/* @internal */
export const ChainNames = ["eth", "goerli", "sepolia", "base", "baseSepolia"] as const;
/* @internal */
export type ChainNames = (typeof ChainNames)[number];
/* @internal */
export enum ChainEnum {
	ETH = 1,
	GOERLI = 5,
	SEPOLIA = 11155111,
	BASE = 8453,
	BASE_SEPOLIA = 84532,
}

/* @internal */
export const CHAINS: Record<ChainNames, ChainEnum> = {
	eth: ChainEnum.ETH,
	goerli: ChainEnum.GOERLI,
	sepolia: ChainEnum.SEPOLIA,
	base: ChainEnum.BASE,
	baseSepolia: ChainEnum.BASE_SEPOLIA,
};

/**
 * Parse a chain ID into a chain name such as "eth"
 * @param chainId: ID number of the chain
 * @returns name of the chain
 */
export const chainIDToName = (chainId: number): ChainNames => {
	return (Object.entries(CHAINS).find(([_, id]) => id === chainId)?.[0] || 'eth') as ChainNames;
}

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
		case "eth-mainnet":
			return ChainEnum.ETH;
		case "goerli":
				return ChainEnum.GOERLI;
		case "testnet":
		case "sepolia":
			return ChainEnum.SEPOLIA;
		case "base":
			return ChainEnum.BASE;
		case "baseSepolia":
		case "base-sepolia":
			return ChainEnum.BASE_SEPOLIA;
		default:
			return ChainEnum.ETH;
	}
};
