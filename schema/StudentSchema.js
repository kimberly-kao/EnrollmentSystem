const mongoose = require("mongoose");

// building the schema
const StudentSchema = new mongoose.Schema(
    {
        Username: { type: String, required: true, unique: true },
        Password: { type: String, required: true },
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
    },
    { collection: 'students'}
);

const model = mongoose.model('StudentSchema', StudentSchema)

module.exports = model