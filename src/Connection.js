import mongoose from "mongoose";

const URL="mongodb+srv://shubhamkumarn880:nwn4hO8vxZk3YKga@shubham.qlzj5lq.mongodb.net/ecom_prject?retryWrites=true&w=majority&appName=Shubham";
const dbConected=()=>{
    mongoose.connect(URL)
    console.log(("database connected"));
    
}
export default dbConected;