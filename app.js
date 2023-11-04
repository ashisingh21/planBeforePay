const express = require('express');
const cors = require('cors');
const { mongoDbConnect } = require('./db/db')
require('dotenv').config()

const app = express()


mongoDbConnect()
const PORT = process.env.PORT || 8080;


// middlewares
app.use(express.json())
app.use(cors())

// routes

app.get('/hello', (req, res) => {
    res.send('woghohohohoohohhohoho')
})

const server = () => {
    app.listen(PORT, () => {

        console.log(`successfully! connected on port ${PORT}`)
    })

}

server()

