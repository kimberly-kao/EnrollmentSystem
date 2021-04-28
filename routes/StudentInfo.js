// route responsible for the database dump
var express = require('express');

var router = express.Router();
const app = express();

app.set('view engine', 'ejs');

var Student = require('../schema/StudentSchema');

router.get('/', getStudent, render);

function getStudent(req, res, next){
    Student.find({}, function (err, students) {
        console.log(students);
        res.locals.student = students;
        next();
    });
};

function render(req, res){
    res.render("index.ejs");
};

module.exports = router;