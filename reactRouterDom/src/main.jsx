import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import {Quiz, Weather, Calculator, Countdown} from './components/index.js'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='quiz' element={<Quiz />} />
      <Route path='weather' element={<Weather />} />
      <Route path='calculator' element={<Calculator />} />
      <Route path='countdown' element={<Countdown />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
