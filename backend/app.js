const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { createUser, authUser } = require("./Controllers/userController");
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());

app.post("/api/v1/user", createUser);

app.get("/api/v1/auth", authUser);

app.listen(PORT, console.log(`app listening on port ${PORT}`))