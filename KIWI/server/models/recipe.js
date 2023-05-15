import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema(
    {

        author: String,
        adoptedTitle: String,
        adoptedDescription: String,
        preparationTime: {
            type: Number,
            default: 0
        },
        cookingTime: {
            type: Number,
            default: 0
        },
        proposedTitle: {
            type: String,
            required: true
        },
        proposedDescription: {
            type: String,
            required: true
        },

        likes: { type: [String], default: [] },

        ingredients: {
            type: Array,
            default: []
        },
        mainImage: String,
        portions: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        updatedAt: {
            type: Date,
            default: new Date()
        },
        comments: {
            type: Array,
            default: []
        },
        adoptedImages: {
            type: Array,
            default: []
        },
        evaluations: {
            type: Array,
            default: []
        },
        categories: {
            type: Array,
            default: []
        },
        state: {
            type: Number,
            default: 1
        },
        steps: {
            type: Array,
            default: []
        }

    }
)

const Recipe = mongoose.model('recipe', recipeSchema)

export default Recipe
