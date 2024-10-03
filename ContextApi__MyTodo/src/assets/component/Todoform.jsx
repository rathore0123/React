import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext'

function Todoform() {
    const {addTodo} = useContext(TodoContext)
    const [todo, setTodo] = useState('')

    function Add(e){
        e.preventDefault();
        if(!todo) return
        addTodo({todo:todo, isCompleted: false, isEditable: false})
        setTodo('')
    }
    
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <form onSubmit={Add} className='w-full flex gap-2 items-center'>
                <input
                    className='p-2 px-4 rounded-s-lg border-none outline-none bg-cyan-200 text-xl text-slate-600 font-bold w-full'
                    placeholder='Enter Your Todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    name=""
                    id="" />

                <button
                    className='p-2 px-4 rounde bg-violet-600 text-white font-bold text-lg rounded-e-lg'
                    type='submit'>
                    ADD
                </button>
            </form>
        </div>
    )
}

export default Todoform