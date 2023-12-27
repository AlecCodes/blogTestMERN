const mongoose = require("./connection")

const {Schema, model} = mongoose

const eventSchema = new Schema({
    name: String,
    description: String,
    date: Date
})

const Event = model("events", eventSchema)

module.exports = Event