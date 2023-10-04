"use client"
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

import  Account from '../components/Account'
import ConnectButton from '../components/ConnectButton';
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function Wallet() {
  return (
    <WagmiConfig config={wagmiConfig}>
        <Account/>
        <ConnectButton/>
    </WagmiConfig>
  )
}