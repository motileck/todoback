const {Schema, model} = require('mongoose');

const DiaryPropSchema = new Schema({
    date: {type: Date, required: true},
    sysPressure: {type: String, required: true},
    adPressure: {type: String, required: true},
    diaryId: {type: String, required: true},
})

module.exports = model('DiaryProp', DiaryPropSchema)