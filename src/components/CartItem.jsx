import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

function CartItem({item}){
     const dispatch =useDispatch() ;
    function deleteHandler(){
        dispatch(remove(item.id)) ;
    }
    return(
        <div className="cartitem">
              <div className="img-div">
                <img src={`${item.image}`} alt="product"/>
              </div>
              <div className="cart-text">
                <h1 className="title ">{item.title}</h1>
                <p className="description">{item.description.split(" ").slice(0,15).join(" ")}</p>
                
                <div className="price-delete">
                    <p>$ {item.price}</p>
                    <div className="delete-btn"><MdDelete onClick={deleteHandler}/></div>
                </div>

              </div>
        </div>
    )
}

export default CartItem ;