import React from 'react'
import "./Productcard.css"
const ProductCard = ({id,Productname,ProductImg,ProductPrice,addtocart}) => {
  return (
   <>
   <div className="card-main">
    <img src={ProductImg} alt=" " />
    <h1>{Productname}</h1>
    <h1>₹{ProductPrice}</h1>
    <button onClick={()=>{addtocart({id:id,Productname:Productname,ProductImg:ProductImg,ProductPrice:ProductPrice,Qty:1})}} >Add to card</button>
   </div>
   </>
  )
}

export default ProductCard
