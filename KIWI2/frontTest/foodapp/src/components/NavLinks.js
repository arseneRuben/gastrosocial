import React from 'react'
import { Route, Routes } from "react-router-dom"
import CategoriesPage from '../Pages/categoriesPage'
import RecipePage from '../Pages/recipePage'
import HomePage from '../Pages/homePage'
import ProfilePage from '../Pages/profilePage'
export default function NavLinks() {
    return (
        <div>
          
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recettes" element={<RecipePage />} />
                <Route path="/categories" element={< CategoriesPage/>} />
                <Route path="/profile/:userid" element={<ProfilePage />} />
            </Routes>
          
        </div>
    )
}