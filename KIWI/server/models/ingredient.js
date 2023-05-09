import mongoose from 'mongoose'

const ingredientSchema = mongoose.Schema(
    {

        name: String,
        categoryId: String,
        unity: String,
        image: String

    }
)

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export default Ingredient
