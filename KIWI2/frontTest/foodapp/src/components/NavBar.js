import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import FlexBetween from "../components/FlexBetween";
import {
  
    InputBase,
    Typography,
   
    useMediaQuery,
  } from "@mui/material";
export default function NavBar() {
    
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    

    return (
        <FlexBetween padding="1rem 6%" >
            <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              
              cursor: "pointer",
            },
          }}
        >
        
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
          
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
           

          </FlexBetween>
        )}
      </FlexBetween>
       <div className='flex justify-between items-center ml-[25rem]'>
        <li className='cursor-pointer list-none -ml-96'>
            <Link to="/"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Accueil
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-96'>
            <Link to="/recettes"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Recettes
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-96'>
            <Link to="/categories"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Categories
            </Link>
        </li>
     
       </div>
       </FlexBetween>
    )
}
