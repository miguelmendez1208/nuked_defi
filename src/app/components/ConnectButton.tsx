"use client"
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const modal = useWeb3Modal();
  //you have to open it first lol
  const state = useWeb3ModalState();


  return (
    <>
      <button onClick={() => modal.open()}>Open Connect Modal</button>
      <button onClick={() => modal.open({ view: 'Networks' })}>Open Network Modal</button>
      <button onClick={() => modal.open({ view: 'Account' })}>Open Account Modal</button>
    </>
  )
}