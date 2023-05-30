import { NextFunction, Request, Response } from "express";
import { getTheBook, getTheFantasyBook, getTheFeaturedBooks } from "./task.service";

export const getFantasyBook = async (req: Request, res: Response, next:NextFunction) =>{
    const books = await getTheBook(); 
    res.status(200).json({
        status: "success",
        data: books
    })
}

export const fantasyBook = async (req: Request, res: Response, next:NextFunction) =>{
    const formData = req.body; 
    if(!formData){
        return res.status(404).json({ error: 'Form data is not provided!' })
    }
    else{
        const books = await getTheFantasyBook(formData); 
        res.status(200).json({
            status: "success",
            data: books
    })
    }
}

export const getFeaturedBook = async (req: Request, res: Response, next:NextFunction) =>{

    const { userId } = req.query;
    const formData = req.body;
    const books = await getTheFeaturedBooks(userId as string, formData);
    res.status(200).json({
        status: "success",
        data: books
    })
}

// export const getDataAfterTwentyTwentyTwoPriceInteger = async (req: Request, res: Response, next:NextFunction) =>{
//     const books = await getIntegerPriceData(); 
//     res.status(200).json({
//         status: "success",
//         data: books
//     })
// }