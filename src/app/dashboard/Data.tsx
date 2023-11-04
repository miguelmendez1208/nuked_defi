//import "../styling/DashboardPage.css";
import SendMoney from "../components/SendMoney";
import MintNFTForm from "../components/MintNFTForm";

type ABIMethod = {
    anonymous?: boolean;
    constant?: boolean;
    inputs?: { indexed?: boolean; internalType: string; name: string; type: string }[];
    name: string;
    outputs?: { internalType: string; name: string; type: string }[];
    payable?: boolean;
    stateMutability: string;
    type: string;
  };
  
  type ABI = ABIMethod[];
  

interface AnswerItem {
    id: number;
    name: string;
    apy: number; // or string, depending on your data
    available: number; // or string
    deposited: number; // or string
    tvl: number; // or string
    address: `0x${string}`; //forcing it to be a proper address, seems kinda dumb
    abi: ABI;
}
async function getData() {
    //get rid of the cache to make loads faster. 
    //but this proves that it does get it from the server.
    const res = await fetch('http://localhost:3080', { next: { revalidate: 50 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data') //maybe just return an error json
        return "error";
    }

    return res.json()
}

export default async function Data() {
    const answer = await getData();
    console.log(JSON.stringify(answer, null, 2));
    //handle errors w/ guard clause
    //does not work
    if (answer === "error") {
        return (
            <div>Error</div>
        );
    }
    //this is such a ugly way to apply CSS to divs
    const listItems = answer.map((item: AnswerItem) => (
        <div className="gridDashboard2" key={item.id}>
            <div className="entry"> {item.name} </div>
            <div className="entry"> {item.apy} </div>
            <div className="entry"> {item.available} </div>
            <div className="entry"> {item.deposited} </div>
            <div className="entry"> {item.tvl} </div>
            <SendMoney destination={item.address} />
        </div>
    ));
    //            <MintNFTForm address={item.address} abi={item.abi}/>
    //            <SendMoney destination={item.abi} />
    return (
        <>{listItems}</>
    );
}

