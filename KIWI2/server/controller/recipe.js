import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const getRecipes = async (req, res) => {
    connect()
    query('SELECT * FROM recipe ', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const deleteRecipe = async (req, res) => {
    connect()
    query('DELETE  FROM recipe WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}

export const getRecipe = async (req, res) => {
    connect()
    query('SELECT * FROM recipe WHERE id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, resp.rows)
        disconnect()
    })
}

export const createRecipe = async (req, res) => {
    connect()
    query('INSERT INTO recipe (proposed_title, proposed_description,user_id,preparation_time, cooking_time) VALUES ($1, $2, $3, $4, $5)', [req.body.proposed_title, req.body.proposed_description, req.body.user_id, req.body.preparation_time, req.body.cooking_time], function () {
        disconnect()
    })
}
