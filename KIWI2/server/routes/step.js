import { getSteps, deleteStep, createStep, deleteSteps } from '../controller/step.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/', getSteps)

/* CREATE */
router.post('/', createStep)
/* UPDATE */

/* DELETE */
router.delete('/:recipeId/:stepNumber', deleteStep)
router.delete('/:recipeId/', deleteSteps)

export default router
