import dao from '../../node-pg/src/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const getIngredients = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM ingredient ', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
}

export const deleteIngredient = async (req, res) => {
    dao.connect()
    dao.query('DELETE  FROM ingredient WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
}

export const getIngredient = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM ingredient WHERE id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, res.rows)
        dao.disconnect()
    })
}

export const createIngredient = async (req, res) => {
    dao.connect()
    dao.query('INSERT INTO ingredient (id, name, categoryId) VALUES ($1, $2, $3)', [req.body.id, req.body.name, req.body.categoryId], function () {
        dao.disconnect()
    })
}
