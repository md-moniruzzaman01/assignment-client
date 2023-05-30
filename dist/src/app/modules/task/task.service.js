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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntegerPriceData = exports.getTheFeaturedBooks = exports.getTheFantasyBook = exports.getTheBook = void 0;
const task_model_1 = __importDefault(require("./task.model"));
const getTheBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield task_model_1.default.find({});
    return books;
});
exports.getTheBook = getTheBook;
const getTheFantasyBook = (formData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(formData);
    const user = new task_model_1.default(formData);
    yield user.save();
    return [user];
});
exports.getTheFantasyBook = getTheFantasyBook;
const getTheFeaturedBooks = (userId, formData) => __awaiter(void 0, void 0, void 0, function* () {
    if (userId && formData) {
        const user = yield task_model_1.default.findByIdAndUpdate(userId, formData, { new: true });
        return [user];
    }
    else {
        return [];
    }
});
exports.getTheFeaturedBooks = getTheFeaturedBooks;
const getIntegerPriceData = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield task_model_1.default.aggregate([
        { $match: { publicationYear: { $gt: 2020 } } },
        {
            $project: {
                price: { $toInt: "$price" },
                title: 1,
                author: 1,
                genre: 1,
                publicationYear: 1,
                publisher: 1,
                reviews: 1,
                rating: 1
            }
        }
    ]);
    return books;
});
exports.getIntegerPriceData = getIntegerPriceData;
