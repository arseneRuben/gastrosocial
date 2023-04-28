
import React from 'react'
import { createRoot } from 'react-dom/client'

// import FormRecipeContainer from 'container/form-recipe-container'
import IngredientContainer from './container/ingredient-container'
// import Header from './container/principal-container'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import PrincipalContainer from './container/principal-container'
const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <IngredientContainer />
    </React.StrictMode>
)
