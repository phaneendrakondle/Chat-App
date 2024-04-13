const express = require("express");
const { createUser } = require("../Controllers/userController")
const userRouter = express.Router();

userRouter.post(createUser)

module.exports = userRouter;