const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const StudentUser = require('./schema/StudentSchema')

const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

const app = express();
var routes = require('./routes');

// trust first proxy for glitch?
app.set('trust proxy', 1);

// gives access to the variables in .env
require('dotenv').config()

// db string const
// const DB_STRING = "mongodb+srv://" + process.env.db_user + ":" + process.env.db_pw + "@enrollmentdatabase.cchf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DB_STRING = "mongodb+srv://dbAccess:oWMW6HAZPeR6SCnh@enrollmentdatabase.cchf4.mongodb.net/Enrollment?retryWrites=true&w=majority";

// Allows for dynamic files
app.set('view engine', 'ejs');

// used in place of body parser to parse requests made by the client
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json())

// making all the routes in "/routes" available
app.use(routes);

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.post('/api/register', async (req, res) => {
  
  console.log(req.body)
  const { Username, Password } = req.body

  if (!Username || typeof Username !== 'string'){
    return res.json ({ status: 'error', error: 'Invaild Username'})
  }

  if (!Password || typeof Password !== 'string'){
    return res.json ({ status: 'error', error: 'Invaild Password'})
  }

  if (Password.length < 5){
    return res.json ({ status: 'error', error: 'Password must be at least 6 characters'})
  }

  res.json({status : 'ok'})

  try{
    const response = await StudentUser.create({
      Username,
      Password
    })
    console.log("User created sucessfully: ", response)
  } catch(error) {
    if (error.code === 11000) {
      //Duplicate Key
      return res.json({ status: 'error', error: 'Username already in use'})
    }
    throw error
  }

})

// connecting to the database
mongoose.connect(DB_STRING, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
});

// send the landing page to the client
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/student_login.html");
});

app.get('/studentLogin', function (request, response) {
  response.sendFile(__dirname + "/views/student_login.html");
});

app.get('/admisLogin', function (request, response) {
  response.sendFile(__dirname + "/views/administrator_login.html");
});

app.get('/addStudent', function (request, response) {
  response.render(__dirname + "/views/addStudent.ejs");
});

app.get('/forgotPassword', function (request, response) {
  response.sendFile(__dirname + "/views/forgot_password.html");
});

app.get('/studentView', function (request, response) {
  response.render(__dirname + "/views/studentview.ejs");
});

app.get('/AdmisStudentView', function (request, response) {
  response.render(__dirname + "/views/admisStudentView.ejs");
});

app.get('/studentProfiles', function (request, response) {
  response.render(__dirname + "/views/profiles.ejs");
});

app.get('/test', function (request, response) {
  response.render(__dirname + "/views/infoDump.ejs");
});

// listen for requests
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
