import { getRecipes, deleteRecipe, getRecipe, findRecipeByTitle, createRecipe } from '../dao/recipe.js'
import express from 'express'
import { getLikes } from '../dao/like.js'
import { createImage, deleteImage, deleteImages, getImages } from '../dao/image.js'

import { addIngredient, getIngredientsByRecipe, deleteIngredient, deleteIngredients } from '../dao/ingredient.js'
import { getSteps, createStep, deleteStep, deleteSteps } from '../dao/step.js'

const router = express.Router()

/* READ */
router.get('/:id/steps', getSteps) // steps of a recipe
router.get('/:id/likes', getLikes) // likes on a recipe
router.get('/:id/ingredients', getIngredientsByRecipe) // ingredients of a recipe
router.get('/:recipe_id/images', getImages) // images of a recipe
router.get('/search', findRecipeByTitle) // list of  recipes
router.get('/', getRecipes) // list of  recipes
router.get('/:id', getRecipe) // Single   recipe
router.post('/', createRecipe)

/* CREATE */
router.post('/:id/steps', createStep)
router.post('/:id/images', createImage) // Associate an image on a recipe

router.post('/:id/ingredients', addIngredient)
/* UPDATE */

/* DELETE
router.delete('/:id', deleteRecipe)
router.delete('/:id/ingredients', deleteIngredients)
router.delete('/:id/ingredients/:ingredientId', deleteIngredient)
router.delete('/:id/images', deleteImages)
router.delete('/:id/images/:image_id', deleteImage)
router.delete('/:id/step', deleteStep)
router.delete('/:id/steps', deleteSteps) */
export default router
