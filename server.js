// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');
var routes = require('./routes');
const app = express();

// trust first proxy for glitch?
app.set('trust proxy', 1);

// gives access to the variables in .env
require('dotenv').config()

// db string const
// const DB_STRING = "mongodb+srv://" + process.env.db_user + ":" + process.env.db_pw + "@enrollmentdatabase.cchf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DB_STRING = "mongodb+srv://dpAccess:fX8HPWFlhaOuMNtF@enrollmentdatabase.cchf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Allows for dynamic files
app.set('view engine', 'ejs');

// used in place of body parser to parse requests made by the client
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// making all the routes in "/routes" available
app.use(routes);

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// connecting to the database
mongoose.connect(DB_STRING, { useNewUrlParser: true });

// send the landing page to the client
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/infoDump.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
