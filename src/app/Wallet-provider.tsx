"use client"
import { createWeb3Modal, defaultWagmiConfig, useWeb3ModalTheme } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, goerli } from 'wagmi/chains'
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'
import { Anvil } from './dashboard/Anvil'
import ThemeProvider from './theme-provider'
import { Arbitrum_Anvil } from './dashboard/Arbitrum_Anvil'
// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}
//temporarily riding of mainnet arbitrum
const chains = [mainnet, arbitrum, goerli, Anvil, Arbitrum_Anvil]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
    wagmiConfig, projectId, chains, themeMode: 'light',
    themeVariables: {
        '--w3m-color-mix': '#00DCFF',
        '--w3m-color-mix-strength': 20
    }
})

export default function GridWallet({ children }: any) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </WagmiConfig>
    )
}