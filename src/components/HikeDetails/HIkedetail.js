import './Hikedetail.css';
import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {
    FaCartPlus,
} from "react-icons/fa";
import {message } from 'antd';
import NavBar from '../Navbar/NavBar';
import JHikeService from '../../Services/JHikeService';

const HikeDetailPage=({hike})=>{
    const [joinhikeitems,setjoinhikeitems]=useState([]);

    const joinhike =(hike)=> {
        JHikeService.joinhike({hike})
            .then((response) => {
                setjoinhikeitems(response.data);
                console.log(response.data);
                if(response.status === 201){
                    message.success('Hike joined successfully');
                    
                }
                else{
                    message.error(`Error: ${response.message}`);
                }       
            }
            )       
          };
    
    return(
        <>
        <NavBar/>
        
        <div className="hike-main-content">
            <div className="layout">
                <div className="hike-detail-page">

                    <div className="left">
                        <img src={"http://localhost:3000"+ hike.image} alt="hike"/>
                    </div>
                    <div className="right">
                        <span className='hike-location'>{hike.HikeLocation}</span>
                        <span className='hike-date'>StartDate: {hike.StartDate}</span>
                        <span className='hike-duration'>Duration: {hike.Duration} days</span>
                        <span className='hike-meetuplocation'>Meetuplocation: {hike.Meetuplocation}</span>
                        <span className='hike-description'>{hike.Description}</span>
                        
                            <button className='join-hike-button' onClick={()=>joinhike(hike)}>
                                    Join Hike
                            </button>

                        </div>
                        

                    </div>
                    <span className='divider'></span>
                        <div className="info-item">
                            <span className='text-bold'> Hike Created By:
                                <span> {hike.user.firstName} {hike.user.lastName}</span>
                                
                            </span>
                            <span className='text-bold'> Contact Number:
                                <span> {hike.user.phoneNumber}</span>
                                
                            </span>
                            

                        </div>

                </div>
                
            </div>
        
        </>

    )

}
export default HikeDetailPage;