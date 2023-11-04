const mongoose = require('mongoose')

const ExpanseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "Expanse"
    },
    date: {
        type: Date,
        default: Date.now

    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,
    },

}, { timestamps: true })

module.exports = mongoose.model('Expanse', ExpanseSchema)