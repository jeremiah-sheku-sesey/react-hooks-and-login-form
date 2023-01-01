import React, {useState, useEffect} from "react";
import Learning from './Learning'
import './learning.css'
 

const MyProps =( )=>{
 
    const [name, setName] = useState('learning props')

    useEffect(()=>{
        document.title='effect title props'
    })
const[inputValue, setInputValue] = useState('jerry')

let handleInputValueChange =(e)=>{
  let newValueInput = e.target.value;
  setInputValue(newValueInput)
}

 
    return (
    <>
          <Learning name='learning Component' onClick={()=>{setName ('receiving props from the MyProps components')}}/>
          
          
          <button  onClick={()=>{setName ('setting the name onClick directly from MyProps')}} className="myApp">MyProps component btn: click</button>

          <h1 className="myApp">{name}</h1>
          <h1 className="myApp">{name}</h1>
          <h1 className="myApp">{name}</h1>

    

          <Learning name='learning Component 2nd called' onClick={()=>{setName ('setting the name onClick directly from learning Component 2nd called')}} />
          <div>
          <input type='text' placeholder='enter a name' onChange={handleInputValueChange}/>
          {inputValue}
          </div>
    </>
  );

}


export default MyProps;

 