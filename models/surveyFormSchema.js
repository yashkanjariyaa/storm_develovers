const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        formName : { type : String, required : true},
        formId : { type : Number, required : true},
        questionsObject : {
            type : Array,
            items : {
                type : String
            }
        }
    });
const model = mongoose.model('surveyFormsData',User);
module.exports = model;