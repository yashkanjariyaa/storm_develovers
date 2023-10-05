const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        employeeId : { type : String, unique : true },
        participationRate : { type : Number, required : true },
        productivity : { type : Number },
        retentionRate : { type : Number }

    });
const model = mongoose.model('KPISchema',User);
module.exports = model;