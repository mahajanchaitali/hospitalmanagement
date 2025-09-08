let mongoose = require('mongoose');
let Schema = mongoose.Schema({
    name:{
        type:String
    },
    city:{
        type:String
    }
})
module.exports = mongoose.model('state',Schema,'state');