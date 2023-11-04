const mongoose = require('mongoose')
require('dotenv').config()

const mongoDbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connection to db successful'.bgBrightYellow)
    } catch (error) {
        console.log(error)
    }

}

module.exports = { mongoDbConnect }

