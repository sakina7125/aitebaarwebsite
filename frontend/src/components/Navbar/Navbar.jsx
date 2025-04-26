import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={assets.AitebaarLogo} alt=""className='AitebaarLogo' />
      <ul className="Navbar_menu">
        <li>Home</li>
        <li>Education</li>
        <li>Loans</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <div className="Navbar_right">
        <img src={assets.searchIcon} alt=""/>
        <div className="Navbar_search_icon">
            <img src={assets.basketIcon} alt=""/>
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
