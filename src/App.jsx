import {useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import GlobalStyle from './styles/global'

const App = () =>{

     const [color] = useState("#666666")
     document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App;