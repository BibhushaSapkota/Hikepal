import './Hikes.css'
import React,{useState,useEffect} from 'react';
import Hike from './Hike/Hike';

const HikesContainer=({hikes})=>{
    return(
        <div className="hikes-container" >
            <div className="section-heading">Upcoming Hikes</div>
            <div className="hikes">
                {hikes.map((items)=>{
                    return <Hike key={items.id} hikes={items}/>
                }
                )}
            </div>

        </div>
    )
}
   
export default HikesContainer;