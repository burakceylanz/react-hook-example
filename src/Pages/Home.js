import React from 'react'
import {  Link } from "react-router-dom";

function Home() {
  return (
    <div> 
        <div>     
        <h1>WELCOME TO REACT HOOK EXAMPLE</h1>
        </div>

        <Link to="usestate">
        <div className="btnb">
        <button className="btn">UseState </button> 
        </div>
        </Link>

        <Link to="useref">
        <div className="btnb">
        <button className="btn">UseRef </button> 
        </div>
        </Link>

        <Link to="usereducer">
        <div className="btnb">
        <button className="btn">UseReducer </button> 
        </div>
        </Link>

        <Link to="useeffect">
        <div className="btnb">
        <button className="btn">UseEffect </button> 
        </div>
        </Link>

        <Link to="usememo">
        <div className="btnb">
        <button className="btn"> UseMemo </button> 
        </div>
        </Link>

    </div>
  )
}

export default Home