const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send("We are running")
})

app.listen(port, () => {
    console.log(`backend is running of localhost:${port}`)
})