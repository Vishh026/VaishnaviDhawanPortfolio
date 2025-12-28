import React from 'react'
import MainRoutes from './MainRoutes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <MainRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
