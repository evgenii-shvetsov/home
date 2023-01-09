import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; 
import SignupFormModal from '../SignupFormModal'; 
import './Navigation.css';
import homeLogo from '../../assets/homeLogo.svg'

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal id='blabla'/>
        <SignupFormModal/>
      </>
    );
  }

  return (
    <header>
      <div className='header-wrapper'>
        <div>
          <nav>
            <NavLink activeStyle={{ color:'rgba(46, 118, 235, 1)'}} exact to="/search/buy">Buy</NavLink>
            <NavLink id='rent-link' activeStyle={{ color:'rgba(46, 118, 235, 1)' }} exact to="/search/rent">Rent</NavLink>
          </nav>
        </div>

        <div>
          <NavLink to="/"><img id="logo" src={homeLogo} alt="company logo" /></NavLink>
        </div>
   
        <div>
          {<span id="session-links">{sessionLinks}</span>}
        </div>  
      </div>
    </header>
  );
}

export default Navigation;