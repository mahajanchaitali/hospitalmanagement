let mongoose =require('mongoose');
let Schema = mongoose.Schema({
    neme:{
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
    }
})
module.exports = mongoose.model('teacher',Schema,'teacher');
