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
const values: Config & { setConfig: (config: Subset<Config>) => void; } = {
	setConfig: (config: Subset<Config>) => {
		Object.assign(values, config);
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
export default values;