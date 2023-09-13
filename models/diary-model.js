const {Schema, model} = require('mongoose');

const DiarySchema = new Schema({
    date: {type: Date, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    userid: {type: String, required: true}
})

module.exports = model('Diary', DiarySchema)