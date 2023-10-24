import { useSignMessage } from 'wagmi'

//small not important function
export default function Account() {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'gm wagmi frens'
  })

  return (
    <div>
      <button disabled={isLoading} onClick={() => signMessage()}>
        Sign message
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && <div>Error signing message</div>}
    </div>
  )
}