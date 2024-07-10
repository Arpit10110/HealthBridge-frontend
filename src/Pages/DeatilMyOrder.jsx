import React,{useEffect} from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import load from "../assets/load.gif"
import "../Styles/DetailMyorder.css"
//components
import OrderDetails from "../Components/OrderDetails/OrderDetails.jsx"
import ProfileDetails from "../Components/ProfileDetails/ProfileDetails.jsx"
const DeatilMyOrder = () => {
    const params=useParams();
    const [Result,SetResult]=useState([])
    const [Loading,SetLoading] = useState(true);
    const id=params.id
    const getorder = async() =>{
        try {
            const {data}=await axios.get(`${import.meta.env.VITE_Port}/orderid/${id}`)
            const result= data.results;
            SetResult(result)
            SetLoading(false)
            console.log(result)
        } catch (error) {
            
        }
    }

    useEffect(() => {
     getorder();
    }, [])
    
  return (
   <>
   <Navbar/>
   <div className="detailmyorder-main">
    {
        Loading==true? <div className="loading-div">
        <img src={load} alt="Loading" />
      </div>:<div className='innerdetail-myorder' >
        <OrderDetails cart={Result.cart} orderid={Result._id} orderDate={Result.orderDate} status={Result.status} totalamount={Result.totalamount} />
        <ProfileDetails Userdeatils={Result.userdetails}/>
      </div>
    }
   </div>
   <Footer/>
   </>
  )
}

export default DeatilMyOrder