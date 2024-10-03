import React, { useContext, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";
import TodoContext from '../../context/TodoContext'

function TodoItem({ todo }) {
    const { setTodos, toggleComplete, editTodo, deleteTodo } = useContext(TodoContext)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    function Edit(id, todo) {
        if (todo.isCompleted === false) {
            setTodos((prev) => prev.map((prveTodo) => prveTodo.id === id ? { ...prveTodo, isEditable: !prveTodo.isEditable } : prveTodo))
            editTodo(todo.id, { ...todo, todo: todoMsg })
        }
    }
    return (
        <div className={`w-full flex items-center justify-between p-2 px-4 rounded-lg 
            bg-cyan-400 gap-2 mb-3 ${todo.isCompleted ? 'bg-green-600' : ''}`}>
            <div className=' flex items-center gap-3'>
                <input
                    className=''
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => toggleComplete(todo.id)}
                    name=""
                    id="" />

                <input
                    className={`${todo.isCompleted ? 'bg-green-600 line-through' : ''} ${todo.isEditable ? 'cursor-pointer' : ''}
                    p-2 px-4 rounded-lg bg-cyan-400 border-none outline-none text-slate-600 font-bold text-xl`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    type="text"
                    readOnly={!todo.isEditable}
                    name=""
                    id="" />
            </div>
            <div className='flex items-center gap-3'>
                <button
                    className='text-blue-600 font-bold text-2xl'
                    onClick={(e) => Edit(todo.id, todo)}
                    type="button">
                    {todo.isEditable ? <IoSaveOutline /> : <CiEdit />}
                </button>

                <button
                    onClick={(e) => deleteTodo(todo.id)}
                    className='text-red-600 font-bold text-2xl'
                    type="button">
                    <MdDeleteOutline />
                </button>
            </div>
        </div>
    )

}

export default TodoItem