const mongoose = require('mongoose')


const CategoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('category',CategoryModel)