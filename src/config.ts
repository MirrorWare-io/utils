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
const values: Config = {
	infura: {
		key: process.env.NEXT_PUBLIC_INFURA_API_KEY || "",
	},
	alchemy: {
		goerli_key: process.env.GOERLI_ALCHEMY_KEY || "",
		sepolia_key: process.env.SEPOLIA_ALCHEMY_KEY || "",
		eth_key: process.env.ETH_ALCHEMY_KEY || "",
	},
};
/* @internal */
export default values;
