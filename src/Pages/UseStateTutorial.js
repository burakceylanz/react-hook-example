import {useState} from 'react'

function UseStateTutorial() {
    const [data,setData] = useState("")

  return (
    <div>
        <div>HELLO {data}</div>
        <input type="text" placeholder='add name' onChange={event=>{setData(event.target.value);}}/>
    </div>
  )
}

export default UseStateTutorial