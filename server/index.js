import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser";
import { connectDb } from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"
dotenv.config()
const app = express();
const port = process.env.port || 5000;
connectDb()

app.get("/" , (Req,res) => {
    res.send("It is working")
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user",userRoutes)
app.use("/task",taskRoutes)

app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})