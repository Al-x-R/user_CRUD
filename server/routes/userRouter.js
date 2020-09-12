const express = require('express')
const {createUser, getUser, getAllUsers, updateUser, removeUser} = require('./../controllers/userController')
const {validateUserForUpdate} = require('./../middleware/userValidation')


const userRouter = express.Router()

userRouter.post('/user', createUser)
userRouter.get('/users/:userId', getUser)
userRouter.get('/users', getAllUsers)
userRouter.patch('/users/:userId', validateUserForUpdate, updateUser)
userRouter.delete('/users/:userId', removeUser)


module.exports = userRouter