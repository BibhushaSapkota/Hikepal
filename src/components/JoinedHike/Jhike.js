import './Jhike.css'
import React, {useState} from 'react'
import {MdClose} from "react-icons/md"
import {BsBagX} from "react-icons/bs"

const Jhike = ({setShowJhike}) => {
    return (
        <div className="hike-panel">
            <div
                className="opac-layer"
                onClick={() => setShowJhike(false)}
            ></div>
               <div className="hike-content">
                <div className="hike-header">
                    <span className="heading">Joined Hike</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowJhike(false)}
                            >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>
                </div> 

        </div>
    )
}

export default Jhike;