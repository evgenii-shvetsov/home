import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; // new LOGIN FEATURE
import SignupFormModal from '../SignupFormModal'; // new SIGNUP FEATURE
import logo from '../../assets/home-logo.jpg';
import './Navigation.css';

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
        <LoginFormModal/>
        <SignupFormModal/>
      </>
    );
  }

  return (
    <header>
      <div className='header-wrapper'>
          <nav>
          <NavLink activeStyle={{ color:'rgba(46, 118, 235, 1)'}} exact to="/search/buy">Buy</NavLink>
          <NavLink activeStyle={{ color:'rgba(46, 118, 235, 1)' }} exact to="/search/rent">Rent</NavLink>
          </nav>
        
          <NavLink to="/"><img id="logo" src={logo} alt="company logo" /></NavLink>
          {<span id="session-links">{sessionLinks}</span>}
      </div>
    </header>
  );
}

export default Navigation;