import React, { useEffect } from 'react'

const UseEffect = () => {
    useEffect(()=>{
        document.title='effect title'
    },[])
  return (
    <>
       <h1>we can use  useEffect(it takes a callback function
        we can also use it for many purposes most especially for an APIs call [for destructuring data])</h1>
    </>
  )
}

export default UseEffect;