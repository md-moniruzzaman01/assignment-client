"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("./task.controller");
const router = express_1.default.Router();
// Will be decided letter. 
router.get("/fantasyBook", task_controller_1.getFantasyBook);
router.post("/fantasy", task_controller_1.fantasyBook);
router.put("/featuredBook", task_controller_1.getFeaturedBook);
// router.get("/integerPriceBook", getDataAfterTwentyTwentyTwoPriceInteger); //10 minits at $addField.
router.get("/");
exports.default = router;
