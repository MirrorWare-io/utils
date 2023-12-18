import { Subset } from "./types";
interface Config {
	infura: {
		key: string;
	};
	alchemy: {
		goerli_key: string;
		sepolia_key: string;
		eth_key: string;
	};
}
/* @internal */
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
/* @internal */
export default config;