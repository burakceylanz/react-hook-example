import {useMemo,useState} from 'react'

function UseLayoutEffectTutorial() {
   const [data,setData] = useState("");

   const clickfunc = () => {
    console.log("Calculating...");
  };

   const memotest = useMemo(()=>{
    clickfunc(data)
   },[data])


  return (
    <div>
        <button style={{padding:"20px"}} onClick={memotest}>CLICK</button>
    </div>
  )
}

export default UseLayoutEffectTutorial;