const mongoose=require("mongoose");

const todoSchema =new mongoose.Schema({
    title:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",new:true}
    
    },
    {
        versionKey:false,
        timestamps:true
    });

    module.exports=mongoose.model("todo",todoSchema);