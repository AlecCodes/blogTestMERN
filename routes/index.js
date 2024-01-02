var express = require('express');
var router = express.Router();
const Event = require("../models/event.js")

/* GET home page. */
router.get('/', async function(req, res, next) {
  //const data = await Event.find({})
  res.render('index.ejs', { title: 'Expressss'});
});

router.get('/events', async (req, res) => {
  const data = await Event.find({})
  res.render('events.ejs', {events : data})
})



module.exports = router;
