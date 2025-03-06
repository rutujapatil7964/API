import Student from "../models/Student.js";
import mongoose from "mongoose";
//import StudentRoutes from "../routes/StudentRoutes.js";

class StudentController {
  //  Create a new student
  static async createStudent(req, res) {
    try {
      const { first_name, middle_name, last_name, age, email, course } =
        req.body;
      if (
        !first_name ||
        !middle_name ||
        !last_name ||
        !age ||
        !email ||
        !course
      ) {
        return res.status(404).json({ message: " All fields are required" });
      }

      const StudentData = await Student.find();
      const roll_no = StudentData.length + 1;

      if (first_name && middle_name && last_name && age && email && course) {
        //const student = new Student();
        const student = new Student({
          roll_no: roll_no,
          first_name: first_name,
          middle_name: middle_name,
          last_name: last_name,
          age: age,
          email: email,
          course: course,
        });
        await student.save();
        res
          .status(201)
          .json({ message: "Student created successfully", student });
      } else {
        res
          .status(400)
          .send({ status: "failed", message: "All fields are required" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log;
    }
  }

  //  Get all students
  static async getAllStudents(req, res) {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a student by ID
  static async getStudentById(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ message: "Student not found or id is incorrect....." });
      }
      const student = await Student.findById(id);
      if (student) {
        res.json(student);
      } 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //  Update a student by ID
  static async updateStudent(req, res) {
    try {
      const { id } = req.params;
      //console.log("Student ID:", id); // Debugging
  
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid or missing student ID" });
      }
  
      const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.json({ message: "Student updated successfully", student });
  
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: error.message });
    }
  }
  
  static async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({ message: "Student not found or id is incorrect....." });
      }

      // Find the student to delete
      const student = await Student.findById(id);

      const deletedroll_no = student.roll_no;
      //console.log(deletedroll_no);

      // Delete the student
      await Student.findByIdAndDelete(id);
      // res.json({ message: "Student deleted successfully" });

      // Fetch all students sorted by roll number
      const students = await Student.find().sort({ roll_no: 1 });
      //console.log(students);

      for (let i = 0; i < students.length; i++) {
        students[i].roll_no = i + 1;
        await students[i].save();
      }

      res.json({ message: "Students roll numbers are updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error(error);
    }
  }
}

export default StudentController;
