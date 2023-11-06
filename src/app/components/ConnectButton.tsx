"use client"
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import Button from './Button';
import WalletIcon from '../assets/icons/WalletIcon';

export default function ConnectButton() {
  // 4. Use modal hook
  const modal = useWeb3Modal();
  
  const state = useWeb3ModalState();

  return (
    <>
      <Button text="Connect Wallet" onButtonClick={() => { modal.open() }}
        className="connect-wallet-button nowrap" iconStart={<WalletIcon className="svg-icon margin-right fill-svg-primary" />}></Button>
    </>
  )
}