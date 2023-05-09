import { connect, query, disconnect } from '../connectors/daoPostGres.js'
import { CONTENT_TYPE_JSON, HTTP_OK } from './util.js'

export const createImage = async (req, res) => {
    try {
        connect()
        console.log(req.body.file_name, false, req.body.recipe_id, req.body.user_id)
        /* query('INSERT INTO image (file_name, recipe_id, user_id) VALUES ($1, $2, $3)', [req.body.file_name, req.body.recipe_id, req.body.user_id], function () {
            disconnect()
        }) */
        disconnect()
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getImages = async (req, res) => {
    try {
        connect()
        query('SELECT * FROM image  WHERE recipe_id=$1', [req.params.recipe_id], (resp) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            res.end(JSON.stringify(resp, null, 4))

            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteImage = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM image WHERE recipe_id=$1 AND id=$2', [req.params.id, req.params.image_id], (result) => {
            req.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteImages = async (req, res) => {
    try {
        connect()
        query('DELETE  FROM image WHERE  recipe_id=$1', [req.params.id], (result) => {
            res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
            disconnect()
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
