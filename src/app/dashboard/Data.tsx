//import "../styling/DashboardPage.css";
//import SendMoney from "../components/SendMoney";
import MintNFTForm from "../components/MintNFTForm";
import Button from "../components/Button";
type ABIMethod = {
    [key: string]: any; // Loose definition to allow any properties
};

type ABI = ABIMethod[];

interface AnswerItem {
    id: number;
    name: string;
    apy: number; // or string, depending on your data
    available: number; // or string
    deposited: number; // or string
    tvl: number; // or string
    address: string;
    //abi: ABI;
}
async function getData() {
    //get rid of the cache to make loads faster. 
    //but this proves that it does get it from the server.
    //const res = await fetch('http://localhost:3080', { cache: 'no-store' })
    const res = [
        {
            id: 0,
            name: "Curve",
            apy: 49.23,
            available: 32,
            deposited: 12.4,
            tvl: 5296202,
            address: "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"
        },
        {
            id: 1,
            name: "Ethereum",
            apy: 21.23,
            available: 12,
            deposited: 4,
            tvl: 5292,
            address: "0x3a51269E0707A3416044bad5066858A12198fCf5"
        },
        {
            id: 2,
            name: "Bitcoin",
            apy: 12.42,
            available: 10,
            deposited: 14.2,
            tvl: 152,
            address: "0xAD2f9A55518Dba12E8AB069502820923351667C5"
        }
    ];
    await waitFor(3000);
    return res;
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    /*
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data') //maybe just return an error json
        return "error";
    }
    await waitFor(3000);

    return res.json()
    */
}

function waitFor(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default async function Data() {
    const answer = await getData();
    //console.log(JSON.stringify(answer, null, 2));
    //handle errors w/ guard clause
    //does not work
    if (answer === null) {
        return (
            <div>Error</div>
        );
    }
    //this is such a ugly way to apply CSS to divs
    const listItems = answer.map((item: AnswerItem) => (
        <div className="grid-container" key={item.id}>
            <div className="grid-item">
                <p>{item.name}</p>
            </div>
            <div className="grid-item">
                <p>{item.apy}</p>
            </div>
            <div className="grid-item">
                <p>{item.available}</p>
            </div>
            <div className="grid-item">
                <p>{item.deposited}</p>
            </div>
            <div className="grid-item">
                <p>{item.tvl}</p>
            </div>
            <div className="grid-item">
                <input className="w-full p-2 rounded-md" min="0" placeholder="Enter a number" type="number" />
            </div>
            <div className="grid-item">
                <Button className="submit-button">
                    Submit
                </Button>
            </div>
        </div>
    ));

    /*
        const listItems = answer.map((item: AnswerItem) => (
        <div className="gridDashboard2" key={item.id}>
            <div className="entry"> {item.name} </div>
            <div className="entry"> {item.apy} </div>
            <div className="entry"> {item.available} </div>
            <div className="entry"> {item.deposited} </div>
            <div className="entry"> {item.tvl} </div>
        </div>
    ));
    */

    //            <MintNFTForm address={item.address} abi={item.abi}/>
    //            <SendMoney destination={item.abi} />
    return (
        <>{listItems}</>
    );
}

