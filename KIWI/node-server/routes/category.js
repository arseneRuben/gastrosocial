import { getCategories, deleteCategory, getCategory } from '../controller/category.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/', getCategories)
router.get('/:id', getCategory)
/* CREATE */

/* UPDATE */

/* DELETE */
router.delete('/:id', deleteCategory)

export default router
