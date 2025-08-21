import userModel from "../Model/userModel.js";



export const Signup = async (req, res) => {
    let { name, email,number,address, password,file } = req.body;
    let email_toLowerCase = email.toLowerCase();
    try {
        const user = await userModel.findOne({ email: email_toLowerCase })
        if (user) {
           res.status(400).json({ message: "User already exist" })
            return ;
        }
        const result = await userModel.create({
            name,
            email: email_toLowerCase,
            number,
            address,
            password,
            file
        })
        res.status(200).json({ message: "SignUp successful", result })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" + error })
    }
}

export const Signin = async (req, res) => {
    let { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User doesn't exist" });
            return;
        }

        if (password != user?.password) {
            res.status(400).json({ message: "Invalid password" });
            return;
        }

        res.status(200).json({ message: "Signin successfull",result:user })
    } catch (error) {
        res.status(500).json({ message: `Something went wrong ${error}` })
    }
}

export const GetAllUsers = async (req, res) => {
    try {
        const result = await userModel.find({}).sort({created_at: -1});
        res.status(200).json({ message: "Users fetched", result })
    } catch (error) {
        res.status(500).json({ message: `Something went wrong ${error}` })
    }
}
