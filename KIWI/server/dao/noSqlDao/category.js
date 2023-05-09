import mongoose from 'mongoose'
import Category from '../../models/category.js'
// Collect all categories from the database
export const getCategories = async (req, res) => {
    try {
        const recipes = await Category.find()
        res.status(200).json(recipes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Create a category
export const createCaterory = async (req, res) => {
    const category = req.body

    const newCategory = new Category(category)

    try {
        await newCategory.save()

        res.status(201).json(newCategory)
    } catch (error) {
        res.status(409n).json({ message: error.message })
    }
}

// Update a recipe
export const updateCategory = async (req, res) => {
    const { id } = req.params
    const category = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`)

    const updatedCat = Category.findByIdAndUpdate(id, category, { new: true })

    res.json(updatedCat)
}

// Update a recipe
export const getCategory = async (req, res) => {
    const { id } = req.params

    try {
        const cat = await Category.findById(id)

        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Update a recipe
export const deleteCategory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`)
    await Category.findByIdAndRemove(id)
    res.json({ message: 'Category deleted successfully' })
}
