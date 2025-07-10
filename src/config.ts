import { ChainEnum } from "./chains";
import { Subset } from "./types";
export interface Config {
	infura: {
		key: string;
	};
	alchemy: {
		goerli_key: string;
		sepolia_key: string;
		eth_key: string;
		base_key: string;
	};
}

export const config: Config & { setConfig: (config: Subset<Config>) => void; } = {
	setConfig: (_config: Subset<Config>) => {
		Object.assign(config, _config);
	},
	infura: {
		key: "",
	},
	alchemy: {
		goerli_key: "",
		sepolia_key: "",
		eth_key: "",
		base_key: "",
	},
};


export const getKeyByChain = (chainId: ChainEnum) => {
		const key =
	config.infura.key || (chainId == ChainEnum.GOERLI ? config.alchemy.goerli_key : chainId == ChainEnum.SEPOLIA? config.alchemy.sepolia_key : ChainEnum.BASE_SEPOLIA? config.alchemy.base_key :ChainEnum.BASE?config.alchemy.base_key: config.alchemy.eth_key);

	return key
}