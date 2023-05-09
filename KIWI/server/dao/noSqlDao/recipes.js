import mongoose from 'mongoose'
import Recipe from '../../models/recipe.js'
// Collect all recipes from the database
export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.status(200).json(recipes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Create a recipe
export const createRecipe = async (req, res) => {
    const recipe = req.body

    const newRecipe = new Recipe(recipe)

    try {
        await newRecipe.save()

        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(409n).json({ message: error.message })
    }
}

// Update a recipe
export const updateRecipe = async (req, res) => {
    const { id } = req.params
    const recipe = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No recipe with id: ${id}`)

    const updatedRecipe = Recipe.findByIdAndUpdate(id, recipe, { new: true })

    res.json(updatedRecipe)
}

// Update a recipe
export const getRecipe = async (req, res) => {
    const { id } = req.params

    try {
        const recipe = await Recipe.findById(id)

        res.status(200).json(recipe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Update a recipe
export const deleteRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No recipe with id: ${id}`)
    await Recipe.findByIdAndRemove(id)
    res.json({ message: 'Recipe deleted successfully' })
}
