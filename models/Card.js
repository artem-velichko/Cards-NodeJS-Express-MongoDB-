const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

module.exports = model('Card', schema)