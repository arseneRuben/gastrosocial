import dao from '../../node-pg/src/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const getRecipes = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM recipe ', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
}

export const deleteRecipe = async (req, res) => {
    dao.connect()
    dao.query('DELETE  FROM recipe WHERE id=$1', [req.params.id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
}

export const getRecipe = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM recipe WHERE id=$1', [req.params.id], (resp) => {
        writeJSONResponse(req, res, resp.rows)
        dao.disconnect()
    })
}

export const createRecipe = async (req, res) => {
    dao.connect()
    dao.query('INSERT INTO recipe (proposedtitle, proposeddescription,userid,adoptedtitle,adopteddescription,status) VALUES ($1, $2, $3, $4, $5, $6)', [req.body.proposedtitle, req.body.proposeddescription, req.body.userid, req.body.adoptedtitle, req.body.adopteddescription, req.body.status], function () {
        dao.disconnect()
    })
}
