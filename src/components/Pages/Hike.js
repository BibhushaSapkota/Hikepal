import React from 'react'
import NavBar from '../Navbar/NavBar'
import Hero from '../HeroSection/Hero'
import heroimg from '../Images/2deA.gif'
import Footer from '../Footer/Footer'
import HikesContainer from '../Hikes/HikesContainer'
import HikeService from '../../Services/HikeService'
import { useEffect, useState } from 'react'

function Hike({hikes,setHikes}) {
    useEffect(()=>{
        HikeService.gethikes()
        .then(response => {
            setHikes(response.data.data)
        }).catch(err => console.log(err))
}, [])


    return (
        <div>
            <NavBar/>
            <Hero cName="hero-mid"
            heroimg={heroimg}
            btnClass='hide'
            url='/hike'
            />
            <HikesContainer hikes={hikes} />
            
            <Footer/>
                    
        </div>
    )
}

export default Hike;