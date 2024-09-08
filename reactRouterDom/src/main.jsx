import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HtmlQuiz from './component/htmlquiz/HtmlQuiz.jsx'
import Jokes from './component/jokes/JOkes.jsx'
import JsQuiz from './component/jsquiz/JsQuiz.jsx'
import Quotes from './component/quotes/Quotes.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='htmlquiz' element={<HtmlQuiz />} />
      <Route path='jokes' element={<Jokes />} />
      <Route path='jsquiz' element={<JsQuiz />} />
      <Route path='quotes' element={<Quotes />}  />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
