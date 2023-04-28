import React from 'react'
import { Route, Routes } from "react-router-dom"
import CategoriesPage from '../Pages/categoriesPage'
import RecipePage from '../Pages/recipePage'
import HomePage from '../Pages/homePage'
import ProfilePage from '../Pages/profilePage'
import IngredientContainer from '../container/ingredient-container'
import FormRecipeContainer from '../container/form-recipe-container'
export default function NavLinks() {
    return (
        <div>
          
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recettes" element={<RecipePage />} />
                <Route path="/categories" element={< CategoriesPage/>} />
                <Route path="/profile/:userid" element={<ProfilePage />} />
                <Route path="/ingredients" element={<IngredientContainer />} />
                <Route path="/nouvelleRecette" element={<FormRecipeContainer />} />
                
            </Routes>
          
        </div>
    )
}