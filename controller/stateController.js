let mongoose = require('mongoose');
let state = require('../model/state');
//create
exports.stateCreate = async(req,res)=>{
    try{
        console.log(req.body);
        let stateId = await state.create(req.body);
        res.status(200).json({
            message:"create of state",
            code:200,
            data:stateId
        })
    }catch(error){
        console.log(error);
    }
}
//list
exports.stateList = async(req,res)=>{
    try{
        let statedetails = await state.aggregaet([
            {$match:{}},
            {$project:{
                "_id":"$_id",
                "name":"$name",
                "city":"$city"
            }

            }
            
        ])
        res.status(200).json({
            message:"list of state",
            code:200,
            data:statedetails
        })  
    }catch(error){
        console.log(error);
    }
}
//update
exports.stateUpdate = async(req,res)=>{
    try{
        let stateid = await state.findByIdAndUpdate(
            {"_id":req.body.id},
            {name:req.body.name},
            {city:req.body.name})   
            res.status(200).json({
                message:"update state",
                code:200,
                data:stateid
            }) 
    }catch(error){
        console.log(error);
    }
    
}
//remove
exports.stateRemove = async(req,res)=>{
    try{
        console.log(req.params);
        let Stateid = {_id:req.params.id};
        let statename = await state.deleteOne(Stateid);
        res.status(200).json({
            message:"remove all data",
            code:200,
            data:statename
        })
    }catch(error){
        console.log(error);
    }
}