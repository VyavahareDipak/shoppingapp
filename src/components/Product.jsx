import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from '../redux/slices/CartSlice'

function Products({post}){

    const {cart} = useSelector((state)=>state) ;
    const dispatch = useDispatch();

    function removeHandler(){
        dispatch(remove(post.id));
        toast.error("item removed") ;
    }
    function addtocartHandler(){
        dispatch(add(post));
        toast.success("successfully added to cart");
    }
    return(
        <div className="product">
            <div className="title-img">
                <p className="title">{post.title.split(" ").slice(0,3).join(" ")+"..."}</p>
            <div  className="description">
                <p >{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
            <div className="img-div">
                <img src={`${post.image}`}/>
            </div>
            </div>
            <div className="price-btn">
                <p>{"$"+post.price}</p>
                {cart.some((p)=> p.id==post.id)?(<button onClick={removeHandler}>Remove Item</button>):(<button onClick={addtocartHandler}>Add to cart</button>)}
            </div>

        </div>
    )
}

export default Products ;