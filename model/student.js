let mongoose = require('mongoose');
let Schema  = mongoose.Schema({
    firstName:{
        type:String
    },
    middleName:{
        type:String
    },
    lastName:{
        type:String
    },
    classId:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
}) 
module.exports = mongoose.model('student',Schema,'student');