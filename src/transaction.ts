import { TransactionReceipt, TransactionResponse } from "ethers";
import { ChainEnum, chainIDToName } from "./chains";

type txError = {
	hash?: string;
	reason?: "repriced" | "cancelled" | "replaced";
	cancelled?: boolean;
	replacement?: TransactionResponse;
	receipt?: TransactionReceipt;
};
/**
 * A transaction helper method that attempts to wait for a transaction to be mined. Includes replaced or repriced transactions
 * @param {providers.TransactionResponse} transaction ethers providers.TransactionResponse Object
 * @returns TransactionReceipt
 * @internal
 */
export async function handleTransaction(transaction: TransactionResponse) {
	let tx;

	const awaitTransaction = async (trans: TransactionResponse):Promise<TransactionReceipt | null> => {
		let tx: TransactionReceipt | null;
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

	const name = chainIDToName(chainid);

	switch (name) {
		case 'base':
			return `https://basescan.org/tx/${hash}`;
		case 'baseSepolia':
			return `https://sepolia.basescan.org/tx/${hash}`;	
		default:
			return `https://${
				chainid == 5 ? "goerli." : chainid == ChainEnum.SEPOLIA ? "sepolia." : ""
			}etherscan.io/tx/${hash}`;
	}

}
