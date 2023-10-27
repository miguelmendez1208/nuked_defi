import "../styling/DashboardPage.css";
import SendMoney from "../components/SendMoney";
import ConnectButton from "../components/ConnectButton";
interface AnswerItem {
    id: number;
    name: string;
    apy: number; // or string, depending on your data
    available: number; // or string
    deposited: number; // or string
    tvl: number; // or string
    abi: string;
}
//TODO MOVE WALLET HERE
async function getData() {
    //get rid of the cache to make loads faster. 
    //but this proves that it does get it from the server.
    const res = await fetch('http://localhost:3080', { next: { revalidate: 500 } })
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
    console.log(answer);
    //handle errors w/ guard clause
    if (answer === "error") {
        return (
            <div>Error</div>
        )
    }

    //add a key in here somewhere? I forget
    const listItems = answer.map((item: AnswerItem) => (
        <div className="gridDashboard" key={item.id}>
            <div>{item.name} </div>
            <div> {item.apy} </div>
            <div> {item.available} </div>
            <div> {item.deposited} </div>
            <div> {item.tvl} </div>
            <SendMoney destination={item.abi} />
            <ConnectButton/>
        </div>
    ));

    return (
        <div>{listItems}</div>
    );
}

