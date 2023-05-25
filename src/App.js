import React from 'react';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Registration/Registration';
import Home from './components/Pages/Home';
import Aboutus from './components/Pages/Aboutus';
import Contactus from './components/Pages/Contactus';
import {Routes,Route,useMatch } from 'react-router-dom';



import './App.css';

function App() {
  return (
   <div> 
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contactus/>}/>

    </Routes>
   </div>
  );
}

export default App;
