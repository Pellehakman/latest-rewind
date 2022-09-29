import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/home'

function App() {


  return (
    <div className="app">
      
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      
    </div>
  )
}

export default App
