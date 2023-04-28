import React, { useState } from 'react'
import { Link} from "react-router-dom";

export default function NavBar() {
    return (
       
       <div className='flex justify-between items-center ml-[25rem]'>
        <li className='cursor-pointer list-none -ml-10'>
            <Link to="/"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Accueil
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-30'>
            <Link to="/recettes"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Recettes
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-30'>
            <Link to="/categories"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Categories
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-30'>
            <Link to="/ingredients"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Ingredients
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-30'>
            <Link to="/nouvelleRecette"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Nouvelle Recette
            </Link>
        </li>
     
       </div>
    
    )
}
