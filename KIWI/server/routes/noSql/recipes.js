import express from 'express'
import { getRecipes, createRecipe, updateRecipe, getRecipe, deleteRecipe, likeRecipe } from '../../dao/noSqlDao/recipes.js'

const router = express.Router()

router.get('/', getRecipes)
router.post('/', createRecipe)
router.patch('/:id', updateRecipe)
router.get('/:id', getRecipe)
router.delete('/:id', deleteRecipe)
router.patch('/:id/like', likeRecipe)

export default router
