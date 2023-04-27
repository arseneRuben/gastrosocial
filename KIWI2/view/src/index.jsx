
import React from 'react'
import { createRoot } from 'react-dom/client'

import FormRecipeContainer from 'container/form-recipe-container'
import 'bootstrap/dist/css/bootstrap.min.css'
const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <FormRecipeContainer />
    </React.StrictMode>
)
