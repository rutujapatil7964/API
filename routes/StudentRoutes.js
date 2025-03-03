import express from "express";
import StudentController from "../controllers/StudentController.js";

const router = express.Router();

// Routes
router.post("/createStudent", StudentController.createStudent);
router.get("/getAllStudents", StudentController.getAllStudents);
router.get("/getStudentById/:id", StudentController.getStudentById);
router.put("/updateStudent/:id", StudentController.updateStudent);
router.delete("/deleteStudent/:id", StudentController.deleteStudent);

export default router;
