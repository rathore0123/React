import { useEffect, useState } from 'react'
import './App.css'
import TodoContext from './context/TodoContext'
import Todoform from './assets/component/Todoform'
import TodoItem from './assets/component/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos((prevTodos) => [...prevTodos, { ...todo, id: Date.now() }])
  }

  function editTodo(id, todo) {
    setTodos((prevTodos) => prevTodos.map((todoItem) => todoItem.id === id ? { ...todoItem, todo: todo } : todoItem))
  }
  
  function toggleComplete(id) {
    setTodos((prevTodos) => prevTodos.map((todoItem) => todoItem.id === id ? { ...todoItem, isCompleted: !todoItem.isCompleted } : todoItem))
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  useEffect(() =>{
    if(todos.length === 0) return
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  useEffect(() =>{
    let todos = JSON.parse(localStorage.getItem("todos"));
    if(todos.length > 0){
      setTodos(todos)
    }
  },[])

  return (
    <div className='h-screen bg-slate-600 flex justify-center items-center p-8'>
      <TodoContext.Provider value={{ todos, setTodos, addTodo, toggleComplete, editTodo, deleteTodo }}>
        <div className="card w-1/2 bg-white p-8 flex flex-col gap-5 justify-center items-center rounded-lg">
          <h1 className='text-4xl font-bold underline'>Todo App</h1>
          <div className='w-full'>
            <Todoform />
          </div>
          <div className='w-full'>
            {todos.map((todo) =>(
              <div className='w-full' key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </TodoContext.Provider>
    </div>
  )
}

export default App
