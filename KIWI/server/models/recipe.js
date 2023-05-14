import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema(
    {

        author: String,
        adoptedTitle: String,
        adoptedDescription: String,
        proposedTitle: String,
        proposedDecription: String,

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
        proposedImages: [String],
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
