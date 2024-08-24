import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userrouter from './routes/Userroute.js';
import 'dotenv/config.js'
import cartRouter from './routes/CartRoute.js';



// app config
const app = express();
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//Db connection
connectDB();

//API endPoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userrouter)
app.use("/api/cart",cartRouter)


app.get("/",(req , res)=>{
    res.send ("API Working")
})

app.listen(port,()=>{
    console.log(`Server  is running on http://localhost:${port}`)
})

