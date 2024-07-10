import React from 'react'
import {ProductsApi} from "../../Api/ProductsApi.js"
import ProductCard from '../ProductCard/ProductCard.jsx'
import "./Product.css"
import Footer from "../Footer/Footer.jsx"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {useDispatch} from "react-redux"
const Products = () => {
  const dispatch = useDispatch();
  const addtocart = (item)=>{
    dispatch({
      type: 'addtocart',
      payload: item
    })
    dispatch({
      type:"Calculate",
  })
    dispatch({
      type:"localstore",
  })
    toast.success("Added to cart", {
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
  return (
   <>
   <div className="Product-main">
   {
    ProductsApi.map((i,index)=>{
      return(
        < ProductCard key={index} id={i.id} Productname={i.ProductName} ProductImg={i.img} ProductPrice={i.price} addtocart={addtocart} />
      )
    })
   }
   </div>
   <Footer/>
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

export default Products
