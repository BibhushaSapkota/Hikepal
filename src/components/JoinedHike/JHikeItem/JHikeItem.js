import React, { useEffect, useState} from "react";
import { MdClose } from "react-icons/md";
import "./JHikeItem.css";
import {message} from "antd";
import JHikeService from "../../../Services/JHikeService";

const JHikeItem = ({JhikeItems,setJhikeItems}) => { 
    

    const handleRemoveFromJHike = (hike) => {
        console.log(hike._id)
        JHikeService.deleteJhikeItems(hike._id)
            .then((res) => {
                console.log(res);
                message.success("Hike removed from joined hike");
                const newJhikeItems = JhikeItems.filter((item) => item.hike._id !== hike._id);
                setJhikeItems(newJhikeItems);
            }).catch((err) => {
                    console.log(err);
                    message.error("Error removing hike from joined hike ");
            });

        
    };


    return (
        <div className="cart-products">
            {JhikeItems?.map((item) => (
                <div
                    className="search-result-item"
                    key={item.hike._id}
                    onClick={() => {}}
                >
                    <div className="image-container">
                        <img
                            src={
                                "http://localhost:3000" + item.hike.image
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.hike.HikeLocation}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => handleRemoveFromJHike(item.hike)}
                        />
                        
                        <div className="text">
                           
                            <span className="highlight">
                                
                                {item.hike.StartDate}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JHikeItem;