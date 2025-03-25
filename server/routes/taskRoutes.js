import express from "express"
import { createTask, deleteTask, viewAllTask, viewTask } from "../controllers/taskController.js"
const router = express.Router()

router.route("/create").post(createTask)
router.route("/view/:id").get(viewTask)
router.route("/viewAll").get(viewAllTask)
router.route("/delete/:id").post(deleteTask)

export default router