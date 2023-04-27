import dao from '../../node-pg/src/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createStep = async (req, res) => {
    dao.connect()
    dao.query('INSERT INTO steps (recipeId, description, stepNumber) VALUES ($1, $2, $3)', [req.body.recipeId, req.body.description, req.body.stepNumber], function () {
        dao.disconnect()
    })
}

export const getSteps = async (req, res) => {
    dao.connect()
    dao.query('SELECT COUNT(*) FROM steps  WHERE recipeId=$1', [req.params.id], (resp) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(resp, null, 4))

        dao.disconnect()
    })
}

export const deleteSteps = async (req, res) => {
    dao.connect()
    dao.query('DELETE  FROM steps WHERE recipeId=$1', [req.params.recipeId], (result) => {
        req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
}

export const deleteStep = async (req, res) => {
    dao.connect()
    dao.query('DELETE  FROM steps WHERE recipeId=$1 AND recipeId=$2', [req.params.recipeId, req.params.stepNumber], (result) => {
        req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
}
