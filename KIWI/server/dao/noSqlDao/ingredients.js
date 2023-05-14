import mongoose from 'mongoose'
import Ingredient from '../../models/ingredient.js'
// Collect all ingredients from the database
export const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        res.status(200).json(ingredients)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Create a ingredient
export const createIngredient = async (req, res) => {
    const ing = req.body
    ing.image = ing.image.split('\\')[2]
    const newIngredient = new Ingredient(ing)
    try {
        await newIngredient.save()

        res.status(201).json(newIngredient)
    } catch (error) {
        res.status(409n).json({ message: error.message })
    }
}

// Update a recipe
export const upadateIngredient = async (req, res) => {
    const { id } = req.params
    const { name, description, image } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ingredient with id: ${id}`)
    const updatedImage = image.split('\\')[2]
    console.log(updatedImage)
    const updatedIng = { name, description, updatedImage, _id: id }

    await Ingredient.findByIdAndUpdate(id, updatedIng, { new: true })

    res.json(updatedIng)
}

// Update a ingredient
export const getIngredient = async (req, res) => {
    const { id } = req.params

    try {
        const ingredient = await Ingredient.findById(id)

        res.status(200).json(ingredient)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Update a ingredient
export const deleteIngredient = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No ingredient with id: ${id}`)
    await Ingredient.findByIdAndRemove(id)
    res.json({ message: 'Ingredient deleted successfully' })
}
