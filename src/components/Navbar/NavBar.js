import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {MenuItems} from './Menuitems';
import './NavBar.css';
import { message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Jhike from '../JoinedHike/Jhike';

function NavBar() {
    const location = useLocation();
    const [showJhike, setShowJhike] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [state, setState] = useState({
        clicked: false
    })
    const handleClick = () => {
        setState({ clicked: !state.clicked })
    }
    const handleLogout = () => {
      // Remove the token from local storage
      localStorage.removeItem('token');
      // Redirect to the home page
      window.location.href = '/';
    };

    const isLoggedIn = localStorage.getItem('token');
    let loginOrLogoutButton;
    let cartButton;
    let profileButton;

    if (isLoggedIn) {
      loginOrLogoutButton = (
        <button onClick={handleLogout}>Logout</button>
      );
      cartButton = (
        <li >
          <i class="fas fa-bookmark" onClick={()=>setShowJhike(true)}></i> 
        </li>
      );

      profileButton = (
        <li > 
        <i className="fas fa-user" onClick={() => { window.location.href = '/dashboard'}}></i> 
        </li>
      );
      
  
    } else {
      
        loginOrLogoutButton = (
          <button onClick={() => { window.location.href = '/login'; }}>
            Login
          </button>
        );
      }


  return (
    <>
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Hikepal</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>  
        </div>
        <ul className={state.clicked ? "nav-menu aactive" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          const isActive = location.pathname === item.url;
            return (
              <li key={index}>
                <Link
                  className={isActive ? `${item.cName} aactive` : item.cName}
                  to={item.url}
                >
                  <i className={item.icon}></i> {item.title}
                </Link>
                
              </li>
            );
          })}
           <span>{cartButton}</span>
            <span>{profileButton}</span>
           {loginOrLogoutButton}     
          
        </ul>
      </nav>
      {showJhike && <Jhike setShowJhike={setShowJhike} />}
      
    </>
  );
}

export default NavBar;