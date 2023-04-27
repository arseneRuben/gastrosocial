import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
/*import Menu from './components/Menu';

import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';*/
import Footer from './components/Footer';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import LoginPage from "./Pages/loginPage";
import ProfilePage from "./Pages/profilePage";
import { useMemo, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";


const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile/:userid" element={<ProfilePage />} />
      </Routes>
      </BrowserRouter>
    
      <Hero />
      
     {/* <About />
      <Menu />
     
      <Testimonial />
  <Reservation />*/}
      <Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
