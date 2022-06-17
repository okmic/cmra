
const path = require('path')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const db = require('./../settings/db.js')
const response = require('./../settings/response.js')

exports.all = async (req, res) => {
    try {
        const data = await db.all('SELECT * FROM `data`')
        console.log(data)
        response.status(data, res)
    }
    catch (e) {
        console.error(e)
    }
}
