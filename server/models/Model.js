const mongoose = require('mongoose')
const { Schema } = mongoose


const modelSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        data: Buffer,
        type: String,
        default: ''
        },
    createdAt: {
        type: Date,
        default: new Date
    }
})

const Model = mongoose.model('Model', modelSchema)

module.exports = Model