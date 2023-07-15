import React, { useState ,useEffect } from 'react';
import './Myhike.css';

import { useNavigate,Link } from 'react-router-dom';
import HikeService from "../../../Services/HikeService";


function Myhikes(){

 const navigate = useNavigate();

  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    HikeService.getmyhikes().then((res) => {
      setHikes(res.data?.data);
    }
    );
  }, []);

  const handlePeople = (hikeId) => {
    navigate(`/peoplejoined`,{state:{hikeId}});
    
  };

  return (
    <div className="hikes-container">
      <h2>My hikes</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>HikeLocation</th>
            <th>StartDate</th>
            <th>Description</th>
            <th>Meetuplocation</th>
            <th>See People Joined</th>
          </tr>
        </thead>
        
          {hikes.map((hike) => (
            <tbody>
            <tr key={hike.id}>
              <td>
                <img src={"http://localhost:3000"+hike.image} alt={hike.HikeLocation} />
              </td>
              <td>{hike.HikeLocation}</td>
              <td>{hike.StartDate}</td>
              <td>{hike.Description}</td>
              <td>{hike.Meetuplocation}</td>
              <td>
                
               <button onClick={()=>handlePeople(hike._id) }><i className="fas fa-users" ></i></button>

              </td>
            </tr>
            </tbody>
          ))}
          
        
      </table>
    </div>
  );
};


export default Myhikes;