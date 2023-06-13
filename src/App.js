import React from 'react';
import {useState} from 'react';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Registration/Registration';
import Home from './components/Pages/Home';
import Aboutus from './components/Pages/Aboutus';
import Contactus from './components/Pages/Contactus';
import Hike from './components/Pages/Hike';
import {Routes,Route,useMatch } from 'react-router-dom';
import './App.css';


function App() {
  const [hikes,setHikes]=useState([])



  const match=useMatch('/hikes/:id')
  const hike=match
                ?hikes.find(h=>h._id===match.params.id)
                :null

  return (
   <div> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contactus/>}/>
    <Route path='/hike' element={<Hike hikes={hikes} setHikes={setHikes}/>}/>

    </Routes>
   </div>
  );
}

export default App;
