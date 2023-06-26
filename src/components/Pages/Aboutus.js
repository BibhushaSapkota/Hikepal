import React from 'react'
import NavBar from '../Navbar/NavBar'
import Hero from '../HeroSection/Hero'
import heroimg from '../Images/Heroimg2.png'
import Footer from '../Footer/Footer'
import About from '../About/About'
function Aboutus(){
    return(
        <div>
            <NavBar/>
            <Hero cName="hero-mid"
            heroimg={heroimg}
            title="About us"
            description="Hikepal is a platform for hikers to connect with other hikers and share their experiences."
            btnClass='hide'
            />
            <About/>
            <Footer/>
           
        </div>
    )

}

export default Aboutus