import usermodel from "../models/Usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user
const loginUser = async(req,res)=>{
    const {email,password} = res.body;
    try{
      const user = await usermodel.findOne({email});
      if (!user) {
         return res.json({success: false, message:"User not found"})
      }

      
    } catch(error){

    }

}
const createToken = (id)=>{
   return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async(req,res)=>{
     const {name,password,email}= req.body;
     try {
      //Checking user exists already
        const exists = await usermodel.findOne({email})
        if (exists) {
          return res.json({success:false,message:"User already exists"})
        }
        //validate email format & strong passsword
        if (!validator.isEmail(email)) {
         return res.json({success:false,message:"Please enter valid email"})
         
        }
        if (password.length<8) {
         return res.json({success:false,message:"Password should be strong with 8 characters"})
         
        }
        // hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new usermodel({
         name: name,
         email: email,
         password: hashedPassword
        })

        const user = await newUser.save()
         const token = createToken(user._id)
         res.json({success:true,token})

     } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
     }
}
export { loginUser, registerUser}