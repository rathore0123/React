import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let arr = [1,2,3,4,5]
  return (
    <>
      <h1 className='text-red-800 font-bold text-center text-4xl absolute left-1/3 top-24'>Tailwind Test</h1>
      <Card name="Roli Gupta" myarr={arr}/>
    </>
  )
}

export default App
