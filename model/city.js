let mongoose = require('mongoose');
let Schema = mongoose.Schema({
    name:{
        type:String
    }
})
module.exports = mongoose.model('city',Schema,'city');
