let mongoose = require('mongoose');
try{
mongoose.connect('mongodb://localhost:27017/school');
console.log("database connected");
}
catch(error){
    console.log('database not connected');
}

let Mongoose = require('mongoose');
try{
    mongoose.connect('mongodb://localhost:27017/school');
    console.log("database connected");
}
catch(error){
    console.log('dtabase not connected');
}