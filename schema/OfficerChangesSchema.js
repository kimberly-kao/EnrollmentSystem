// Will likley not keep this Schema
const mongoose = require("mongoose");

// building the schema
const OfficerChangesSchema = new mongoose.Schema({
    _id: { type: String},
    EmployeeID: { type: Number },
    ApplicantID: { type: Number },
    TimeStamp: { type: Date },
    Notes: { type: String },
});

module.exports = mongoose.model('OfficerChanges', OfficerChangesSchema, 'OfficerChanges');