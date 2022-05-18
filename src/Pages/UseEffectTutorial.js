import axios from "axios";
import {useEffect, useState} from "react";

function UseEffectTutorial() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
      axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        setData(response.data[0].email);
        console.log("API CALLED");
      });
    });
  
   return <div>
     <button onClick={()=>setCount(count+1)} style={{background:"black", color:"white"}}>Counter{count}</button>
     {data
     ?<h1>MAİL : {data} </h1>
    :<div>Data Loading </div>
    }
     </div>
  }
  
  export default UseEffectTutorial;