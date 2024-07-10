import React,{useEffect,useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import axios from 'axios'
import Footer from "../Components/Footer/Footer.jsx"
import "../Styles/Checkout.css"
const Checkout = () => {
    const Navigate = useNavigate()
    const dispatch=useDispatch()
    const { cart } = useSelector((state) => state.healtbrdigedeatil);
    const { Subtotal } = useSelector((state) => state.healtbrdigedeatil);
    const { Tax } = useSelector((state) => state.healtbrdigedeatil);
    const { Shipping } = useSelector((state) => state.healtbrdigedeatil);
    const { TotalAmount } = useSelector((state) => state.healtbrdigedeatil);
    const { User_id } = useSelector(state => state.healtbrdigedeatil);
    const [OrderDate,SetOrderDate]=useState("")
    const [Userdeatils,SetUserdeatils]=useState([])
    const getprofile =async()=>{
        try {
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/profile`,{
                id:User_id
            })
            const x=data.userdetails
            SetUserdeatils(x); 
        } catch (error) {
            console.log(error)
        }
    }
    //date
    const formatCurrentDate = () => {
        const today = Date.now();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formatter = new Intl.DateTimeFormat('en-GB', options);
        return formatter.format(today);
    };
    //PlayOrder
    const PlaceOrder= async()=>{
        try {
            const formattedDate = formatCurrentDate();
            const UserOrder={
                User_id:User_id,
                order:cart,
                totalamount:TotalAmount,
                Status:"Pending",
                userdetails:{
                    name:Userdeatils.name,
                    phone:Userdeatils.phone,
                    address:Userdeatils.address,
                    email:Userdeatils.email
                },
                OrderDate:formattedDate
            }
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/placedorder`,UserOrder)
            if(data.success == true){
                dispatch({
                    type:"emptycart"
                })
                Navigate("/placedsuccesful")
            }
        } catch (error) {
            console.log(error)
        }
    }





    useEffect(() => {
        if(User_id==""){
            Navigate("/pleaselogin")
        }
        else{
            getprofile();
        }
    }, [])
  return (
   <>
   <Navbar/>
   <div className="checkout-main">
    <div className="userdetails">
        <h2>!!!!User Details!!!!</h2>
            <h1><span className='green-profile'>Name-</span>{Userdeatils.name}</h1>
            <h1><span className='green-profile'>Email-</span>{Userdeatils.email}</h1>
            <h1><span className='green-profile'>Phone-</span>{Userdeatils.phone}</h1>
            <h1><span className='green-profile'>Address-</span>{Userdeatils.address}</h1>
    </div>
    <div className="pay-div">
    <h2>!!!!Order Details!!!!</h2>
        <h1><span className='green-profile'>Total Items:-</span> ₹{cart.length}</h1>
        <h1><span className='green-profile'>Subtotal:-</span> ₹{Subtotal}</h1>
        <h1><span className='green-profile'>Shipping:-</span> ₹{Shipping}</h1>
        <h1><span className='green-profile'>Tax:-</span> ₹{Tax}</h1>
        <h1><span className='green-profile'>Total Amount:-</span> ₹{TotalAmount}</h1>
        <button onClick={PlaceOrder} >Cash On Delivery</button>
        <button>Pay Online</button>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Checkout