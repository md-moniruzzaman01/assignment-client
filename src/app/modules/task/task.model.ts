import { Schema, model } from "mongoose";
import { ITask } from "./task.interface";

const taskSchema = new Schema<ITask>({
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
    isVerified:{
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
}, {collection: "users"})

const Books = model<ITask>("users", taskSchema); 
export default Books;