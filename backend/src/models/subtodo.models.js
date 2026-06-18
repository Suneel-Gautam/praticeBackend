const mongoose = require('mongoose')

const subtodoSchema = mongoose.Schema({
    content: {
        type: String
    },
    isCompleted: {
        type: Boolean
    },
})

const Subtodo = mongoose.model('Subtodo', subtodoSchema)

module.exports = Subtodo