import React,{useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "../Styles/Login.css"
import { Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import {useDispatch} from "react-redux"
const Login = () => {
    const naviagte= useNavigate()
    const dispatch=useDispatch()
    const [Email,SetEmail]=useState("")
    const [Password,SetPassword]=useState("")
    const login=async(e)=>{
        e.preventDefault()
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_Port}/login`, {
              email: Email,
              password: Password
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
                  naviagte("/");
                  dispatch({
                    type:"Profile",
                    payload:data.user_data
                    ,
                  })
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
              console.log(error);
          }
    }
  return (
   <>
   <Navbar/>
   <div className="Login-main">
        <form onSubmit={login}>
        <input type="email" onChange={(e)=>{SetEmail(e.target.value)}} placeholder='Enter your Email' required/>
        <input type="password" onChange={(e)=>{SetPassword(e.target.value)}} placeholder='Enter your Password' required/>
        <button>Login</button>
        <div className="extra-link">
        <h3>Create new Account!! <Link to="/signup" >SignUp</Link></h3>
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
  )
}

export default Login
