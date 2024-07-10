import React,{useEffect} from 'react'
import {Link,Outlet,useLocation } from "react-router-dom"
import Navbar from '../Components/Navbar/Navbar'
import "../Styles/Service.css"
const Service = () => {
  const location = useLocation();
  const btn1=()=>{
    //btn1
    document.getElementById("btn1").classList.add("active");
    document.getElementById("btn1").classList.remove("inactive");
    //btn2
    document.getElementById("btn2").classList.add("inactive");
    document.getElementById("btn2").classList.remove("active");
    //btn3
    document.getElementById("btn3").classList.add("inactive");
    document.getElementById("btn3").classList.remove("active");
  }
  const btn2=()=>{
    //btn2
    document.getElementById("btn2").classList.add("active");
    document.getElementById("btn2").classList.remove("inactive");
    //btn1
    document.getElementById("btn1").classList.add("inactive");
    document.getElementById("btn1").classList.remove("active");
    //btn3
    document.getElementById("btn3").classList.add("inactive");
    document.getElementById("btn3").classList.remove("active");
  }
  const btn3=()=>{
    //btn3
    document.getElementById("btn3").classList.add("active");
    document.getElementById("btn3").classList.remove("inactive");
    //btn2
    document.getElementById("btn2").classList.add("inactive");
    document.getElementById("btn2").classList.remove("active");
    //btn1
    document.getElementById("btn1").classList.add("inactive");
    document.getElementById("btn1").classList.remove("active");
  }
  useEffect(() => {
    switch (location.pathname) {
      case '/service/emergency':
        btn1();
        break;
      case '/service/appointments':
        btn3();
        break;
      default:
        btn2();
    }
  }, [])
  
  return (
    <>
    <Navbar/>
    <div className="service-nav">
        <Link to="emergency" id='btn1' onClick={btn1} >Emergency</Link>
        <Link to="" id='btn2' className='active' onClick={btn2} >Products</Link>
        <Link to="appointments" id='btn3' onClick={btn3} >Book Appointments</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Service
