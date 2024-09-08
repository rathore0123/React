import React from 'react'
import { useState, useEffect } from 'react';

export default function Quotes() {
    const [data, setData] = useState("")
    const GetJokes = async () => {
        let res = await fetch(`https://meowfacts.herokuapp.com`);
        let data = await res.json();
        console.log(data.setup ? `${data.setup}\n${data.delivery}` : `${data.joke}`)
        setData(data.data)
    }


    useEffect(() => {
        GetJokes();
    }, [])
    return (
        <div className='bg-violet-300 p-8 w-screen h-[calc(100vh-118px)] relative z-10 top-0 flex justify-center items-center flex-col'>
            <div className='flex flex-col gap-5 bg-slate-700 p-8 w-9/12 min-h-[500px] rounded-lg relative'>
                <div className='flex justify-end'>
                    <button type="submit"
                        className='flex justify-center items-center text-xl min-w-fit font-bold text-white p-2 rounded-lg bg-blue-500 border-none hover:bg-red-950 duration-500'
                        onClick={GetJokes}
                    >
                        Next
                    </button>
                </div>
                <div className='flex self-center w-3/4 '>
                    <div className="question text-2xl font-bold text-green-700"><li>{data}</li></div>
                </div>

                <div className='flex justify-center mt-auto'>
                    <button type="submit"
                        className='flex justify-center items-center text-xl min-w-fit font-bold text-white p-2 rounded-lg bg-blue-500 border-none hover:bg-red-950 duration-500'
                        onClick={GetJokes}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </div>
    )
}