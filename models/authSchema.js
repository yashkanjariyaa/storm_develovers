const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema(
    {
        name : { type : String, required : true},
        email : { type : String, unique : true, required : true},
        password : { type : String, required : true },
        role : { type : String, required : true}
    });
const model = mongoose.model('UserAuth', User);
module.exports = model;