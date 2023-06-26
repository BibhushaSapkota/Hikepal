import React, { useState } from 'react';
import SideBar from './SideBar';
import Profile from './Contents/Profile';
import Hike from './Contents/Hike';
import PeopleJoined from './Contents/PeopleJoined';
import './Home.css';


function Homepage() {
    const [activeComponent, setActiveComponent] = useState('Profile');

    const renderActiveComponent = () => {
      switch (activeComponent) {
        case 'Profile':
          return <Profile/>;
        case 'Hike':
          return <Hike/>;
        case 'Peoplejoined':
          return <PeopleJoined/>;
        default:
          return <Profile />;
      }
    }
  
    return (
      <div className='App'>
        <SideBar setActiveComponent={setActiveComponent} />
        <div className='content-container'>
          {renderActiveComponent()}
        </div>
      </div>
    );
  }


export default Homepage;