const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000


const data = {
    "cities": [
        "Kathmandu",
        "Pokhara",
        "Lalitpur",
        "Bhaktapur",
        "Biratnagar"
    ]
}

app.get('/', (req, res) => {
    res.send("We are running")
})
app.get('/city', (req, res)=>{
    res.json(data)
})

app.listen(port, () => {
    console.log(`backend is running of localhost:${port}`)
})