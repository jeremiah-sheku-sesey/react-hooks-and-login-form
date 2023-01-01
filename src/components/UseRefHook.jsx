import React,{ useRef } from 'react'

const UseRefHook = () => {
    const inputRef = useRef(null);
    const handleOnClickChange = () =>{
        console.log(inputRef.current.value)
        inputRef.current.focus()
        inputRef.current.value=''
    }

    // let myRefValue=handleOnClickChange()
  return (
    <>
    <h1>Jeremiah</h1>
        <input type='text' placeholder='EX...' ref={inputRef} />
        <button onClick={handleOnClickChange}>Change Name</button>
        {/* <h1>{myRefValue}</h1> */}
         
         
    </>
  )
}


export  default UseRefHook;
