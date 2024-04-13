const User = require("../models/userModel")
const generateToken = require("../config/generateToken")

async function createUser(req, res) {
    console.log(req.body);
    const { name, email, Password } = req.body;
    if (!name || !email || !Password) {
        res.status(400);
        throw new Error("Missing Fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("user exists!!");
    }

    const newUser = await User.create({
        name,
        email,
        Password,
        
    });

    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token:generateToken(newUser._id)
        })
    } else {
        res.status(400);
        throw new Error("Failed to craete new User")
    }
}

async function authUser(req, res) {
    const { email, Password } = req.query;
    console.log(email,Password,req.query)
    if (!email || !Password) {
        res.status(400);
        throw new Error("insufficient fields");
    }

    const user = await User.findOne({ email });

    if (user && await user.matchPassword(Password)) {
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            token:generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Authentication Failed")
    }

}

module.exports = { createUser, authUser };