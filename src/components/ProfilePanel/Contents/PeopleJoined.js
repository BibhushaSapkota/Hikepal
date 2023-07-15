import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./PeopleJoined.css";
import SideBar from "../SideBar";
import JHikeService from "../../../Services/JHikeService";

function PeopleJoined() {
  const [people, setPeople] = useState([]);
  const  location  = useLocation();
  const [hikeId, setHikeId] = useState("");



  useEffect(() => { 
    if (location.state && location.state.hikeId) {
      setHikeId(location.state.hikeId);
      console.log(location.state.hikeId);
    }
    JHikeService.getpeoplejoined(location.state.hikeId)
      .then((res) => {
        setPeople(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location.state.hikeId]);

  return (
    <div>
      <SideBar />
      <div className="App">
      <div className='content-container'>
      <div className="people-container">
    

      <table>
        <thead>
          <tr>
            <th>Hike Location</th>
            <th>Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person._id}>
              <td>{person.hike.HikeLocation}</td>
              <td>{person.user.firstName}</td>
              <td>{person.user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </div>
   
  );
}

export default PeopleJoined;
