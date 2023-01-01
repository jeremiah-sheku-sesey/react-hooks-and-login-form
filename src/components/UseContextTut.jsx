import React,{useState, createContext} from 'react'
import Login from './Login'
import User from './User'

export const AppContect = createContext(null);

const UseContextTut = () => {
    const [userName, setUserName]=useState('');
  return (
    <AppContect.Provider value={{userName, setUserName}}>
        <Login  />
        <User  />
    </AppContect.Provider>
  )
}

export default UseContextTut;

