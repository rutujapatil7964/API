import mongoose from "mongoose";

//Defining Schema
const userSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    tc:{type:Boolean, required:true} //turn condition
})

//Model
const usermodel = mongoose.model("user", userSchema)

export default usermodel