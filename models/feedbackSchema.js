const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        employeeId : { type : Number, unique : true },
        hygieneStatus : { type : Boolean, unique : true },
        colleagueStatus : {  type : Boolean, unique : true },
        juniorStatus : { type : Boolean, unique : true },
        seniorStatus : { type : Boolean, unique : true },
        staffStatus : { type : Boolean, unique : true },
        parkingStatus : { type : Boolean, unique : true },
        washRoomStatus : { type : Boolean, unique : true }
    });
const model = mongoose.model('feedBackData',User);
module.exports = model;