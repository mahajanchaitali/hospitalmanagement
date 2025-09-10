let mongoose = require('mongoose');
let Schema = mongoose.Schema({
    name:{
        type:String
    },

})
exports.module = mongoose.model('hospital',Schema,'hospital');