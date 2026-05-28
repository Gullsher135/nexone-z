import React from 'react'

// ---LOGO---
import logo from '../assets/logo.png'

// ---STYLE---
import '../style/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo-container">
            <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#services">Portfolio</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
        <div className="button-container">
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar