import  { useState } from 'react'

function Color() {

    const [color, setColor] = useState("black")

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

            <div className='fixed flex flex-wrap justify-center top-52 inset-x-0 px-2'>

                <div className='flex flex-wrap shadow-lg bg-white rounded-lg px-3 py-3'>

                    <button className=' outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>

                    <button className=' outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>green</button>

                    <button className=' outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>blue</button>

                    <button className=' outline-none px-4 py-1 rounded-full text-white ' style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>brown</button>


                </div>
            </div>
        </div>
    )
}

export default Color