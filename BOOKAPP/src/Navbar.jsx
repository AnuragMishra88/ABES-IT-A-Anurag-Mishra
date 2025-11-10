import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar(){
  return (
    <>
    <div id="nav">
    <Link to name='/'>Home</Link>
    <Link to name='/about' >About Us</Link>
    <Link to name='/contact' >Contact</Link>
    
    <Link to name='/signup' >SignUp</Link>
    <Link to name='/login' >Login</Link>
    </div>
    </>
  )
}
export default Navbar;