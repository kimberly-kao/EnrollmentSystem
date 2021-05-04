const mongoose = require("mongoose");

// building the schema
const StudentSchema = new mongoose.Schema({
    _id: { type: String},
    Username: { type: String },
    Password: { type: String },
    FirstName: { type: String },
    LastName: { type: String },
    MiddleName: { type: String },
    Birthday: { type: String },
    Gender: { type: String },
    StudentAddress: { type: String },
    Semester: { type: String },
    SAT: { type: Number },
    Major: { type: String },
    StudentEmail: { type: String },
    DegreeType: { type: String },
    MilitaryStatus: { type: String },
    PreviousSchool: { type: String },
    PreviousSchoolAddress: { type: String },
    ApplicationStatus: { type: String},
    Telephone: { type: String },
    SubmissionDateTime: { type: Date },
    Transcripts: { type: String },
    APScores: { type: String },
    LetterOfRec: { type: String },
    Extracurricular: { type: String },
    PIQ: { type: String}
});

module.exports = mongoose.model('Student', StudentSchema, 'Student');