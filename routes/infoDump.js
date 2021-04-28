// route responsible for the database dump
var express = require('express');

var router = express.Router();
const app = express();

app.set('view engine', 'ejs');

var Student = require('../schema/StudentSchema');
var AdmissionsOfficer = require('../schema/AdmissionsOfficerSchema');
var OfficerChanges = require('../schema/OfficerChangesSchema');

router.get('/', getStudent, getAdmissionsOfficer, getOfficerChanges, render);

function getStudent(req, res, next){
    Student.find({}, function (err, students) {
        console.log(students);
        res.locals.student = students;
        next();
    });
};

function getAdmissionsOfficer(req, res, next){
    Student.find({}, function (err, admisOfficers) {
        console.log(admisOfficers);
        res.locals.admis = admisOfficers;
        next();
    });
};

function getOfficerChanges(req, res, next){
    Student.find({}, function (err, changes) {
        console.log(changes);
        res.locals.change = changes;
        next();
    });
};

function render(req, res){
    res.render("infoDump.ejs");
};

module.exports = router;