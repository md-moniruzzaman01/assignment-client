import express from 'express';
import { fantasyBook, getFantasyBook, getFeaturedBook } from './task.controller';

const router = express.Router();

// Will be decided letter. 
router.get("/fantasyBook", getFantasyBook);
router.post("/fantasy", fantasyBook);
router.put("/featuredBook", getFeaturedBook);
// router.get("/integerPriceBook", getDataAfterTwentyTwentyTwoPriceInteger); //10 minits at $addField.
router.get("/", );

export default router; 
