import mongoose from 'mongoose'

const ingredientSchema = mongoose.Schema(
    {

        name: { type: String, required: true, unique: true },
        categoryId: String,
        unity: String,
        image: String

    }
)

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export default Ingredient
