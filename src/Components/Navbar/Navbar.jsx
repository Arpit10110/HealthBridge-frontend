import React from 'react'
import "./Navbar.css"
//imports
import { Link } from 'react-router-dom'
//image
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt=" " />
            <h2><span>Health</span>Bridge</h2>
        </div>
        <div className="nav-links">
            <Link>Home</Link>
            <Link>Service</Link>
            <Link>Smart AI</Link>
            <Link>Contact</Link>
            <Link>SignUp</Link>
            <Link>LogIn</Link>
        </div>
    </nav>
  )
}

export default Navbar
