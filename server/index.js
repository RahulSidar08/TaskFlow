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

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const corsOptions = {
    origin:'http://localhost:5173/',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

app.use("/user",userRoutes)
app.use("/task",taskRoutes)


app.use(express.static(path.join(_dirname,"/client/dist")))
app.get('*', (req,res) => {
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
})
app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})