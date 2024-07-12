import React, { useState } from "react";
import "./Navbar.css";
//imports
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
//image
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { User_id } = useSelector((state) => state.healtbrdigedeatil);
  const { cart } = useSelector((state) => state.healtbrdigedeatil);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt=" " />
        <h2>
          <span>Health</span>Bridge
        </h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {User_id == "" ? "" : <Link to="/myorders">My Orders</Link>}
        <Link to="/service">Service</Link>
        <Link to="/cart">
          <ShoppingCartIcon className="Cart-Icon" />
          <span>{cart.length}</span>
        </Link>
        <Link to="/smartai">Smart AI</Link>
        {User_id == "" ? <Link to="/signup">SignUp</Link> : ""}
        {User_id == "" ? (
          <Link to="/userlogin">LogIn</Link>
        ) : (
          <Link to="/profile">Profile</Link>
        )}
      </div>
      <div className="mobile-links">
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon className="MenuIcon" />
        </button>
        <Drawer
          anchor={"right"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div className="all-links">
          <Link to="/">Home</Link>
        {User_id == "" ? "" : <Link to="/myorders">My Orders</Link>}
        <Link to="/service">Service</Link>
        <Link to="/cart">
          <ShoppingCartIcon className="Cart-Icon" />
          <span>{cart.length}</span>
        </Link>
        <Link to="/smartai">Smart AI</Link>
        {User_id == "" ? <Link to="/signup">SignUp</Link> : ""}
        {User_id == "" ? (
          <Link to="/userlogin">LogIn</Link>
        ) : (
          <Link to="/profile">Profile</Link>
        )}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
