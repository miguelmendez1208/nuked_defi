import "../styling/DashboardPage.css";
import SendMoney from "../components/SendMoney";
import GridWallet from "./GridWallet";

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
    const res = await fetch('http://localhost:3080', { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data') //maybe just return an error json
      return "error";
    }
   
    return res.json()
}
  
export default async function Data(){
    const answer = await getData();
    console.log(answer);
    //handle errors w/ guard clause
    if (answer== "error"){ 
        return(
            <div>Error</div>
        )
    }
    //  if grid wallet is just a React Context provider... then maybe we should move this elsewhere? or maybe its fine. 
    //  component hierarchy is going 
    //  client (layout) -> 
    //  server (dashboard/page.tsx) ->
    //  server (Data.tsx) ->
    //  client (GridWallet.tsx) 
    const listItems = answer.map((item: AnswerItem) =>(
            <div className="gridDashboard" >
            <div>{item.name} </div> 
            <div> {item.apy} </div> 
            <div> {item.available} </div>
            <div> {item.deposited} </div>
            <div> {item.tvl} </div>
            <GridWallet propParameter={item.abi}/>
            </div>
    ));

    return (
        <div>{listItems}</div>
    );
}

