import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mrmsanjai:1234567890@cluster0.epoubmv.mongodb.net/food-del").then(()=>console.log("DB Connected"));

}