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
/*
client.query('SELECT * FROM nodepg', (error, result) => {
    if (error) {
        throw error
    }

    console.log('datas.rows')
    module.exports = result
    client.end()
})
*/
function saveDatas (datas) {
    client.query('INSERT INTO nodepg() Values()', (error, result) => {
        if (error) {
            throw error
        }

        console.log('datas.rows')
        client.end()
    })
}

function readDatas () {
    // const datas = {}
    client.query('SELECT * FROM nodepg', (error, result) => {
        if (error) {
            throw error
        }

        // console.log(result.rows)
        return result.rows
    })
}

function readData (fileName, id) {
    const datas = readDatas(fileName)

    const index = findIndex(datas, id)

    return datas[index]
}

function addData (fileName, data) {
    const datas = readDatas(fileName)

    datas.forEach(element => {
        if (element.id === data.id) {
            throw new Error('Element already exists')
        }
    })

    datas.push(data)
    saveDatas(fileName, datas)
}

function updateData (fileName, data) {
    const datas = readDatas(fileName)

    const index = findIndex(datas, data.id)

    datas[index] = data

    saveDatas(fileName, datas)
}

function findIndex (datas, id) {
    const index = datas.findIndex(function (element) {
        return element.id === parseInt(id)
    })

    if (index === -1) {
        throw new Error('Element not found')
    }

    return index
}

module.exports = {
    readDatas,
    readData,
    saveDatas,
    addData,
    updateData
}
