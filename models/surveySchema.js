const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        employeeId : { type : Number, unique : true },
        one : { type : Number, unique : true },
        two : {  type : Number, unique : true },
        three : { type : Boolean, unique : true },
        four : { type : Boolean, unique : true },
        five : { type : Boolean, unique : true },
        six : { type : Boolean, unique : true },
        seven : { type : Boolean, unique : true },
        eight : { type : Boolean, unique : true },
        nine : { type : Boolean, unique : true },
        ten : { type : Boolean, unique : true },
        eleven : { type : Boolean, unique : true }
    });
const model = mongoose.model('surveySchema',User);
module.exports = model;