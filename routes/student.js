var express = require('express');

var router = express.Router();
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

var Student = require('../schema/StudentSchema');

// Get all students & info in the DB
router.get('/', getStudents, render);

    function getStudents(req, res, next){
        Student.find({}, function (err, student) {
            console.log(student);
            console.log("Testing")
            res.locals.student = student;
            next();
        });
    };

    function render(req, res){
        res.render("../views/profiles.ejs");
    };



// Get info for a single student based on _id for admissions
router.post('/detail/', getStudentDetails, renderAdmisStudentView);

    function getStudentDetails (req, res, next){
       
        Student.findOne({_id: req.body._id}, function(err, student_details){
            res.locals.student_details = student_details;
            console.log(student_details);
            res.send();
            
        });
        //Student.findById(req.params.id);

        next();
    }

    function renderAdmisStudentView(req, res){
        //res.render('"../views/admisStudentView.ejs", { id: _id});
        res.render("../views/admisStudentView.ejs");
    }






// Get info for a single student based on _id for applicant
router.post('/mine', getStudentDetails, renderStudentView);

    function renderStudentView(req, res){
        res.render("../views/studentview.ejs");
    }

// Admissions send decision for student, this will update the whole thing not just the one attribute I wanted
router.patch('/admisDecision/:id', updateDecision, renderAdmisStudentView);

    function updateDecision (req, res, next){
/*
        try {
            await Student.findByIdAndUpdate(req.params.id, req.body);
            await Student.save();
            res.send(food);
          } catch (error) {
            res.status(500).send(error);
          }
        }
*/
        next();       
    }

// Applicant send decision on admission, this will update the whole thing not just the one attribute I wanted
router.patch('/appDecision/:id', updateEnrollment, renderStudentView);
    
        function updateEnrollment (req, res, next){
    /*
            try {
                await Student.findByIdAndUpdate(req.params.id, req.body);
                await Student.save();
                res.send(food);
              } catch (error) {
                res.status(500).send(error);
              }
            */
            next();   
        }

// create a new applicant
router.post('/application', createStudent, returnToLogIn);
    
        function createStudent (req, res, next){
/*
            const newStudent = new Student(req.body);
            try {
                await newStudent.save();
                res.send(newStudent);
            } catch (error) {
                res.status(500).send(error);
            }
            */
            next();     
        }

        function returnToLogIn (req, res){
            res.render("../views/student_login.html");   
        }

module.exports = router;