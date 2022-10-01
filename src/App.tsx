import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/home'
import jsonData from './data/data.json'

function App() {

if (localStorage.length > 0){
}else{
    localStorage.setItem('matches', JSON.stringify(jsonData))
}

  return (
    <div className="app">
      
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      
    </div>
  )
}

export default App
