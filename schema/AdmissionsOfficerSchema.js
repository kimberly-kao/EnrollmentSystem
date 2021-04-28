const mongoose = require("mongoose");

// building the schema
const AdmissionsOfficerSchema = new mongoose.Schema({
    Username: { type: String },
    Password: { type: String },
    FirstName: { type: String },
    LastName: { type: String },
    MiddleName: { type: String },
    Birthday: { type: String },
    EmployeeID: { type: Number },
});

module.exports = mongoose.model('AdmissionsOfficer', AdmissionsOfficerSchema, 'AdmissionsOfficer');