const mongoose = require("mongoose");

// building the schema
const StudentSchema = new mongoose.Schema({
    Username: { type: Number },
    Password: { type: Number },
    Admin: { type: String },
    Empl: { type: String },
    State: { type: String },
    Zip_Code: { type: Number },
    Is_Shipping: { type: Boolean },
    Is_Billing: { type: Boolean }
});

module.exports = mongoose.model('Student', StudentSchema, 'Student');