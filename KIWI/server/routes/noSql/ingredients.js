import { getIngredients, deleteIngredient, getIngredient, createIngredient, upadateIngredient } from '../../dao/noSqlDao/ingredients.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getIngredients)
router.get('/:id', getIngredient)

/* CREATE */
router.post('/', createIngredient)
/* UPDATE */
router.put('/:id', upadateIngredient)

/* DELETE */
router.delete('/:id', deleteIngredient)

export default router
