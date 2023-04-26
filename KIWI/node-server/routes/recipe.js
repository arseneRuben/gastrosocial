import { getRecipes, deleteRecipe, getRecipe, createRecipe } from '../controller/recipe.js'
import express from 'express'
import { getLikes } from '../controller/like.js'
const router = express.Router()

/* READ */
router.get('/:id/likes', getLikes)
router.get('/', getRecipes)
router.get('/:id', getRecipe)
/* CREATE */
router.post('/', createRecipe)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteRecipe)

export default router
