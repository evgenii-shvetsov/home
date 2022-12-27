import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'; // new LOGIN FEATURE
import SignupFormModal from '../SignupFormModal'; // new SIGNUP FEATURE
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
        {/* <NavLink to="/login">Log In</NavLink> */}
        <LoginFormModal/>
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
        <SignupFormModal/>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {<span>{sessionLinks}</span>}
      </li>
    </ul>
  );
}

export default Navigation;