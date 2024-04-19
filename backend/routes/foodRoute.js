import express from 'express';
import { addFood } from '../controllers/Foodcontroller.js';
import multer from 'multer';


const foodRouter = express.Router();


// Imge Storage 

const storage = multer.diskStorage({
    destination: "uplodes",
    filename: (req, file, cb) => {
       return cb(null, `${Data.now()}${file.originalname}`)
    }
});

foodRouter.post("/add",addFood)




export default foodRouter;