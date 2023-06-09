import { connect, query, disconnect } from '../connectors/daoPostGres.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const getRecipes = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM recipe ', [], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(result.rows, null, 4))
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM recipe WHERE id=$1', [req.params.id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const findRecipeByTitle = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM recipe WHERE adopted_title=$1 OR proposed_title=$1', [req.params.title], (resp) => {
            writeJSONResponse(req, res, resp.rows)
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getRecipe = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM recipe WHERE id=$1', [req.params.id], (resp) => {
            writeJSONResponse(req, res, resp.rows)
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createRecipe = async (req, res) => {
    try {
        connect()
        query('INSERT INTO recipe (proposed_title, proposed_description,user_id,preparation_time,cooking_time,portions) VALUES ($1, $2, $3, $4, $5,$6) RETURNING id', [req.body.proposed_title, req.body.proposed_description, req.body.user_id, req.body.preparation_time, req.body.cooking_time, req.body.portions], function () {
            disconnect()
        })
        //   return res.row[0].id
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const updateRecipe = async (req, res) => {
    try {
        connect()
        query('UPATE  recipe SET proposed_title= $1 , proposed_description=$2,user_id=$3,preparation_time=$4,cooking_time=$5,portions=$6 WHERE id=$7', [req.body.proposed_title, req.body.proposed_description, req.body.user_id, req.body.preparation_time, req.body.cooking_time, req.body.portions, req.body.id], function () {
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
