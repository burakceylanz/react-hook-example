import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Usereftutorial from "./Pages/Usereftutorial";
import UseReducerTutorial from "./Pages/UseReducerTutorial"
import "./index.css"
import Home from "./Pages/Home";
import UseEffectTutorial from "./Pages/UseEffectTutorial";
import UseStateTutorial from "./Pages/UseStateTutorial";
import UseMemoTutorial from "./Pages/UseMemoTutorial";

function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" index element={<Home />}/>
       <Route path="/usestate" element={<UseStateTutorial />}/>,
        <Route path="/useref" element={<Usereftutorial />}/>,
        <Route path="/usereducer" element={< UseReducerTutorial/>}/>,
        <Route path="/useeffect" element={<UseEffectTutorial/>}/>,
        <Route path="/usememo" element={<UseMemoTutorial/>}/>,
      </Routes>
    </BrowserRouter>
  )
}

export default App

