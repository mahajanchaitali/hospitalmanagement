let mongoose = require('mongoose');
let teacher = require('../model/teacher');
//create
exports.teacherCreate = async(req,res)=>{
    try{
        console.log(req.body);
        let teacherDetails = await teacher.create(req.body);
        res.status(200).json({
            message:"details of teacher",
            code:200,
            data:techerDetails
        })
    }catch(error){
        console.log(`error`);
    }
}
//list
exports.teacherList = async(req,res)=>{
    try{
        let teacherData = await teacher.aggregate([
            {$match:{}},
            {$project:{
                "_id":"$_id",
                "name":"$name",
                "address":"$address",
                "city":"$city",
                "state":"$state"
            }

            }

        ])
        res.status(200).json({
            message:"list of list",
            code:200,
            data:teacherData
        })
        
    }catch(error){
        console.log(error);
    }
}
//update
exports.teacherUpdate = async(req,res)=>{
    try{
        let teacherdata = await teacher.findByIdAndUpdate({_id:req.body._id},{
            name:req.body.name,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state
            })
            res.status(200).json({
                message:"update of teacher",
                code:200,
                data:teacherdata
            })
    }catch(error){
        console.log(error);
    }
}

//remove
exports.teacherRemove = async(req,res)=>{
    try{
        console.log(req.params)
        let teacherId = {_id:req.params.id};
        let teacherName = await teacher.deleteOne(teacherId);
        res.status(200).json({
            message:"remove of teacher data",
            code:200,
            data:teacherName
        })
    }catch(error){
        console.log(error);
    }
}
