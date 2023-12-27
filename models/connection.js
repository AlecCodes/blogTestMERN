require('dotenv').config()
const mongoose = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL)

mongoose.connection
    .on("open" , () => console.log("CONNECTED TO MONGOOSE XD"))
    .on("close" , () => console.log("CONNECTION BROKE NOoo"))
    .on("error", (error) => console.log(error))


module.exports = mongoose