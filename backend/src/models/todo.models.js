const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subtodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subtodo'
        }
    ]
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo