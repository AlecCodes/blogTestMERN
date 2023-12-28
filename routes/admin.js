const express = require("express")
const router = express.Router()
const Event = require("../models/event")

router.get("/", (req, res) => {
    res.json("YOOOOOOO ADMIN")
})

router.get("/index", async (req, res) => {
    try{
        const events = await Event.find({})
        res.json(events)
    } catch (error){
        console.error(error)
        res.status(500).json({error:"BAD ERROR NOO"})
    }
})

router.post('/' , async (req, res) => {

    try {
        const event = await Event.create(req.body)
        res.status(201).json({message : 'event created successfully: ' + event})
    } catch(error){
        console.error(error)
        res.status(500).json({error: "Bad error omg"})
    }

})

module.exports = router;