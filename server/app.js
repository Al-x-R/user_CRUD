const express = require('express')
const app = express()

app.use(express.json())
app.get('/', (req, res) => res.send('Hello from express'))

module.exports = app