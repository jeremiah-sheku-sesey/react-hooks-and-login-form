import React,{ useContext } from 'react'
import {AppContect} from './UseContextTut'

export const user = () => {
    const {userName} = useContext(AppContect)
  return (
    < >
         <>User: {userName}</>
    </ >
  )
}


export default user;