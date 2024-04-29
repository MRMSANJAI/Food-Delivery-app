import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mrmsanjai:1234567890@cluster0.ma7yb7l.mongodb.net/zoomoto").then(()=>console.log("DB Connected"));

}