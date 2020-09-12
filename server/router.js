const express = require('express')
const userRouter = require('./routes/userRouter')
const router = express.Router()

router.use(userRouter)

module.exports = router