const express = require('express');
const cors = require('cors');
const { mongoDbConnect } = require('./db/db')
const colors = require('colors')
require('dotenv').config()
const transactionRoute = require('./routes/transactions')

const planRoute = require('./routes/plan')

const app = express()


mongoDbConnect()
const PORT = process.env.PORT || 8080;


// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1', transactionRoute)

app.use('/api/v1/plan', planRoute)



const server = () => {
    app.listen(PORT, () => {
        console.log(`successfully! connected on port ${PORT}`.bgBrightGreen)
    })

}

server()

