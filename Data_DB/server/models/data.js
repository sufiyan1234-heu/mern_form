const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
    name: String,
    email: String
})

const Data = mongoose.model('data', DataSchema)
module.exports = Data;