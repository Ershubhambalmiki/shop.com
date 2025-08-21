import mongoose from "mongoose";

 const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    address:String,
    password:String,
    file:String
 })
  const userModel= mongoose.model("user",userSchema);
  export default userModel;