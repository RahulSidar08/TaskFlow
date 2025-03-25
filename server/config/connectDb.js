import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const  connectDb = async (req,res) => {
    try {
        await mongoose.connect(`${process.env.mongouri}`)
        console.log("Successfully connected to Database")
    } catch (error) {
        console.log(error)
    }
}