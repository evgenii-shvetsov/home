import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Footer.css"
import homeLogo from '../../assets/homeLogo.svg'

const Footer = () => {
  return (
    <footer>
        <section className='footer-info'>
            <div>
              <NavLink exact to="/"><img id="footer-logo" src={homeLogo} alt="company logo" /></NavLink>
            </div>
            <div className="footer-text">
                <h6>Evgenii Shvetsov</h6>
                <a href="mailto:sea.dev91@gmail.com">Email Me</a>
            </div>

            <div className="social_media">
              <a href="https://www.linkedin.com/in/evgenii-shvetsov" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/evgenii-shvetsov" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-github"></i>
              </a>
            </div>

        </section> 
        <section className='footer-big-logo'></section>
    </footer>
    
  )
}

export default Footer