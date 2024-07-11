import axios from 'axios'
import React, { useState } from 'react'
import "./Emergency.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Emergency = () => {
  const [Name,SetName]=useState("")
  const [Phone,SetPhone]=useState("")
  const [Address,SetAddress]=useState("")
  const [KindEmgerency,SetKindEmgerency]=useState("")
  const getEmergency= async(e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_Port}/sendemergency`,{
        name:Name,
        phone:Phone,
        address:Address,
        message:KindEmgerency
      })
      SetName("")
      SetAddress("")
      SetKindEmgerency("")
      SetPhone("")
      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className="emergency-main">
        <form onSubmit={getEmergency} className="emergency-box">
          <input type="text" value={Name} onChange={(e)=>{
            SetName(e.target.value);
          }}  placeholder='Enter your name' required />
          <input type="text" value={Phone} onChange={(e)=>{
            SetPhone(e.target.value);
          }}  placeholder='Enter your phone number' required />
          <input type="text" value={Address} onChange={(e)=>{
            SetAddress(e.target.value);
          }}  placeholder='Enter the Address' required />
          <input type="text"  value={KindEmgerency} onChange={(e)=>{
            SetKindEmgerency(e.target.value);
          }}  placeholder='What kind of Emergency you have' required />
          <button>Submit</button>
        </form>
    </div>
    <ToastContainer
        position="top-right"
        autoClose={5000}
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
  )
}

export default Emergency
