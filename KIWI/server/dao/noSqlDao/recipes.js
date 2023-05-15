import mongoose from 'mongoose'
import Recipe from '../../models/recipe.js'
import Category from '../../models/category.js'
import Ingredient from '../../models/ingredient.js'

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
    console.log(newRecipe)
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

// Get all the categories of a recipe
export const getRecipeCategories = async (req, res) => {
    const { id } = req.params
    try {
        const recipe = await Recipe.findById(id)

        const categories = await Promise.all(
            recipe.categories.map((catId) => Category.findById(catId))
        )

        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// Get all the ingredients of a recipe
export const getRecipeIngredients = async (req, res) => {
    const { id } = req.params
    try {
        const recipe = await Recipe.findById(id)
        const results = new Map()

        const ingredients = await Promise.all(
            recipe.ingredients.map((ingId, name, qte, selected) => Ingredient.find({ name }))
        )
        /* ingredients.map((ing) => {
            results.set(ing._id, )
        }) */
        console.log(ingredients)
        res.status(200).json(ingredients)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// Update a recipe
export const deleteRecipe = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No recipe with id: ${id}`)
        await Recipe.findByIdAndRemove(id)
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
