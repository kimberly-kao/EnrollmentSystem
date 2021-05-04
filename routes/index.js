// see code from Ryan
var express = require('express');
var router = express.Router();

var InfoDump = require('./infoDump')
var Student = require('./student')
var Officer = require('./admissions')
var OfficerChanges = require('./officerChanges')

router.use("/infoDump", InfoDump)
router.use("/student", Student)
router.use("/admissions", Officer)
router.use("/changes", OfficerChanges)

module.exports = router;