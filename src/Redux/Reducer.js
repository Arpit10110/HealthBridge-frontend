import { createAction,createReducer } from "@reduxjs/toolkit";
const Profile=createAction('Profile')
const logout=createAction('logout')
const addtocart=createAction('addtocart')
const Calculate=createAction('Calculate')
const decrement=createAction('decrement')
const deleteItem=createAction('deleteItem')
const emptycart=createAction('emptycart')
const localstore=createAction('localstore')
export  const healthbridgereducer=createReducer({
   User_id:localStorage.getItem("HealthID")? localStorage.getItem("HealthID") :"",
   cart:localStorage.getItem("Healthcart")? JSON.parse(localStorage.getItem("Healthcart")) : [],
   Subtotal:localStorage.getItem("HealthSubtotal")? localStorage.getItem("HealthSubtotal"):0,
   Tax:localStorage.getItem("HealthTax")? localStorage.getItem("HealthTax"):0,
   TotalAmount:localStorage.getItem("HealthTotal")? localStorage.getItem("HealthTotal"):0,
   Shipping:localStorage.getItem("HealthShipping")? localStorage.getItem("HealthShipping"):0,
  },
(builder)=>{
    builder.addCase(Profile,(state,action)=>{
      const value=action.payload; 
      state.User_id=value._id;
      localStorage.setItem("HealthID",state.User_id);
    })
    builder.addCase(logout,(state)=>{
      state.User_id="";
      localStorage.setItem("HealthID",state.User_id);
    })
    builder.addCase(addtocart,(state,action)=>{
      const item =action.payload;
      const itemExist = state.cart.find((i) => i.id === item.id);
      if (itemExist) {
        state.cart.forEach((i) => {
          if (i.id === item.id) {
            i.Qty += 1;
          }
        });
      } 
      else {
        state.cart.push(item);
      }
    })
    builder.addCase(decrement,(state,action)=>{
      let Item=action.payload;
      state.cart.forEach((i)=>{
        if(i.id==Item.id && i.Qty>=1)
        {
          i.Qty-=1;
        }
        if(i.Qty==0)
        {
          state.cart=state.cart.filter((i)=>Item.id !== i.id)
        }
      })
    })
    builder.addCase(deleteItem,(state,action)=>{
      const Item=action.payload;
      state.cart=state.cart.filter((i)=>Item.id !== i.id)
    })

    builder.addCase(Calculate,(state, action)=>{
      let sum = 0;
      state.cart.forEach((i) => { sum += i.Qty * i.ProductPrice });
      
      state.Subtotal = parseFloat(sum.toFixed(2)); 
      if (state.cart.length > 0) {
        state.Shipping = state.Subtotal >= 150 ? 15 : 30;
      } else {
        state.Subtotal = 0;
        state.Shipping = 0;
      }
      
      state.Tax = parseFloat((state.Subtotal * 0.18).toFixed(2)); 
      state.TotalAmount = parseFloat((state.Subtotal + state.Shipping + state.Tax).toFixed(2));   
      localStorage.setItem("HealthSubtotal", state.Subtotal);
      localStorage.setItem("HealthTax", state.Tax);
      localStorage.setItem("HealthTotal", state.TotalAmount);
      localStorage.setItem("HealthShipping", state.Shipping);    
  })
  builder.addCase(localstore,(state)=>{
    localStorage.setItem("Healthcart", JSON.stringify(state.cart))
  })
  builder.addCase(emptycart,(state)=>{
    state.cart=[];
    state.TotalAmount=0;
    state.Shipping=0;
    state.Tax=0;
    state.Subtotal=0;
    localStorage.setItem("Healthcart", JSON.stringify(state.cart))
    localStorage.setItem("HealthSubtotal", state.Subtotal);
    localStorage.setItem("HealthTax", state.Tax);
    localStorage.setItem("HealthTotal", state.TotalAmount);
    localStorage.setItem("HealthShipping", state.Shipping); 
  })
}) 