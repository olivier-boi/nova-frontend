import React from 'react'
import { Link } from 'react-router-dom'
import { TiPlus } from "react-icons/ti";
import '../styles/nav.css'
const navbar = () => {
  return (
    <div className='navbar'>
       <div className='logo'>
        <span>
        < TiPlus/>
        </span>Medicare
       </div>
       <ul className='nav-link'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctor">FindDoctor</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
       </ul>
       <button className='login-btn'><Link to="/login">login</Link></button>
     
    </div>
  )
}
export default navbar