var express = require('express');
var router = express.Router();
//const Event = require("../models/event.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressss' });
});



module.exports = router;
