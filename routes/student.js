var express = require('express');

var router = express.Router();
const app = express();

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

// Admissions send decision for student
router.post('/admisDecision', getStudentDetails, updateDecision, renderAdmisStudentView);

    function updateDecision (req, res, next){

        // Write to Student.ApplicationStatus according to input: waitlist, accept or denied

        next();       
    }

// Applicant send decision on admission
router.post('/admisDecision', getStudentDetails, updateEnrollment, renderStudentView);
    
        function updateEnrollment (req, res, next){
    
            // Write to Student.Response according to input: accept or denied
            
            next();   
        }

// create a new applicant
router.post('/application', createStudent, returnToLogIn);
    
            async function run() {

                try {
            
                await client.connect();
                
                    const database = client.db("sample_mflix");
                
                    const movies = database.collection("movies");
                
                    // create a document to be inserted
                
                    const doc = { name: "Red", town: "kanto" };
                
                    const result = await movies.insertOne(doc);
                
                    console.log(
                
                        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
                
                    );
            
                } finally {
            
                    await client.close();
            
                }
            
            }
        function createStudent (req, res, next){
    
            
            
            next();     
        }

        function returnToLogIn (req, res){
            res.render("../views/student_login.html");   
        }

module.exports = router;