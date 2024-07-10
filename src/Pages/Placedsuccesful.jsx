import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import placedOrderImg from "../assets/delivery.gif"
import { Link } from 'react-router-dom'
import "../Styles/PlacedorderSucces.css"
import Footer from '../Components/Footer/Footer'
const Placedsuccesful = () => {
  return (
    <>
    <Navbar/>
    <div className="placedorder-main">
      <img src={placedOrderImg} alt="" />
      <Link to="/">Go to Home Page</Link>
    </div>
    <Footer/>
    </>
  )
}

export default Placedsuccesful