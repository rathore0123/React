import React, { useState } from 'react'

export default function Calculator() {
    const [value, setValue] = useState('');

    function handleChange(e){
        if (/^[0-9+\-*/]*$/.test(e.target.value)){
            setValue((e.target.value));
        }
    }

    function handleInput(e) {
        setValue((value + e.target.value));
    }

    function handleDelete(e) {
        setValue(value.slice(0,-1))
    }

    function handleAllClear() {
        setValue('')
    }

    function handleCalculation() {
        setValue(eval(value));
    }

    return (
        <div className='bg-gray-700 h-screen p-8 flex justify-center items-center'>
            <div className='calculator bg-slate-600 w-1/4 rounded-3xl p-8 flex flex-col gap-6  shadow-lg shadow-slate-950'>
                <div className="input w-full">
                    <input value={value} onChange={handleChange} type="text" className='w-full p-4 py-3 text-2xl border-none outline-none font-bold
                     text-black rounded-md shadow-md text-right'/>
                </div>
                <div className="buttons w-full flex flex-col gap-3">
                    <div className="btns flex justify-between">
                        <button onClick={handleDelete} type="button" className="btn1 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950">DEL</button>
                        <button onClick={handleAllClear} type="button" className="btn2 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950">AC</button>
                        <button onClick={handleInput} type="button" className="btn3 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='.'>.</button>
                        <button onClick={handleInput} type="button" className="btn4 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='/'>/</button>
                    </div>
                    <div className="btns flex justify-between">
                        <button onClick={handleInput} type="button" className="btn1 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='1'>1</button>
                        <button onClick={handleInput} type="button" className="btn2 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='2'>2</button>
                        <button onClick={handleInput} type="button" className="btn3 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='3'>3</button>
                        <button onClick={handleInput} type="button" className="btn4 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='*'>*</button>
                    </div>
                    <div className="btns flex justify-between">
                        <button onClick={handleInput} type="button" className="btn1 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='4'>4</button>
                        <button onClick={handleInput} type="button" className="btn2 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='5'>5</button>
                        <button onClick={handleInput} type="button" className="btn3 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='6'>6</button>
                        <button onClick={handleInput} type="button" className="btn4 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='-'>-</button>
                    </div>
                    <div className="btns flex justify-between">
                        <button onClick={handleInput} type="button" className="btn1 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='7'>7</button>
                        <button onClick={handleInput} type="button" className="btn2 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='8'>8</button>
                        <button onClick={handleInput} type="button" className="btn3 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='9'>9</button>
                        <button onClick={handleInput} type="button" className="btn4 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='+'>+</button>
                    </div>
                    <div className="btns flex justify-between">
                        <button onClick={handleInput} type="button" className="btn1 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='00'>00</button>
                        <button onClick={handleInput} type="button" className="btn2 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-[50%] h-16 w-16 bg-slate-700 shadow-lg shadow-slate-950" value='0'>0</button>
                        <button onClick={handleCalculation} type="button" className="btn4 p-2 text-white hover:bg-cyan-600 font-bold text-md rounded-full h-16 w-32 bg-slate-700 shadow-lg shadow-slate-950">=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}