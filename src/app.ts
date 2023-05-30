import express, {Application, NextFunction, Request, Response} from 'express'; 
import cors from 'cors';
const app : Application = express(); 

// import taskRoute from

import taskRoute from './app/modules/task/task.route'

app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res:Response, next:NextFunction)=>{
    res.send("This project is running.");
    next(); 
})

app.use('/api/task', taskRoute);
export default app; 