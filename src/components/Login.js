import React,{ useContext } from 'react'
import {AppContect} from './UseContextTut'

export const login = ( ) => {
    const {setUserName} = useContext(AppContect)


  return (
    <>
        <input type='text'
        onChange={(event)=>{
            setUserName(event.target.value);
        }}
        />
    </>
  )
}

export default login;