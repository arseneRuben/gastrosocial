import dao from '../../node-pg/src/dao.js'

const CONTENT_TYPE_JSON = 'application/json'
const HTTP_OK = 200

export const getRecipes = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM recipe', [], (result) => {
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
        resp.writeJSONResponse(req, res, res.rows)
        dao.disconnect()
    })
}
