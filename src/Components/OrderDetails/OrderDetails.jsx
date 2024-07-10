import React, { useState } from "react";
import "./Orderdeatils.css"
const OrderDetails = ({ orderid,orderDate, cart, status, totalamount }) => {
    const [OrderStatus, SetOrderStatus] = useState("");
  return (
    <>
    <div className="Orderdeatils-card">
        <h1>!!!!Order Details!!!!</h1>
      <div className="timeandstatus">
        <h3>Orderd on {orderDate}</h3>
        {status == "Pending" ?<h3>Status:-🟠Pending</h3> : " "}
      </div>
      {cart.map((i, index) => {
        return (
          <div key={index} className="product-info">
            <div className="Orderdeatils-cont">
              <h2>{i.Productname}</h2>
              <h2>{i.Qty}Qty</h2>
            </div>
            <div className="Orderdeatils-price">
              <h2>₹{i.ProductPrice}</h2>
            </div>
          </div>
        );
      })}
      <h2>Totoal Amount:-₹{totalamount}</h2>
    </div>
  </>
  )
}

export default OrderDetails