import React from 'react'
import NavBar from '../Navbar/NavBar'
import Hero from '../HeroSection/Hero'
import heroimg from '../Images/2deA.gif'
import Footer from '../Footer/Footer'
function Hike() {
    return (
        <div>
            <NavBar/>
            <Hero cName="hero-mid"
            heroimg={heroimg}
            btnClass='hide'
            url='/contact'
            />
            
            <Footer/>
                    
        </div>
    )
}

export default Hike;