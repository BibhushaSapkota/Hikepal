import React  from "react";
import NavBar from "../Navbar/NavBar";
import Hero from "../HeroSection/Hero";
import heroimg from "../../components/Images/Heroimg.png"
import Popular from "../PopularHikes/PopularProducts";
import Footer from "../Footer/Footer";

function Home(){
    return(
        <>
            <NavBar/>
            <Hero cName="hero"
            heroimg={heroimg}
            title="Welcome to Hikepal"
            description="Join the Hike , hit the trail, with Hikepal fun will never fail"
            buttontext='Join Now'
            btnClass='show'
            url='/hike'
            /> 
            <Popular/>
            <Footer/>

            
        </>


    )
}

export default Home