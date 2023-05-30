"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },
    userPhoto: {
        type: String,
    },
    userTrId: {
        type: String,
    },
    amount: {
        type: String,
    },
    isVerified: {
        type: String,
    },
    referId: {
        type: String,
    },
    amountFromRefer: {
        type: String,
    },
    joinedSince: {
        type: String,
    },
    amountFromSecondRefer: {
        type: String,
    },
    amountFromThirdRefer: {
        type: String,
    },
    withDrawAmount: {
        type: String,
    },
    walletAddress: {
        type: String,
    },
    restAmount: {
        type: String,
    },
}, { collection: "users" });
const Books = (0, mongoose_1.model)("users", taskSchema);
exports.default = Books;
