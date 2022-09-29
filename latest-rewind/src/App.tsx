import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './views/home'

function App() {


  return (
    <>

        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
    
    
    </>
  )
}

export default App
