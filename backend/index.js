const express = require('express')
require('dotenv').config()
// const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000


// so we use this cors() middleware when we have to manage from the backend server which url to provide 
// app.use(cors())





app.get('/', (req, res) => {
    res.send("We are running")
})
app.get('/api/city', (req, res) => {
    const data = [
        {
            "id": 1,
            "name": "Kathmandu",
            "description": "The capital city of Nepal, known for its cultural heritage and historic temples."
        },
        {
            "id": 2,
            "name": "Pokhara",
            "description": "A beautiful lakeside city famous for adventure tourism and mountain views."
        },
        {
            "id": 3,
            "name": "Lalitpur",
            "description": "Also called Patan, known for its traditional art, architecture, and craftsmanship."
        },
        {
            "id": 4,
            "name": "Bhaktapur",
            "description": "A historic city celebrated for its preserved medieval culture and monuments."
        },
        {
            "id": 5,
            "name": "Biratnagar",
            "description": "One of Nepal's largest industrial and commercial centers."
        },
        {
            "id": 6,
            "name": "Birgunj",
            "description": "A major trade and business gateway connecting Nepal with India."
        },
        {
            "id": 7,
            "name": "Butwal",
            "description": "A rapidly growing commercial city in western Nepal."
        },
        {
            "id": 8,
            "name": "Dharan",
            "description": "A vibrant city known for its diverse culture and pleasant climate."
        },
        {
            "id": 9,
            "name": "Janakpur",
            "description": "A religious and cultural city associated with Goddess Sita."
        },
        {
            "id": 10,
            "name": "Nepalgunj",
            "description": "An important transportation and business hub in western Nepal."
        }
    ]
    res.json(data)
})

app.listen(port, () => {
    console.log(`backend is running of localhost:${port}`)
})