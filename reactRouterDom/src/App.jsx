import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
