import { Subset } from "./types";
export interface Config {
	infura: {
		key: string;
	};
	alchemy: {
		goerli_key: string;
		sepolia_key: string;
		eth_key: string;
	};
}

const config: Config & { setConfig: (config: Subset<Config>) => void; } = {
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
	},
};

export default config;