import {useReducer} from "react";

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
  } 

  export default ReducerTutorial;