const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }

    },
    message:{
        type:String
    }
});

const student=new mongoose.model("Studetnt",studentSchema)
module.exports=student;
