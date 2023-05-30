import mongoose from "mongoose";
import app from './src/app'; 

const port:number = 5000;

async function databaseConnection () {
    // mongodb://27017/taskStore

    try{
        await mongoose.connect("mongodb+srv://logedInUserr:HCtwliFQhB9gD7m1@cluster0.qzz0mz8.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database is connected successfully. Thank you.");
        app.listen(port, ()=>{
            console.log(`Task app listening on ${port}`)
        })
        
    }catch(error){
        // console.log(error.message as string);
    }
}
databaseConnection(); 