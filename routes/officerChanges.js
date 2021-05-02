// route responsible for the database dump
var express = require('express');

var router = express.Router();
const app = express();

app.set('view engine', 'ejs');

var OfficerChanges = require('../schema/OfficerChangesSchema');

router.get('/', getOfficerChanges, render);

function getOfficerChanges(req, res, next){
    OfficerChanges.find({}, function (err, changes) {
        console.log(changes);
        res.locals.change = changes;
        next();
    });
};


function render(req, res){
    res.render("../views/infoDump.ejs");
};


module.exports = router;