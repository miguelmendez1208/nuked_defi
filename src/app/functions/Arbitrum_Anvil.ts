import { Chain } from 'wagmi'
//this might be moved elsewhere
export const Arbitrum_Anvil = {
  id: 42161,
  name: 'Arbitrum_Anvil',
  network: 'Arbitrum_anvil',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://127.0.0.1:8545'] },
    default: { http: ['http://127.0.0.1:8545'] },
  },
} as const satisfies Chain
