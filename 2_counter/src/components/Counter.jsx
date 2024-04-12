import { useState } from 'react'

function Counter() {
    const[counter , setCounter]=useState(0)
    const decrement=()=>{
        setCounter(counter - 1)
        setCounter(counter - 1)
    
    }
    const increment=()=>{
        setCounter(counter + 1)
        setCounter((prevCounter)=>prevCounter + 1)
     
    }
  return (
    <div className='text-center mt-64'>
    
    <h1 className='text-2xl'> {counter}</h1>

    <button className='p-5 border-white-700 bg-black text-white ' onClick={decrement}>Decrease</button>

    <button className='p-5 border-white-700 bg-black text-white ' onClick={increment}>Increase</button>


    </div>
  )
}

export default Counter