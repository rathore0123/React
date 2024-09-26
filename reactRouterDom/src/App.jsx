import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.js'
import './App.css'

function App() {

  return (
    <div className='h-screen w-screen overflow-x-hidden bg-blue-600'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
