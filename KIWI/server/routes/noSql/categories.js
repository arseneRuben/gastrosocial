import express from 'express'
import { getCategory, createCaterory, updateCategory, getCategories, deleteCategory } from '../../dao/noSqlDao/category.js'

const router = express.Router()

router.get('/', getCategories)
router.post('/', createCaterory)
router.patch('/:id', updateCategory)
router.get('/:id', getCategory)
router.delete('/:id', deleteCategory)

export default router
