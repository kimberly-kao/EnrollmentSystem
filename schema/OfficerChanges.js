const mongoose = require("mongoose");

// building the schema
const OfficerChangesSchema = new mongoose.Schema({
    OfficerID: { type: Number },
    ApplicantID: { type: Number },
    TimeStamp: { type: Date },
    Notes: { type: String },
});

module.exports = mongoose.model('OfficerChanges', OfficerChangesSchema, 'OfficerChanges');