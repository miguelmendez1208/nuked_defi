"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
//somehow this is going to work
// 1. Get projectId
const projectId = '76e490f32ea4fd8fc7071f1d3ed3cc6d'
import ThemeProvider from './theme-provider'
// 2. Set chains
  
  import {
    arbitrum,
    mainnet,
    optimism,
  } from "./storage/ChainsUtil"

  const chains = [
    mainnet,
    arbitrum,
    optimism
  ]
  

  // 3. Create modal
  const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/']
  }

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains,
    projectId
  })
//I should look up the theme variables, also maybe properly type the children?
//it would be a react node aka jsx element

//for some reason I don't need to make wagmi provider component around react?
//it does all the javascript outside of react?
//this works but why how the fuck
//how the fuck does it know where the modal is?



export default function WagmiWallet({ children }: any) {
    return (
            <ThemeProvider>
                {children}
            </ThemeProvider>
    )
}