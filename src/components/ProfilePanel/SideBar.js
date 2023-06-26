import React, { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ setActiveComponent }) => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({ clicked: false });

  const handleLinkClick = (component) => {
    setActiveComponent(component);
    setState({ clicked: !state.clicked })
    setShow(false);
  }

  const handleLogOut= () => {
      // Remove the token from local storage
      localStorage.removeItem('token');
      // Redirect to the home page
      window.location.href = '/';
  }

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo' >
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>HIKEPAL</span>
            </Link>

            <div className='nav-list'> 
              <Link to='/dashboard' className={'nav-link active'}onClick={()=>handleLinkClick('Profile')}>
                <i className='fas fa-user nav-link-icon'></i>
                <span className='nav-link-name'>Profile</span>
              </Link>
              <Link to='/dashboard' className='nav-link' onClick={()=>handleLinkClick('Hike')} >
                <i className='fas fa-person-hiking nav-link-icon'></i>
                <span className='nav-link-name'>Hike</span>
              </Link>
              <Link to='/dashboard' className='nav-link' onClick={()=>handleLinkClick('Peoplejoined')}>
                <i className='fas fa-users nav-link-icon'></i>
                <span className='nav-link-name'>People joined </span>
              </Link>
              
                        
            </div>
          </div>

          <Link to='/' className='nav-link' onClick={handleLogOut}>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
    </main>

  );
};

export default SideBar;