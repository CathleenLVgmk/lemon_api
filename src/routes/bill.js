var express = require('express');
var router = express.Router();
var bill = require('./loglist');


router.post('/api/addBill', bill.addBill);
router.get('/api/delBill', bill.delBill);
router.get('/api/showBill', bill.showBill);
module.exports = router;