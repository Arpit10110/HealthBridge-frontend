import React from "react";
import "./Section1.css";
import Section1Img from "../../assets/section1.png";
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <>
      <div className="section1-main">
        <div className="sec1-cont">
          <h1>
          <span className="red">Empowering</span> your <span className="green">health journey</span> with quick <span className="green">medicine</span> orders,<span className="blue"> doctor </span>
            visits, <span className="red">emergency</span> help, and <span className="blue">AI insights</span>.
          </h1>
          <p>
            At HealthBridge, we provide exceptional medical care, quick access
            to medicines, doctor appointments, emergency services, and
            AI-powered health advice, ensuring a brighter and healthier future
            for all...
          </p>
          <div className="sec1-btns">
          <Link>Book Appointments</Link>
          <Link>Order Medicine</Link>
        </div>
        </div>
        <div className="sec1-img">
          <img src={Section1Img} alt=" " />
        </div>
      </div>
    </>
  );
};

export default Section1;
