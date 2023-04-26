import dao from '../../node-pg/src/dao.js'

const CONTENT_TYPE_JSON = 'application/json'
const HTTP_OK = 200

export const getCategories = async (req, res) => {
    dao.connect()
    dao.query('SELECT * FROM Category', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(res.rows, null, 4))
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
        resp.writeJSONResponse(req, res, res.rows)
        dao.disconnect()
    })
}
