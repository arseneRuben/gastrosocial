import React from 'react';
// import components
import Hero from './components/Hero';

import NavLinks from './components/NavLinks';
import About from './components/About';

import Footer from './components/Footer';

import { useMemo, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";


const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
       <Hero />
      <NavLinks />
      <Footer />
     
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;