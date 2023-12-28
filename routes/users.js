const express = require('express')
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")

router.get("/", (req,res) => {
    res.send("UESRRR RIOUTTEE")
})

module.exports = router
