const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`connected to ${conn.connection.host}`)
    } catch (err) {
        console.log(`Error: ${err}`);
        process.exit()
    }
}

module.exports = connectDB;