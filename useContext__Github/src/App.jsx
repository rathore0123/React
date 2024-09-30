import { useEffect, useState } from 'react'
import GithubData from './context/GithubDataContext.js'
import './App.css'
import Card from './component/Card';

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState({});

  async function GetgithubData() {
    let res = await fetch(`https://api.github.com/users/rathore0123`);
    let data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    GetgithubData()
  }, [])

  return (
    <>
      <GithubData.Provider value={{ count, setCount, data }}>
        <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
          <Card />
        </div>
      </GithubData.Provider>
    </>
  )
}

export default App
