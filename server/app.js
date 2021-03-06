const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())

app.use(router)

app.use((err, req, res, next) => {
    res.status(err.status ?? 500).send({
        message: err.message,
    })
})

app.get('/', (req, res) => res.send('Hello from express'))

module.exports = app