"use client"
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, goerli } from 'wagmi/chains'
import SendMoney from '../components/SendMoney'
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'
import { Anvil } from './Anvil'

import ConnectButton from '../components/ConnectButton'
import Account from '../components/Account'
// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, goerli, Anvil]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })
//todo parameterize value xddddd idk why this take me so long lol
export default function GridWallet() {
  const value = "vitalik.eth"
  return (
    <WagmiConfig config={wagmiConfig}>
        <SendMoney destination={value}/>
        <ConnectButton></ConnectButton>
        <Account></Account>
    </WagmiConfig>
  )
}