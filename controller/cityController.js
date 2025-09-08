let mongoose = require('mongoose');
let city = require('../model/city');
const { json } = require('body-parser');
//create
exports.CreateCity = async(req,res)=>{
    try{
        console.log(req.body);
        let cityId = await city.create(req.body);
        res.status(200).json({
            message:"create of city data",
            code:200,
            data:cityId
        })
    }catch(error){
        console.log(error);
    }
}

exports.cityDelete = async(req,res)=>{
    try{
        let cityId = await city.findByIdAndUpdate({"_id":req.body.id},{name:req.body.name});
        res.status(200).json({
            message:"update of city",
            code:200,
            data:cityId
        })
    }catch(error){
        console.log(error);
    }
}
//list
exports.listCity = async(req,res)=>{
    try{
        let cityDetails = await city.aggregate([
            {$match:{}},
            {$project:{
                "_id":"$_id",
                "name":"$name"
            }

            }
        ])
        res.status(200).json({
            message:"list of city",
            code:200,
            data:cityDetails
        })
    }catch(error){
        console.log(error);
    }
}
//cityupdate
exports.cityUpdate = async(req,res)=>{
    try{
        let cityId = await city.findByIdAndUpdate({"_id":req.body.id},{name:req.body.name});
        res.status(200).json({
            message:"update of city",
            code:200,
            data:cityId
        })
    }catch(error){
        console.log(error);
    }
}
//cityremove
exports.cityRemove = async(req,res)=>{
    try{
        console.log(req.params);
        let cityid = {_id:req.params.id};
        let cityname = await city.deleteOne(cityid);
        res.status(200),json({
            massage:"remove city",
            code:200,
            data:citynameqqqqq
        })

    }catch(error){
        console.log(error);
    }
}