import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';


import {logo, menu_icon} from '../../assets'
import './Navbar.css'

const Navbar = () => {
// .hide-moblie-menu
  const [sticky, setSticky] = useState(false)
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
}, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt=""  className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-moblie-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testmonials" smooth={true} offset={-260} duration={500}>Testmonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact us </Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' alt=""  onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar