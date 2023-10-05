const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        employeeId : { type : String, unique : true },
        text : { type : String, required : true}
    });
const model = mongoose.model('feedbackData',User);
module.exports = model;