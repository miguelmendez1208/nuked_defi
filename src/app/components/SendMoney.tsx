"use client"
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

export default function SendMoney() {
  const { config } = usePrepareSendTransaction({
    to: 'moxey.eth',
    value: parseEther('0.01'),
  })
  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(config)
 
  return (
    <div>
      <button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
        Send Transaction
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}