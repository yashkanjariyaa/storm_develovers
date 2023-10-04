const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        adminId : { type : Number, unique : true, required : true},
        performanceSatisfaction : { type : Number, required : true },
        codeOfConductStats : { type : Number, required : true },
        proffesionalBehaviorStatus : { type : Number, required : true },
        text : { type : String }

    });
const model = mongoose.model('adminFeedBack',User);
module.exports = model;