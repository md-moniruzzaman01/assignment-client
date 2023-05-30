"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeaturedBook = exports.fantasyBook = exports.getFantasyBook = void 0;
const task_service_1 = require("./task.service");
const getFantasyBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield (0, task_service_1.getTheBook)();
    res.status(200).json({
        status: "success",
        data: books
    });
});
exports.getFantasyBook = getFantasyBook;
const fantasyBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const formData = req.body;
    if (!formData) {
        return res.status(404).json({ error: 'Form data is not provided!' });
    }
    else {
        const books = yield (0, task_service_1.getTheFantasyBook)(formData);
        res.status(200).json({
            status: "success",
            data: books
        });
    }
});
exports.fantasyBook = fantasyBook;
const getFeaturedBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.query;
    const formData = req.body;
    const books = yield (0, task_service_1.getTheFeaturedBooks)(userId, formData);
    res.status(200).json({
        status: "success",
        data: books
    });
});
exports.getFeaturedBook = getFeaturedBook;
// export const getDataAfterTwentyTwentyTwoPriceInteger = async (req: Request, res: Response, next:NextFunction) =>{
//     const books = await getIntegerPriceData(); 
//     res.status(200).json({
//         status: "success",
//         data: books
//     })
// }
