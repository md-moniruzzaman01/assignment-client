import mongoose from "mongoose";
import app from './src/app'; 
require('dotenv').config()
const port:number = 5000;
const nodeEnv: string = (process.env.MONGO_URI as string);
async function databaseConnection () {
  

    try{
        await mongoose.connect(nodeEnv);
        console.log("Database is connected successfully. Thank you.");
        app.listen(port, ()=>{
            console.log(`Task app listening on ${port}`)
        })
        
    }catch(error){
        // console.log(error.message as string);
    }
}
databaseConnection(); 