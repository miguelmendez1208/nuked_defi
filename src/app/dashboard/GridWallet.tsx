"use client"
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, goerli } from 'wagmi/chains'
import SendMoney from '../components/SendMoney'
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'
import { Anvil } from './Anvil'

import ConnectButton from '../components/ConnectButton'
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

interface SendMoneyProps {
  propParameter: string;
}

//this probably should be put somewhere else. This is using react context.
//so you probably dont need to pass the prop parameter around

export default function GridWallet({ propParameter = "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110" }: SendMoneyProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SendMoney destination={propParameter} />
      <ConnectButton></ConnectButton>
    </WagmiConfig>
  )
}