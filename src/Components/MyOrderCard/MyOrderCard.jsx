import React, { useState } from "react";
import { Link } from "react-router-dom";
const MyOrderCard = ({ orderid,orderDate, cart, status, totalamount }) => {
  const [OrderStatus, SetOrderStatus] = useState("");
  const CPath=`/orderid/${orderid}`
  return (
    <>
      <div className="myorder-card">
        <div className="timeandstatus">
          <h3>Orderd on {orderDate}</h3>
          {status == "Pending" ?<h3>🟠Pending</h3> : " "}
        </div>
        {cart.map((i, index) => {
          return (
            <div className="product-info">
              <div className="product-cont">
                <h2>{i.Productname}</h2>
                <h2>{i.Qty}Qty</h2>
              </div>
              <div className="product-price">
                <h2>₹{i.ProductPrice}</h2>
              </div>
            </div>
          );
        })}
        <h2>Totoal Amount:-₹{totalamount}</h2>
        <Link to={CPath}>View More Details</Link>
      </div>
    </>
  );
};

export default MyOrderCard;
