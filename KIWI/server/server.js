
'use strict'
import express from 'express'

import cors from 'cors'

// import cors from 'cors'

// ROUTES
import recipeRoute from './routes/sql/recipe.js'
import categoryRoute from './routes/sql/category.js'
import ingredientRoute from './routes/sql/ingredient.js'

const app = express()
app.use(cors())

const PORT = 8000
const CONTENT_TYPE_HTML = 'text/html'
const HTTP_OK = 200

/* FILE STORAGE */
// const DIR = './public/assets'

/* const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, fileName)
    }
}) */
/* const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    }
}) */

// Only to show node-fs-client
// CORS for development only
// https://enable-cors.org/server_expressjs.html
// app.use(function (request, response, next) {
//     response.header('Access-Control-Allow-Origin', '*')
//     response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//     response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS, HEAD')
//     response.header('Access-Control-Allow-Credentials', 'true')
//     next()
// })

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// parse application/json
app.use(express.json())

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

//  categories ****************************************************************************

// ROUTES
app.use('/recipes', recipeRoute)
// app.use('/likes', likeRoute)
app.use('/ingredients', ingredientRoute)
app.use('/categories', categoryRoute)

// methode privee *******************************************************************

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
