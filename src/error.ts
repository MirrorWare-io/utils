
/**
 * Function that attempts to read an error message from a etherjs error object to display an appropriate error message
 * @param e 
 * @returns string
 */
export const web3ExtractErrorMessage = (e: {
	code?: any;
	message?: string;
	data?: { code?: any; data?: string; message?: string };
}) => {
	if (!e.code) {
		return e.message || "Unknown error";
	}
	const error = Object.assign({}, e || {});
	switch (error.code) {
		case -32603:
			if (!!error.message?.startsWith("[ethjs-query] while formatting")) {
				error.data = {};
				try {
					const d = JSON.parse(
						error.message.substring(
							`[ethjs-query] while formatting outputs from RPC '`.length,
							error.message.length - 1,
						),
					);
					error.data.message = d.value?.data?.message;
				} catch {}
			}
			return error.data?.message || error.message || "Internal JSON-RPC Error";
		case 4001:
		case 4100:
			return error.data?.message || error.message || "User rejected the request";
		default:
			return error.data?.message || error.message || "Unknown error";
	}
};
