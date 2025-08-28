import adminModel from "../Model/adminModel.js";

export const adminSignUp = async (req, res) => {
    let { name, email, number,password } = req.body
    const email_LowerCase = email.toLowerCase()
    try {
        if (!name.trim().toLowerCase() || !email.trim().toLowerCase() || !number || !password.trim()) {
            res.status(400).json({ message: "All field is requaird" })
            return;
        }
        const checkEmail = await adminModel.findOne({ email: email_LowerCase })
        if (checkEmail) {
            res.status(400).json({ message: "All redy Exit's Email" })
            return;
        }
        const result = await adminModel.create({
            name,
            email: email_LowerCase,
            password,
            number
        })
        res.status(200).json({ message: "Sign Up Successfuly",result })
    } catch (error) {
           console.error("Error in adminSignUp:", error)
        res.status(500).json({ message: "somthing wont wrong"+error })
    }
}

export const handelAdminSignIn= async(req,res)=>{
    try {
        let{email,password}=req.body;
        const adminData= await adminModel.findOne({email})
        if(!adminData){
            res.status(400).json({message:"admin not found"})
            return;
        }
        if(password!==adminData.password){
            res.status(400).json({message:"incorect password"});
            return;
        }
        res.status(200).json({message:"sign in successfuly",adminData})
    } catch (error) {
        console.log("somthin to won't wrong",error);
        res.status(500).json({message:"sothing to won't wrong"+ error})
        
    }
}