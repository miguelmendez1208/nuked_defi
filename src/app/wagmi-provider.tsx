"use client"

import { createWeb3Modal, defaultWagmiConfig, useWeb3ModalTheme } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, goerli, optimism } from 'wagmi/chains'
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'
import { Anvil } from './functions/Anvil'
import ThemeProvider from './theme-provider'
import { Arbitrum_Anvil } from './functions/Arbitrum_Anvil'
// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
//temporarily riding of mainnet arbitrum
export const chains = [mainnet, arbitrum, goerli, optimism]
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
    wagmiConfig, projectId, chains, themeMode: 'light',
    themeVariables: {
        '--w3m-color-mix': '#00DCFF',
        '--w3m-color-mix-strength': 20
    }
})
//I should look up the theme variables, also maybe properly type the children?
//it would be a react node aka jsx element
export default function WagmiWallet({ children }: any) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </WagmiConfig>
    )
}