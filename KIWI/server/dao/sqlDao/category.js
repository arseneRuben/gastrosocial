import { connect, query, disconnect } from '../connectors/daoPostGres.sql'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createCategory = async (req, res) => {
    connect()
    query('INSERT INTO Category (name, description) VALUES ($1, $2)', [req.body.name, req.body.description], function () {
        disconnect()
    })
}

export const getCategories = (req, res) => {
    console.log('go')
    connect()
    query('SELECT * FROM Category', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const deleteCategory = async (req, res) => {
    connect()
    query('DELETE  FROM Category WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}

export const getCategory = async (req, res) => {
    connect()
    query('SELECT * FROM Category WHERE id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, res.rows)
        disconnect()
    })
}
