
/** Per {@link https://github.com/ethereum/EIPs/blob/master/EIPS/eip-3085.md#parameters EIP-3085} */
export interface AddEthereumChainParameter {
  chainId: number;
  chainName: string;
  nativeCurrency: {
      name: string;
      symbol: string;
      decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[];
}