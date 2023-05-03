
'use strict'
import express from 'express'

// ROUTES
import categoryRoute from './routes/category.js'
import recipeRoute from './routes/recipe.js'
import likeRoute from './routes/like.js'
import ingredientRoute from './routes/ingredient.js'
const app = express()

const PORT = 8000
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
    response.header('Access-Control-Allow-Credentials', 'true')
    next()
})

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

//  categories ****************************************************************************

// ROUTE
app.use('/categories', categoryRoute)
app.use('/recipes', recipeRoute)
app.use('/likes', likeRoute)
app.use('/ingredients', ingredientRoute)

// methode privee *******************************************************************

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
