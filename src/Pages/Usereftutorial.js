import { useRef} from "react"
import Button from "./Button";

function Usereftutorial() {

  const inputRef = useRef(null)
  return (
    <>
      <Button ref={inputRef}/>
      <button onClick={()=>{inputRef.current.altertoggle()}}> CHANGE NAME</button>
    </>
  )
}

export default Usereftutorial;



/* 
USEREDUCER KULLANIMI

const reducer = (state,action)=>{
  switch(action.type){
    case"INCREMENT":
      return {count:state.count+1, showText:state.showText};
    case "toggletext":
      return {count:state.count, showText:!state.showText};
  default:
  return state;
  }
}

const ReducerTutorial=()=>{
  
  const [state,dispatch] = useReducer(reducer,{count:0, showText:false});
 return(
   <div>
   <h1>{state.count}</h1>
   <h1>{!state.showText && <span>Metin Kapalı</span>}</h1>
  <button onClick={()=>{dispatch({type:"INCREMENT"}); dispatch({type:"toggletext"})}}
  style={{background:"black", color:"whitesmoke"}}>
     { !state.showText
     ? <h1>Metni Aç</h1>
      :<h1>Metni Kapat</h1> }
    </button>
  
  { state.showText && <span>Metin Açık</span> }
   
   </div>
  );
} */


/* USEFFECT KULLANIMI 
function EffectTutorial() {

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

export default EffectTutorial; */


/*  USEREF TUTORIAL
import { useRef, useEffect, useState } from "react"

function App() {

  let inputRef = useRef("")

  const onClick=()=>{
    console.log(inputRef.current.value);
  }


  return (
    <>
      <div>My Name is {
        inputRef
        ?inputRef.current.value
        : <span>BURAK</span>
        } </div>
      <input type="text" placeholder="change name" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
      
    </>
  )
}

export default App */



/*
USEREF AND USEIMPREATIVEHANDLE

import { useRef } from "react"
import Button from "./Button";

function App() {
  const buttonref = useRef(null);

  return (
    <div>
      <button onClick={()=>{buttonref.current.altertoggle()}}>Button from parent</button>
      <Button ref={buttonref}/>   
    </div>
  )
}

export default App 


BUTTON.JS FILE 

import React, { useState, forwardRef, useImperativeHandle } from 'react'
import "./index.css"

const Button = forwardRef ((props, ref)=>{
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        altertoggle(){
            setToggle(!toggle);
    },
}));

  return (
      <>
    <button>Button from child</button>
    <div>{toggle && <span className='hi'>HELLO I AM TOGGLE ITEM</span>}</div>
    </>
  )
})

export default Button;
*/
