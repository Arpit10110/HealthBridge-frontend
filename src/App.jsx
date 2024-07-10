import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//Pages
import Home from "./Pages/Home.jsx"
import SignUP from "./Pages/SignUP.jsx"
import Login from "./Pages/Login.jsx"
import Profile from "./Pages/Profile.jsx"
import SmartAi from "./Pages/SmartAi.jsx"
import Service from "./Pages/Service.jsx"
import Cart from "./Pages/Cart.jsx"
import Pleaselogin from "./Pages/Pleaselogin.jsx"
import Checkout from "./Pages/Checkout.jsx"
import Placedsuccesful from "./Pages/Placedsuccesful.jsx"
import MyOrder from "./Pages/MyOrder.jsx"
import DeatilMyOrder from "./Pages/DeatilMyOrder.jsx"
//Style
import "./Styles/Style.css"
//components
import Emergency from "./Components/Emergency/Emergency.jsx"
import Products from "./Components/Products/Products.jsx"
import Appointments from "./Components/Appointments/Appointments.jsx"
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUP/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/smartai" element={<SmartAi/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/pleaselogin" element={<Pleaselogin/>}/>
      <Route path="/orderid/:id" element={<DeatilMyOrder/>}/>
      <Route path="/placedsuccesful" element={<Placedsuccesful/>}/>
      <Route path="/myorders" element={<MyOrder/>}/>
      <Route path="/service" element={<Service/>}>
          <Route path='/service/emergency' element={<Emergency/>}/>
          <Route path='/service' element={<Products/>}/>
          <Route path='/service/appointments' element={<Appointments/>}/>
      </Route>
    </Routes>
   </Router>
  )
}

export default App
