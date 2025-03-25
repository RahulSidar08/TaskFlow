import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser";
import path from "path";
import { connectDb } from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"
dotenv.config()
const app = express();
const port = process.env.port || 5000;
connectDb()
const _dirname = path.resolve()
app.get("/" , (Req,res) => {
    res.send("It is working")
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user",userRoutes)
app.use("/task",taskRoutes)


app.use(express.static(path.join(_dirname,"/client/dist")))
app.get('*', (req,res) => {
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
})
app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})