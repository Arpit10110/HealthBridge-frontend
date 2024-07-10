import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import Navbar from '../Components/Navbar/Navbar';
import "../Styles/Profile.css"
import {useNavigate} from "react-router-dom"
import Footer from '../Components/Footer/Footer';
const Profile = () => {
    const Navigate = useNavigate()
    const dispatch=useDispatch()
    const { User_id } = useSelector(state => state.healtbrdigedeatil);
    const [Userdeatils,SetUserdeatils]=useState([])
    const getprofile =async()=>{
        try {
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/profile`,{
                id:User_id
            })
            const x=data.userdetails
            SetUserdeatils(x);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const logout =()=>{
        dispatch({
            type:"logout"
        })
        Navigate("/")
    }


    useEffect(() => {
        getprofile();
    }, [])
    
  return (
   <>
    <Navbar/>
    <div className="profile-main">
        <div className="profile-box">
            <h1><span className='green-profile'>Name-</span>{Userdeatils.name}</h1>
            <h1><span className='green-profile'>Email-</span>{Userdeatils.email}</h1>
            <h1><span className='green-profile'>Phone-</span>{Userdeatils.phone}</h1>
            <h1><span className='green-profile'>Address-</span>{Userdeatils.address}</h1>
            <button onClick={logout} >Logout</button>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Profile
