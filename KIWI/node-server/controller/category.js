import dao from '../../node-pg/src/dao.js'
import { writeJSONResponse } from './util.js'
const CONTENT_TYPE_JSON = 'application/json'
const HTTP_OK = 200

export const createCategory = async (req, res) => {
    dao.connect()
    dao.query('INSERT INTO Category (name, description) VALUES ($1, $2)', [req.body.name, req.body.description], function () {
        dao.disconnect()
    })
}

export const getCategories = (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM Category', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
}

export const deleteCategory = async (req, res) => {
    dao.connect()
    dao.query('DELETE  FROM Category WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
}

export const getCategory = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM Category WHERE id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, res.rows)
        dao.disconnect()
    })
}
