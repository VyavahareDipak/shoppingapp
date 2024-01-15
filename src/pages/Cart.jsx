import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem.jsx';
function Cart(){
     const [totalAmount,setTotalAmount] = useState(0);
     const {cart} = useSelector((state)=>state) ;
     useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price , 0)) ;
     },[cart]);
    return (
        <div className="cart">
          {
            cart.length>0?
            (<div className="cart-item-summary">
                <div>
                    {
                        cart.map((item,index)=><CartItem key = {item.id} item={item} index={index}/>)
                    }
                </div>
                <div className="cart-costing">
                    <div>
                        <div>YourCart</div>
                        <div className="summary">Summary</div>
                        <p>Total items :<span>{cart.length}</span></p>
                    </div>
                    <div>
                        <p>Total Amount :<span   className="cart-cost">${totalAmount}</span></p>
                    </div>
                </div>
            </div>):
            (<div className="not-found">
                <h1>Cart empty</h1>  
                <NavLink to="/">
                <button className="shop-now-btn">
                  Shop Now
                </button>
                </NavLink>
                </div>)
          }
        </div>
    )
}

export default Cart ;