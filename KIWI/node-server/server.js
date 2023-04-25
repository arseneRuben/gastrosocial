'use strict'
const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'structure_logicielle',
    user: 'postgres',
    password: 'postgres'
})

client.connect((error) => {
    if (error) {
        console.error('connexion error', error.stack)
    } else {
        console.log('connected')
    }
})

const express = require('express')

const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

const dao = require('../node-pg/src/dao')

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

app.get('/datas', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM Category', [], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        response.end(JSON.stringify(result.rows, null, 4))
        dao.disconnect()
    })
})

app.get('/datas/:id', function (request, response) {
    dao.connect()
    dao.query('SELECT * FROM Category WHERE id=$1', [request.params.id], (result) => {
        writeJSONResponse(request, response, result.rows)
        dao.disconnect()
    })
})

app.post('/datas', function (request, response) {
    console.log('TYPE', typeof request.body)
    dao.connect()
    dao.query('INSERT INTO Category (name, description) VALUES ($1, $2)', [request.body.name, request.body.description], function () {
        dao.disconnect()
    })
})

app.put('/datas', function (request, response) {
    dao.connect()
    dao.query('UPDATE Category set name=$1, description=$2  WHERE id=$3', [request.body.name, request.body.description, request.body.id], function () {
        dao.disconnect()
    })
})

app.delete('/datas/:id', function (request, response) {
    dao.connect()
    dao.query('DELETE  FROM Category WHERE id=$1', [request.params.id], (result) => {
        response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        dao.disconnect()
    })
})

function writeJSONResponse (request, response, result) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
    response.end(JSON.stringify(result, null, 2))
}

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
