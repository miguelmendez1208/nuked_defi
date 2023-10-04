async function getData() {
    const res = await fetch('http://localhost:3080')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  
  export default async function data(){
    const answer = await getData();
    return(
        <div>
        {answer}
        </div>
    )
  }