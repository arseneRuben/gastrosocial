import { getRecipes, deleteRecipe, getRecipe } from '../controller/recipe.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/', getRecipes)
router.get('/:id', getRecipe)
/* CREATE */

/* UPDATE */

/* DELETE */
router.delete('/:id', deleteRecipe)

export default router
