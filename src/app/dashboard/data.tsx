
async function getData() {
    const res = await fetch('http://localhost:3080', { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
  
export default async function Data(){
    const answer = await getData();
    console.log(answer);
    const name = answer.name;
    const apy = answer.apy;
    const available = answer.available;
    const deposited = answer.deposited;
    const tvl = answer.tvl;

    return(
        <div>
        {name} 
        <span> {apy} </span> 
        <span> {available} </span>
        <span> {deposited} </span>
        <span> {tvl} </span>
        </div>
    )
}