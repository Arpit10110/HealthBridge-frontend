import React from 'react'
import "./Service.css"
import { Link } from 'react-router-dom'
//video
import Emergency from "../../assets/Ambulance.mp4"
import Appointment from "../../assets/Appointment.mp4"
import delivery from "../../assets/delivery.mp4"
const Service = () => {
  return (
    <>
    <div className="service-main">
        <h4 className='Service-head' >Services we provide🩺</h4>
        <div className="service-all">
        <div className="service1-div">
            <div className="service1-cont">
                <h1 className='red'>🚑 Rapid Emergency Response</h1>
                <p>Our 24/7 emergency services ensure you get swift medical attention when you need it most. With a single tap, summon an ambulance to your location, providing you with prompt and efficient care to handle any crisis.</p>
                <Link>Get Emergency Help🚑</Link>
            </div>
            <div className="service-video">
                <video src={Emergency} autoPlay={true} muted={true} loop={true}  />
            </div>
        </div>
        <div className="service2-div">
            <div className="service1-cont">
                <h1 className='green'>🩺 Easy Doctor Appointments</h1>
                <p>Easily book appointments with top doctors through our platform. Search for specialists, check their availability, and schedule your visits quickly and effortlessly, ensuring you get the best care when you need it.</p>
                <Link>Book a Doctor🏥</Link>
            </div>
            <div className="service-video">
                <video src={Appointment} autoPlay={true} muted={true} loop={true}  />
            </div>
        </div>
        <div className="service1-div">
            <div className="service1-cont">
                <h1 className='blue'>💊 Quick Med Orders</h1>
                <p>Simplify your healthcare with our online medicine ordering service. Browse through a wide range of medications, place your order, and have them delivered promptly to your doorstep, ensuring you never miss a dose.</p>
                <Link>Order Medicine💊</Link>
            </div>
            <div className="service-video">
                <video src={delivery} autoPlay={true} muted={true} loop={true}  />
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Service