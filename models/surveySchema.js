const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        employeeId : { type : String, unique : true },
        surveyAnswers : { type : Array, 
            items : { type : String}
        },
        rateAnswers : { type : Array, 
            items : { type : Number}
        }
    });
const model = mongoose.model('surveyData', User);
module.exports = model;