
'use strict'

const mysql = require('mysql')

export function query (query, values, resultCallback) {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kiwidb'
    })
    pool.getConnection((err, connection) => (req, res) => {
        if (err) throw err

        connection.query(query, (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from beer table are: \n', rows)
        })
    })
}
