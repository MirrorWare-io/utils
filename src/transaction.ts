import { providers } from "ethers";

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
