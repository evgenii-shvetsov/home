import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Footer.css"
import logo from '../../assets/home-logo.jpg';

const Footer = () => {
  return (
    <footer>
        <section className='footer-info'>
            <NavLink exact to="/"><img id="footer-logo" src={logo} alt="company logo" /></NavLink>
            <p>GitHub</p>
            <p>LinkedIn</p>
            
        </section> 
        {/* <NavLink exact to="/"><img id="logo" src={logo} alt="company logo" /></NavLink> */}
        <section className='footer-big-logo'></section>
    </footer>
    
  )
}

export default Footer