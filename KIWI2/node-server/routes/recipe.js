import { getRecipes, deleteRecipe, getRecipe, createRecipe } from '../controller/recipe.js'
import express from 'express'
import { getLikes } from '../controller/like.js'
import { getSteps, createStep, deleteStep, deleteSteps } from '../controller/step.js'
const router = express.Router()

/* READ */
router.get('/:id/steps', getSteps)
router.get('/:id/likes', getLikes)
router.get('/', getRecipes)
router.get('/:id', getRecipe)
/* CREATE */
router.post('/', createRecipe)
router.post('/:id/steps', createStep)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteRecipe)
router.delete('/:id/steps', deleteStep)
router.delete('/:id/steps', deleteSteps)
export default router
