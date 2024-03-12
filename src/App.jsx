import React from 'react'
import './App.css'
import Interative from './Pages/Interative'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Interative/>} />
    </Routes>
    </BrowserRouter>
     {/* <Interative/> */}
    </>
  )
}

export default App
