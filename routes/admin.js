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

router.get('/createEvent', (req,res) => {
    res.render('createEvent.ejs')
})

router.post('/createEvent' , async (req, res) => {

    try {
        console.log(req.body)
        const event = await Event.create(req.body)
        res.redirect('/')

    } catch(error){
        console.error(error)
        res.status(500).json({error: "Bad error omg"})
    }

})

module.exports = router;