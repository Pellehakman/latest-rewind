import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/home'
import jsonData from './data/data.json'
import newData from './data/new.json'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

if (localStorage.length > 0){
}else{
    localStorage.setItem('matches', JSON.stringify(newData))
}

  return (
    <div className="app">
      {/* <Nav /> */}
      
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
        {/* <Footer /> */}
      
    </div>
  )
}

export default App
