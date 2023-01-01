import React from 'react'
import './App.css';
import './learning.css'
import MyProps from './MyProps'
import UseReducerHookTutorial from './UseReducerHookTutorial'
import UseEffect from './UseEffect'
import UseRefHook from './UseRefHook'
import UseLayoutEffect from './UseLayoutEffect'
import UseContextTut from './UseContextTut'
import LoginForm from './LoginForm'



function App(props) {

  return(
    <>
    <LoginForm  />
      <UseContextTut  />  
      <UseLayoutEffect  />
      <UseRefHook  />
     <UseEffect  />
    <UseReducerHookTutorial  />
    <MyProps  />  
          
 
    </>
  );

}

export default App;
