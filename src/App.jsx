import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//Pages
import Home from "./Pages/Home.jsx"
//Style
import "./Styles/Style.css"
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  )
}

export default App
