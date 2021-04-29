// see code from Ryan
var express = require('express');
var router = express.Router();

var InfoDump = require('./infoDump')

router.use("/infoDump", InfoDump)

module.exports = router;