import React from "react";
import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar(){
    const {cart} = useSelector((state)=>state);
    return(
        <div className="navbar">
         <nav className="navbar-main">
          <NavLink to='/'>
          <div><img src="" alt="logo"/></div>
          </NavLink>
          <div className="nav-home">
            <div>
         <Link className="nav-home"  to='/'>
            <p>Home</p>
            </Link>
            </div>
            <div className="logo-counter">
            <Link to='/cart'> 
                <IoIosCart   className="nav-logo"/>
                </Link>
                {  cart.length>0 &&
                     <span className="nav-counter bounce">{ 
                        `${cart.length}`
                            }</span>
                }
                </div>
            
          </div>
         </nav>
        </div>
    )
}

export default Navbar;