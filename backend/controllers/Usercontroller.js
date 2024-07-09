import usermodel from "../models/Usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user
const loginUser = async(req,res)=>{

}

//register user
const registerUser = async(req,res)=>{
     const {name,password,email}= req.body;
     try {
        const exists = await usermodel.findOne({email})
     } catch (error) {
        
     }
}
export { loginUser, registerUser}