import React from "react";
import './learning.css'

const Learning =(props)=>{
    return (
        <>
              <h1 className="myApp">i'm the learning Component</h1>
              <h1 className="myApp">learning: {props.name}</h1>
              <button  onClick={props.onClick} className="myApp">learning component btn: click </button>
              {/* <button  onClick={props.onClick}>learning component btn: get more </button> */}
 
        </>
      );
}


export default Learning;

