import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(()=>setTimeout(()=>window.location.reload(),1));
    // location.reload()
    // setTimeout(()=>window.location.reload(),1000)
    // window.location.reload();
    
  };

  return (
    <>
    <div id="dropdown">
      <button className="font-awesome-login" onClick={openMenu}>
        <i className="fa-solid fa-house-user" />
        {/* <i className="fa-solid fa-user-circle" /> */}
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <NavLink exact to='/listings/new'><li><button>Add New Listing</button></li></NavLink>
          <li><button>Saved Homes</button></li>
          <li>
            <button id="logout-btn" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;
