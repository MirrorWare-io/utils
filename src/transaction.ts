import { providers } from "ethers";
import { ChainEnum } from "./chains";

type txError = {
	hash?: string;
	reason?: "repriced" | "cancelled" | "replaced";
	cancelled?: boolean;
	replacement?: providers.TransactionResponse;
	receipt?: providers.TransactionReceipt;
};
/**
 * A transaction helper method that attempts to wait for a transaction to be mined. Includes replaced or repriced transactions
 * @param {providers.TransactionResponse} transaction ethers providers.TransactionResponse Object
 * @returns TransactionReceipt
 * @internal
 */
export async function handleTransaction(transaction: providers.TransactionResponse) {
	let tx;

	const awaitTransaction = async (trans: providers.TransactionResponse) => {
		let tx: providers.TransactionReceipt;
		try {
			tx = await trans.wait(1);
		} catch (error: any) {
			const e = error as txError;
			// @see https://docs.io/v5/api/providers/types/#providers-TransactionResponse
			if ((e.reason == "replaced" || e.reason == "repriced") && e.replacement) {
				tx = await awaitTransaction(e.replacement);
			} else if (e.reason == "cancelled") {
				throw new Error("Transaction cancelled");
			} else {
				throw new Error(e.reason || e?.toString());
			}
		}
		return tx;
	};

	tx = await awaitTransaction(transaction);

	return tx;
}

/**
 * Returns a URL to etherscan for a given chain and transaction hash
 * @param chainid a chain ID or ChainEnum;
 * @param hash the transaction hash
 * @returns A URL to etherscan for a given chain and transaction hash
 */
export function explorerLink(chainid: number | ChainEnum, hash: string) {
	return `https://${
		chainid == 5 ? "goerli." : chainid == ChainEnum.SEPOLIA ? "sepolia." : ""
	}etherscan.io/tx/${hash}`;
}
