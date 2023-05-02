import { getIngredients, deleteIngredient, getIngredient, createIngredient } from '../dao/ingredient.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getIngredients)
router.get('/:id', getIngredient)

/* CREATE */
router.post('/', createIngredient)

/* DELETE */
router.delete('/:id', deleteIngredient)

export default router
