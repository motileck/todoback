const {Schema, model} = require('mongoose');

const TableSchema = new Schema({
    typeAnalysis: {type:String, required: true},
    date: {type: Date, required: true},
    userid: {type: String, required: true},
})

module.exports = model('Table', TableSchema)