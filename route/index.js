let student = require('../controller/studentController');
let class1 = require('../controller/classController');
let teacher = require('../controller/teacherController');
let city   = require('../controller/cityController');
let state = require('../controller/stateController');
module.exports = (app) =>{
//student
app.post('/studentcreate',student.studentCreate);
app.get('/studentlist',student.studentList);
app.put('/studentupdate',student.studentUpdate);
app.delete('/remove/:id',student.studentRemove);

// //class
app.post('/class1create',class1.class1Create);
app.get('/class1List',class1.class1List);
app.put('/class1Update',class1.class1Update);
app.delete('/class1Remove/:id',class1.class1Remove);

// //teacher
app.post('/teacherCreate',teacher.teacherCreate);
app.get('/teacherList',teacher.teacherList);
app.put('/teacherUpdate',teacher.teacherUpdate);
app.delete('/teacherRemove/:id',teacher.teacherRemove);

// //city
app.post('/CreateCity',city.CreateCity);
app.get('/listCity',city.listCity);
app.put('/cityUpdate',city.cityUpdate);
app.delete('/cityRemove/:id',city.cityRemove);

// //state
app.post('/stateCreate',state.stateCreate);
app.get('/stateList',state.stateList);
app.put('/stateUpdate',state.stateUpdate);
app.delete('/stateRemove/:id',state.stateRemove);


}