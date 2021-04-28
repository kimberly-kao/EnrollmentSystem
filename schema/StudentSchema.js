const mongoose = require("mongoose");

// building the schema
const StudentSchema = new mongoose.Schema({
    Username: { type: String },
    Password: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    MiddleName: { type: String },
    Birthday: { type: Number },
    Gender: { type: Boolean },
    StudentAddress: { type: Boolean },
    Semester: { type: String },
    SAT: { type: Number },
    Major: { type: String },
    StudentEmail: { type: String },
    DegreeType: { type: String },
    MilitaryStatus: { type: Number },
    PreviousSchool: { type: Boolean },
    SchoolAddress: { type: Boolean },
    Telephone: { type: String },
    SubmissionDateTime: { type: Date },
    Transcripts: { type: String },
    APScores: { type: String },
    LetterOfRec: { type: Number },
    Extracurriculum: { type: Boolean }
});

module.exports = mongoose.model('Student', StudentSchema, 'Student');