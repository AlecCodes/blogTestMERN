const express = require('express')
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")

router.get("/", (req,res) => {
    res.send("UESRRR RIOUTTEE")
})

router.get("/login" , (req, res) => {
  res.render('login.ejs', {title: "logins"})
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

router.post("/login", async (req,res) => {
  const {username , password} = req.body
  const user = await User.findOne({username})
  if (!user){
    res.send("USER DOES NOT EXIST")
  } else {
    const result = bcrypt.compareSync(password, user.password)
    if (result){
      req.session.username = username
      //verify loggedIn in authentication middleware to protect admin route?
      req.session.loggedIn = true
      console.log("ARE YOU LOGGED IN? " + req.session.loggedIn)
      res.redirect('/admin/createEvent')
      //PUT REDIRECTS HERE!
    } else {
      res.send("WRONG PASSWORD")
    } 
  }
})

router.get("/logout", (req,res) => {
  req.session.destroy((err) => {
    res.render("logout.ejs")
  })
})

module.exports = router
