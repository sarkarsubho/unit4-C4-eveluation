const express =require("express");

const User=require("../models/user.models");


const router=express.Router();

const register=async(req,res)=>{
        try{
            const user = await User.create(req.body);

            res.status(200).send(user);

        }catch(err){
            res.status(500).send({message:err.message});
        }
};

const login =async(req,res)=>{
    try{
        let user =await User.findOne(req.body.email);

        if (user)
        console.log(user);

    }catch(err){
        res.status(500).send({message:err.message})

    }

}




module.exports={register,login};
