import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import "../index.css"

const Button = forwardRef ((props, ref)=>{
    const inputRef = useRef(null)
    const [toggle, setToggle] = useState("");

    useImperativeHandle(ref, () => ({
        altertoggle(){
            setToggle(inputRef.current.value);
        },
}));     

  return (
      <>
     <div>MERHABA {
    toggle
    ? <h2><bold>{toggle}</bold></h2>
    : <h2>BURAK</h2>
        } </div>

    <input type="text" placeholder="change name" ref={inputRef}/>
    </>
  )
})

export default Button;