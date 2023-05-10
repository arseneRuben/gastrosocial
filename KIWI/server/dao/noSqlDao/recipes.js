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
    const { id: _id } = req.params
    const recipe = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No recipe with id: ${_id}`)
        recipe.updatedAt = new Date()
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, { ...recipe, _id }, { new: true })
        res.json(updatedRecipe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
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
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No recipe with id: ${id}`)
        const recipe = await Recipe.findById(id)
        const updatedRecipe = Recipe.findByIdAndUpdate(id, { ...recipe, _id }, { new: true })
        res.json({ message: 'Recipe deleted successfully' })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Update a recipe
export const likeRecipe = async (req, res) => {
    const { id } = req.params
    const { userId } = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No recipe with id: ${id}`)
        const recipe = await Recipe.findByIdAndRemove(id)
        const isLiked = recipe.likes.get(userId)
        /* const index = recipe.likes.findIndex((id) => id ===String(req.userId));

        if (index === -1) {
          recipe.likes.push(req.userId);
        } else {
          recipe.likes = recipe.likes.filter((id) => id !== String(req.userId));
        } */

        const updatedRecipe = await Recipe.findByIdAndUpdate(id, { likeCount: Recipe.likeCount + 1 }, { new: true })

        res.status(200).json(updatedRecipe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
