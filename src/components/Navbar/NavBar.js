import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {MenuItems} from './Menuitems';
import logo from '../Images/logo.png';
import defaultavatar from '../Images/avatar.png';
import './NavBar.css';
import { Dropdown, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Jhike from '../JoinedHike/Jhike';
import UserService from '../../Services/UserService';

function NavBar() {
    const location = useLocation();
    const [profile, setProfile] = useState({});
    const [name, setName] = useState('');
    const [showJhike, setShowJhike] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

    const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        UserService.getprofile()
            .then((res) => {
                if (res.data.data.image!==null) {
                    setProfile("http://localhost:3000" + res.data.data.image);
                    setName(res.data.data.firstName + " " + res.data.data.lastName);
                }
                setName(res.data.data.firstName + " " + res.data.data.lastName);
            }
            )
            .catch((err) => {
                console.log(err);
            }
            )
    }, []);
  

    const isLoggedIn = localStorage.getItem('token');
    let loginOrLogoutButton;
   

    if (isLoggedIn) {
      loginOrLogoutButton=(
       <div className="dropdown-container">
        {
          profile===null?
          <img src={profile} alt="profile" className="profile-image" onClick={handleProfileClick} />
          :
          <img src={defaultavatar} alt="profile" className="profile-image" onClick={handleProfileClick} />
        }
      

      {isDropdownOpen && (
        <div className="dropdown-options">
          <ul>
            <li onClick={()=>{window.location.href='/dashboard'}}>   
                <i className="fas fa-user"> </i>
                {name} 
            </li>
            <li onClick={()=>setShowJhike(true)}> 
              <i class="fas fa-bookmark" ></i> 
              Joined Hikes
            </li> 
            <li  onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </li>
            
          </ul>
        </div>
      )}
      </div>
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
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state. clicked ? "fas fa-times" : "fas fa-bars"}></i>  
        </div>
        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
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
          
           {loginOrLogoutButton}     
          
        </ul>
      </nav>
      {showJhike && <Jhike setShowJhike={setShowJhike} />}
      
    </>
  );
}

export default NavBar;