let mongoose = require('mongoose');
let student = require('../model/student');
//create
 exports.studentCreate = async(req,res)=>{
    try{
        console.log(req.body);
        let studentData = await student.create(req.body);
        res.status(200).json({
            message:"student ragister successfully",
            code:200,
            data:studentData
        })
    }catch(error){
        console.log("error",error);
    }
 }

//list
exports.studentList = async(req,res)=>{
    try{
        let studentDetails= await student.aggregate([
            {$match:{}},
            {$projetc:{
                "_id":"$_id",
                "firstName":"$firstName",
                "middleName":"$middleName",
                "lastName":"$lastName",
                "classId":"$classId",
                "address":"$address",
                "city":"$city",
                "state":"$state",
                "pincode":"$pincode",
                "email":"$email",
                "password":"$password"


            }

            }
        ])
        res.status(200).json({
            message:"list of student",
            code:200,
            data:studentDetails
        })
    }catch(error){
        console.log("error");
    }
}

//update

exports.studentUpdate = async(req,res)=>{
    try{
        let stdUpdetails = await student.findByIdAndUpdate({"_id":req.body._id},{
            firstName:req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            classId:req.body.classId,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode,
            email:req.body.email,
            password:req.body.password
        })
        res.status(2000).json({
            message:"update of student",
            code:200,
            data:stdUpdetails     
          })    
    }catch(error){
        console.log('error');
    }
}

//remove
exports.studentRemove = async(req,res)=>{
    try{
        console.log(req.params)
        let stdRemoveId = {_id:req.params.id};
        let stdRemoveName = await student.deleteOne(stdRemoveId);
        res.status(200).json({
            message:"remove of student",
            code:200,
            data:stdRemoveName
        })
        
    }catch(error){
        console.log("error",error);
    }
}