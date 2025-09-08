let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let server = require('http');
let app = express();
app.use(bodyParser.json())
server.createServer(app);
let modelPath = __dirname + "/model";
let con = require('./config')
fs.readdirSync(modelPath).forEach(function(file){
    if(~file.indexOf('.js'))
        require(modelPath+'/'+file)
})
require('./route')(app);

app.listen(3000,function(){
    console.log("App start on 3000")
})
