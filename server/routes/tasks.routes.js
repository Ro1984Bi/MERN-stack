import { Router } from "express";
import { addTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/tasks.controllers.js";
const router = Router()

router.get("/tasks", getTasks)

router.get("/tasks/:id", getTask)

router.post("/tasks", addTask)

router.put("/tasks/:id", updateTask)

router.delete("/tasks/:id", deleteTask)



export default router