import { connect, query, disconnect } from './daoPostGres.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const getIngredients = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM ingredient ', [], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(result.rows, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteIngredients = async (req, res) => {
    connect()
    query('DELETE  FROM ingredient WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
export const deleteIngredient = async (req, res) => {
    connect()
    query('DELETE  FROM ingredientrecipe WHERE recipeId=$1 AND ingredientId=$2', [req.params.id, req.params.ingredientId], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}

export const getIngredient = async (req, res) => {
    connect()
    query('SELECT * FROM ingredient WHERE id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, res.rows)
        disconnect()
    })
}
export const getIngredientsByRecipe = async (req, res) => {
    connect()
    query('SELECT * FROM ingredient WHERE recipeId=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, res.rows)
        disconnect()
    })
}

export const createIngredient = async (req, res) => {
    console.log('BONJOUR')
    connect()
    query('INSERT INTO ingredient (id, name, unite) VALUES ($1, $2, $3)', [req.body.id, req.body.name, req.body.unite], function () {
        disconnect()
    })
}

export const addIngredient = async (req, res) => {
    connect()
    query('INSERT INTO ingredientrecipe (ingredientId, recipeId, qte) VALUES ($1, $2, $3)', [req.body.ingredientId, req.params.id, req.body.qte], function () {
        disconnect()
    })
}
