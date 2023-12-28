const express = require('express')
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")

router.get("/", (req,res) => {
    res.send("UESRRR RIOUTTEE")
})

router.post("/signup" , async (req,res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    try {
        const user = await User.create(req.body)
        res.status(201).json({message: "USER CREATED "+ user})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Bad errorrrrr"})
    }

})

module.exports = router
