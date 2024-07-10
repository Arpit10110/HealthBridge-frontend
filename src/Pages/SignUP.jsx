import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useNavigate  } from "react-router-dom";
import "../Styles/SignUP.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUP = () => {
  const naviagte = useNavigate()
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Password, SetPassword] = useState("");
  const [Address, SetAddress] = useState("");
  const [Landmark, SetLandmark] = useState("");
  const [Postal, SetPostal] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/signup`, {
        name: Name,
        email: Email,
        phone: Phone,
        password: Password,
        useraddress: Landmark+","+Address+","+City+","+State+","+Postal
      });
      console.log(data);
      if(data.success==false) {
        toast.warn(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else{
            naviagte("/login");
      }
    } catch (error) {
      toast.warn(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  return (
    <>
      <Navbar />
      <div className="SingUP-main">
        <form onSubmit={signup}>
          <input
            type="text"
            onChange={(e) => {
              SetName(e.target.value);
            }}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
            placeholder="Enter your Email"
            required
          />
          <input
            type="number"
            onChange={(e) => {
              SetPhone(e.target.value);
            }}
            placeholder="Enter your Phone no"
            required
          />
          <input
            type="password"
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            placeholder="Enter your Password"
            required
          />

<input type="text" onChange={(e) => {SetAddress(e.target.value);}} placeholder="Enter your Address" required />
<div className="address-part">
<input type="text" onChange={(e) => {SetLandmark(e.target.value);}} placeholder="Land mark" required />
<input type="text" onChange={(e) => {SetPostal(e.target.value);}} placeholder="Postal code" required />
</div>
<div className="address-part">
<input type="text" onChange={(e) => {SetCity(e.target.value);}} placeholder="City name" required />
<input type="text" onChange={(e) => {SetState(e.target.value);}} placeholder="State name" required />
</div>

          <button>SignUP</button>
          <div className="extra-link">
            <h3>
              Already have account!! <Link to="/login">Login</Link>
            </h3>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default SignUP;
