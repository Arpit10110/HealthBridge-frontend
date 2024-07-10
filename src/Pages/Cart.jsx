import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import "../Styles/Cart.css"
import { useSelector,useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer/Footer.jsx"
const Cart = () => {
    const dispatch=useDispatch();
    const { User_id } = useSelector((state) => state.healtbrdigedeatil);
    const { cart } = useSelector((state) => state.healtbrdigedeatil);
    const { Subtotal } = useSelector((state) => state.healtbrdigedeatil);
    const { Tax } = useSelector((state) => state.healtbrdigedeatil);
    const { Shipping } = useSelector((state) => state.healtbrdigedeatil);
    const { TotalAmount } = useSelector((state) => state.healtbrdigedeatil);
    
    //increment
    const increment=(id)=>{
        console.log(id);
        dispatch({
            type:"addtocart",
            payload:{id:id},
        })
        dispatch({
            type:"Calculate",
        })
      }

      //decrement
      const decrement=(id)=>{
        console.log(id);
        dispatch({
            type:"decrement",
            payload:{id:id},
        })
        dispatch({
            type:"Calculate",
        })
      }

      //delete
      const deleteItem=(id)=>{
        console.log(id);
        dispatch({
            type:"deleteItem",
            payload:{id:id},
        })
        dispatch({
            type:"Calculate",
        })
      }



  return (
    <>
    <Navbar/>
    <div className="Cart-main">
    {
        cart.length==0?<div className="CartEmpty"><h1>NO ITEM IN CART</h1></div>:
  <div className="showCart-Item">
    {cart.map((i) => {
      return (
        <div className="Cart-box">
          <img src={i.ProductImg} alt="i.Name" />
          <div className="name-price">
            <h4>{i.Productname}</h4>
            <h4>₹{i.ProductPrice}</h4>
          </div>
          <div className="qty-counter">
            <button onClick={()=>{return(increment(i.id))}}>+</button>
            <h3>{i.Qty}</h3>
            <button onClick={()=>{decrement(i.id)}} className="minu-btn">-</button>
          </div>
          <div  className="deletediv">
          <DeleteIcon onClick={()=>{return(deleteItem(i.id))}} className="DeleteIcon"/>
          </div>
        </div>
      );
    })}
  </div>
    }
  <div className="showCart-bill">
    <div className="billBox">
        <h3>Subtotal:- ₹{Subtotal}</h3>
        <h3>Shipping:- ₹{Shipping}</h3>
        <h3>Tax:- ₹{Tax}</h3>
        <h3>Total Amount:- ₹{TotalAmount}</h3>
        {
          User_id==""?<Link to="/login" >Login first</Link>:cart.length==0?<span></span>:<Link to="/checkout" >Checkout</Link>
        }
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default Cart
