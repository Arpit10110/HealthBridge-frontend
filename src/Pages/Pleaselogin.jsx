import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import "../Styles/pleaselogin.css"
const Pleaselogin = () => {
  return (
    <>
    <Navbar/>
    <div className="Pleaselogin-main">
        <Link to="/login" >Login First</Link>
    </div>
    </>
  )
}

export default Pleaselogin