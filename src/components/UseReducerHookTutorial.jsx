import React, {useReducer} from "react";


 const reducer=(state, action)=>{
    switch(action.type){
        case "increment":
            return {
                count: state.count + 1, 
                showText: state.showText
            }
        case "toggleShowText":
            return{
                count: state.count, 
                showText: !state.showText
            }
        default:
            return state    
    }
 }

 

const UseReducerHookTutorial =( )=>{
    const[state,dispatch]=useReducer(reducer,
        {
            count:0,
            showText:true
        }
        );
 
    return (
    <> 
          <h1>{state.count}</h1>
          <button onClick={()=>{
                dispatch({ type:"increment" });
          }}>click</button>
         
          
          <p>{state.showText && <p>this is a text</p>}</p>

          <button onClick={()=>{
            dispatch({ type:"toggleShowText" });
          }}>Click here to toggle text</button>

    </>
  );

}


export default UseReducerHookTutorial;
