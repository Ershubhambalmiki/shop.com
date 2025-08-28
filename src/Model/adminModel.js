import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:Number
})

const adminModel= mongoose.model("adminSignUp",adminSchema)
export default adminModel;