let mongoose = require('mongoose');
let class1  = require('../model/class1');
//create
  exports.class1Create  = async(req,res)=>{
    try{
        console.log(req.body);
        let class1Data = await class1.create(req.body);
        res.status(200).json({
            message:"class of create",
            code:200,
            data:class1Data
        })   
}catch(error){
    console.log(error);
}
}
//list
exports.class1List = async(req,res)=>{
    try{
        let class1Details = await class1.aggregate([
            {$match:{}},
            {$project:{
                "_id":"$_id",
                "name":"$name"
            }

            }
        ])
        res.status(200).json({
            message:"class of list",
            code:200,
            data:class1Details
        })
    }catch(error){
        console.log(error);
    }
}
//update
exports.class1Update = async(req,res)=>{
    try{
        let  Class1Details = await class1.findByIdAndUpdate({"_id":req.body.id},{name:req.body.name})
        res.status(200).json({
            message:"class1 of update",
            code:200,
            data:Class1Details
        })
    }catch(error){
        console.log('error',error);
    }
}
//remove
exports.class1Remove = async(req,res)=>{
    try{
        console.log(req.params);
        let class1Id = {_id:req.params.id};
        let class1Name = await class1.deleteOne(class1Id);
        res.status(200).json({
            message:"class1 of remove",
            code:200,
            data:class1Name
        })
    }catch(error){
        console.log(error);
    }
}
