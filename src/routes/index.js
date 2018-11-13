var express = require('express');
var router = express.Router();
var classify = require('./classify');

/* GET home page. */
router.get('/api/addClass', classify.addClass);

module.exports = router;