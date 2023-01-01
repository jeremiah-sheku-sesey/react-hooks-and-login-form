import React, { useLayoutEffect, useEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const myUseRef = useRef(null)

    useEffect(()=>{
        // console.log('useEffect')
          myUseRef.current.value='Hello react-hooks'
    }, [])

    useLayoutEffect(()=>{
        console.log(myUseRef.current.value)
        // myUseRef.current.value='Hello world'
    }, []);

  return (
    <>
        <>hello world</> <br/>
        <>this tutorial is about useLayoutEffect hook</>
        <input type="text" value="Jeremiah" ref={myUseRef}/>
    </>
  )
}


export  default UseLayoutEffect;