import React from 'react';
// import components
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Socials from './Socials';
// import data
import { footerData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className='relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32'>
      <div className='container mx-auto h-full'>
        {/* newsletter & info */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='h-full flex flex-col gap-y-4'
        >
          {/* newsletter */}
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1.6)}>
            <Newsletter />
          </motion.div>
          {/* info */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12'
          >
            {/* contact */}
            
            {/* program */}
           
            {/* social */}
            <div className='flex-1 lg:max-w-[280px] mb-12'>
              <div className='capitalize text-[20px] lg:text-[22px] font-normal text-white font-primary mb-[22px]'>
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          {/* copyright */}
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
