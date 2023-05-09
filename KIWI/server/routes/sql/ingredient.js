import { getIngredients, deleteIngredient, getIngredient, createIngredient, updateIngredient } from '../dao/ingredient.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getIngredients)
router.get('/:id', getIngredient)

/* CREATE */
router.post('/', createIngredient)
/* UPDATE */
router.put('/', updateIngredient)

/* DELETE */
router.delete('/:id', deleteIngredient)

export default router
