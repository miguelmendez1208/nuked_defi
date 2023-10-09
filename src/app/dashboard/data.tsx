import "./DashboardPage.css";
import styles from './styles.module.css'

interface AnswerItem {
    id: number;
    name: string;
    apy: number; // or string, depending on your data
    available: number; // or string
    deposited: number; // or string
    tvl: number; // or string
    abi: string;
  }

async function getData() {
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
    
    const listItems = answer.map((item: AnswerItem) =>(
        <li key ={item.id}>
            <div className={styles.gridDashboard}> 
            <span>{item.name} </span> 
            <span> {item.apy} </span> 
            <span> {item.available} </span>
            <span> {item.deposited} </span>
            <span> {item.tvl} </span>
            <span> {item.abi} </span>
            </div>
        </li>
    ));

    return (
        <ul className="list-stype-type">{listItems}</ul>
    );
}

