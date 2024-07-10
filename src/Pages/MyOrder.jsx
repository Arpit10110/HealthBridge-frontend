import React,{useEffect,useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from "../Components/Footer/Footer"
import MyOrderCard from "../Components/MyOrderCard/MyOrderCard.jsx"
import { useSelector } from 'react-redux'
import axios from "axios"
import load from "../assets/load.gif"
import "../Styles/Myorders.css"
const MyOrder = () => {
  const { User_id } = useSelector(state => state.healtbrdigedeatil);
  const [Loading,SetLoading] = useState(true);
  const [Noorder,SetNoorder] = useState(true);
  const [Data,SetData] = useState();
  const getmyorders = async() =>{
    try {
      const {data}=await axios.post(`${import.meta.env.VITE_Port}/myorders`,{
        userid:User_id
      })
      if(data.success==true){
        SetLoading(false)
        SetNoorder(false)
        console.log(data)
        const result= data.results;
        SetData(result)
        console.log(result)
      }
      else{
        SetLoading(false)
        SetNoorder(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   getmyorders()
  }, [])
  


  return (
   <>
   <Navbar/>
   <div className="myorder-main">
    {
      Loading==true? <div className="loading-div">
      <img src={load} alt="Loading" />
    </div>:<div className='myorder-innerDiv'>
      {
        Noorder==true?<div className='Norders-div'><h1>!!!No Orders!!!</h1></div>:
        <div className="allorders">
          {
           Data.map((i,index)=>{
            return(
              <MyOrderCard cart={i.cart} orderid={i._id} key={index} orderDate={i.orderDate} status={i.status} totalamount={i.totalamount}/>
            )
           })
          }
        </div>
      }
    </div>
    }
     
   </div>
    <Footer/>
   </>
  )
}

export default MyOrder