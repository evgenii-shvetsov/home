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
          <NavLink exact to="/search/:type">Buy</NavLink>
          <NavLink exact to="/search/:type">Rent</NavLink>
          </nav>
        
          <NavLink exact to="/"><img id="logo" src={logo} alt="company logo" /></NavLink>
          {<span id="session-links">{sessionLinks}</span>}
      </div>

      {/* <ul>
        <li>
          <NavLink exact to="/">Buy</NavLink>
          <NavLink exact to="/listings/for_rent">Rent</NavLink>
          <NavLink exact to="/">Home</NavLink>
          {<span>{sessionLinks}</span>}
        </li>
      </ul> */}
    </header>
  );
}

export default Navigation;