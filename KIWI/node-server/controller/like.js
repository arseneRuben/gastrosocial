import dao from '../../node-pg/src/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createLike = async (req, res) => {
    dao.connect()
    dao.query('INSERT INTO likes (recipeid, userid) VALUES ($1, $2)', [req.body.recipeid, req.body.userid], function () {
        dao.disconnect()
    })
}

export const getLikes = async (req, res) => {
    dao.connect()
    dao.query('SELECT COUNT(*) FROM likes  WHERE recipeId=$1', [req.params.id], (resp) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(resp, null, 4))

        dao.disconnect()
    })
}
/*
app.get('/likes', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM likes', [], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
})

app.get('/likes/:id', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM likes WHERE id=$1', [request.params.id], (result) => {
        writeJSONResponse(request, response, result.rows)
        dao.disconnect()
    })
})
app.put('/likes', function (request, response) {
    dao.connect()
    dao.query('UPDATE likes set recipeid=$1, userid=$2 WHERE id=$3', [request.body.recipeid, request.body.userid, request.body.id], function () {
        dao.disconnect()
    })
})

app.delete('/likes/:id', function (request, response) {
    dao.connect()
    dao.query('DELETE  FROM likes WHERE id=$1', [request.params.id], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
})

//  Recipe   ****************************************************************************
app.get('/likes', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM likes', [], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
})

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
*/
