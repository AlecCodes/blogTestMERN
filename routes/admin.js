const express = require("express")
const router = express.Router()
const Event = require("../models/event")

router.get("/", (req, res) => {
    res.json("YOOOOOOO ADMIN")
})

module.exports = router;