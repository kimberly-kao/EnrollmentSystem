// route responsible for the database dump
var express = require('express');

var router = express.Router();
const app = express();

app.set('view engine', 'ejs');

var AdmissionsOfficer = require('../schema/AdmissionsOfficerSchema');

router.get('/', getAdmissionsOfficer, render);

function getAdmissionsOfficer(req, res, next){
    AdmissionsOfficer.find({}, function (err, admisOfficers) {
        console.log(admisOfficers);
        res.locals.admis = admisOfficers;
        next();
    });
};

function render(req, res){
    res.render("../views/administrator_login.html");
};

module.exports = router;