
'use strict'
import mysql from 'mysql'

let connection = {}

export function connect () {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kiwidb'
    })
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to Db')
            throw err
        }
        console.log('Connection established')
    })
}

export function query (query, values, resultCallback) {
    connection.query(query, values, (error, result) => {
        if (error) {
            throw error
        }
        resultCallback(result)
    })
}
export function disconnect () {
    console.log('Connection ENDED')
    connection.end()
}
