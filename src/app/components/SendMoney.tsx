"use client"
import React, { useState } from 'react';
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi';
import { parseEther } from 'viem';

interface SendMoneyProps{
  destination: string;
}

export default function SendMoney({ destination = "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"}: SendMoneyProps) {
  const [transactionValue, setTransactionValue] = useState('0.01');

  const { config } = usePrepareSendTransaction({
    to: destination,
    value: parseEther(transactionValue),
  });

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config);

  const handleInputChange = (e) => {
    setTransactionValue(e.target.value);
  };

  return (
    <>
      <div>
      <label>
        Transaction Value:
        <input
          type="number"
          required
          value={transactionValue}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <div>
      <button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
        Send Transaction
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      </div>
    </>
  );
}