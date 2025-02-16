import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Style/NavBar.css";
import Logo from '../Images/Logo.png';

const  NavBar =() => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className='logo'>
      <a href="/" className="nav__brand">
      <img
        alt="Logo"
        src= {Logo}
        style={{ height: '30px', width: '120px' }}  
      />
      </a>
    </div>
      
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/programmes" className="nav__link">
            Our Programmes
          </a>
        </li>
        <li className="nav__item">
          <a href="/clubs" className="nav__link">
            Clubs
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="/contact" className="nav__link">
            Contact Us
          </a>
          
        </li>
       
      </ul>
      <button className='loginButton' ><Link to="/login" className="navLink">Login</Link></button>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;