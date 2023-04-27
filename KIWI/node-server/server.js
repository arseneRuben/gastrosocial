
'use strict'
import dao from '../node-pg/src/dao.js'
import express from 'express'

// ROUTES
import categoryRoute from './routes/category.js'
import recipeRoute from './routes/recipe.js'
import likeRoute from './routes/like.js'
import stepRoute from './routes/step.js'

import { writeJSONResponse } from './controller/util.js'

const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

const PORT = 8080
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'
const HTTP_OK = 200

// nodeFs.saveDatas(DATAS_FILE_NAME, TEST_DATA)

// Only to show node-fs-client
// CORS for development only
// https://enable-cors.org/server_expressjs.html
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Credentials', 'false')
    next()
})

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

//  categories ****************************************************************************

// ROUTE
app.use('/categories', categoryRoute)
app.use('/recipes', recipeRoute)
app.use('/likes', likeRoute)
app.use('/steps', stepRoute)

//  likes   ****************************************************************************

// methode privee *******************************************************************

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})

// etape  *******************************************************************

app.get('/etape', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM etape', [], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
})

app.post('/etape', function (request, response) {
    console.log('TYPE', typeof request.body)
    dao.connect()
    dao.query('INSERT INTO etape (recipeid, userid) VALUES ($1, $2)', [request.body.recipeid, request.body.userid], function () {
        dao.disconnect()
    })
})

app.get('/etape/:id', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM etape WHERE id=$1', [request.params.id], (result) => {
        writeJSONResponse(request, response, result.rows)
        dao.disconnect()
    })
})
app.put('/etape', function (request, response) {
    dao.connect()
    dao.query('UPDATE etape set recipeid=$1, userid=$2 WHERE id=$3', [request.body.recipeid, request.body.userid, request.body.id], function () {
        dao.disconnect()
    })
})

app.delete('/etape/:id', function (request, response) {
    dao.connect()
    dao.query('DELETE  FROM etape WHERE id=$1', [request.params.id], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
})