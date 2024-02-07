const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User')
const { registerValidation, Validation, loginValidation } = require('../Middlewares/Validation')
const { isAuth } = require('../Middlewares/isAuth')

const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,SignUp)

userRouter.post('/SignIn',loginValidation,Validation,SignIn)

userRouter.get('/ConnectedUser',isAuth,(req,res)=>{res.send(req.user)})

module.exports = userRouter