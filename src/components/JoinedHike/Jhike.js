import './Jhike.css'
import React, {useState} from 'react'
import {MdClose} from "react-icons/md"
import {BsBagX} from "react-icons/bs"
import {useEffect} from "react"
import JHikeService from '../../Services/JHikeService'
import JHikeItem from './JHikeItem/JHikeItem'


const Jhike = ({setShowJhike}) => {
    const [jhikeItems, setjhikeItems] = useState([]);

    useEffect(() => {
        JHikeService.getJhikeItems()
            .then((res)=> { 
                setjhikeItems(res.data.data);
                console.log(res.data.data);
            })
    }, []);

    useEffect(() => {
        let total = 0;
        jhikeItems.map(
            (item) =>
            (total= total + 1)
        );
        
                    
    }, []);
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

                 {!!jhikeItems.length && (
                    <>
                        <JHikeItem JhikeItems={jhikeItems} setJhikeItems={setjhikeItems} />
                    </>
                )}
                 {!jhikeItems.length && (
                    <div className="empty-hike">
                        <BsBagX />
                        <span>You have not joined any hike</span>
                        <button className="return-cta" onClick={() => {
                            setShowJhike(false);
                        }}>
                            RETURN TO Hike
                        </button>
                    </div>
                )}
                
                </div> 

        </div>
    )
}

export default Jhike;