import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'

import dotenv from 'dotenv'
import recipeRoutes from './routes/noSql/recipes.js'
import categoryRoutes from './routes/noSql/categories.js'
import ingredientRoutes from './routes/noSql/ingredients.js'
import multer from 'multer'
import uploadFile from './routes/uploads.js'

const app = express()
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

/* FILE STORAGE */
const DIR = 'public/assets'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname
        cb(null, `${fileName}`)
    }
})
const upload = multer({
    storage
    /*,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    } */
})

/* ROUTES */
app.use('/ingredients', ingredientRoutes)
app.use('/recipes', recipeRoutes)
app.use('/categories', categoryRoutes)
app.post('/upload_file', upload.single('file'), uploadFile)// sigle file upload
app.get('/download/:filename', (req, res) => {
    res.sendFile(req.params.filename, { root: path.join('', DIR) })
})

/* CONFIGURATIONS */

dotenv.config({ path: './config/.env' })

/* MONGOOSE SETUP */

const CONNECTION_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 8000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
        /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
    })

    .catch((error) => console.log(`${error} did not connect`))
