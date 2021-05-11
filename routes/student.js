// route responsible for the database dump
var express = require('express');

var router = express.Router();
const app = express();

app.set('view engine', 'ejs');

var Student = require('../schema/StudentSchema');

router.get('/', getStudents, render);

function getStudents(req, res, next){
    Student.find({}, function (err, student) {
        console.log(student);
        res.locals.student = student;
        next();
    });
};

function render(req, res){
    res.render("../views/profiles.ejs");
};

router.get('/', getStudent, render);

function getStudent(req, res, next){
    Student.find({}, function (err, student) {
        console.log(student);
        res.locals.student = student;
        next();
    });
};

function render(req, res){
    res.render("../views/profiles.ejs");
};


router.post('/detail', getStudentDetails, renderStudentView);

function getStudentDetails (req, res, next){
    Student.findOne({_id: req.body._id}, function(err, student_details){
        res.locals.student = student_details;
        res.send(res.locals);
    });
}

function renderStudentView(req, res){
    res.render("../views/studentview.ejs");
}

module.exports = router;