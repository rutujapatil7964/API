import Student from "../models/Student.js";
//import StudentRoutes from "../routes/StudentRoutes.js";

class StudentController {
  //  Create a new student
     static async createStudent(req, res) {
      try {
          const {roll_no,first_name,middle_name,last_name,age,email,course} = req.body;
      if (roll_no && first_name && middle_name && last_name && age && email && course) {
          //const student = new Student();   
          const student = new Student({ 
           roll_no:roll_no ,
           first_name: first_name ,
           middle_name:middle_name ,
           last_name :last_name ,  
           age: age,
           email:email,
           course:course
           })
           await student.save();
           res.status(201).json({ message: "Student created successfully", student });
     } else {
       res.status(400).send({ "status": "failed", "message": "All fields are required" })
     }
    }catch(error){
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
      const student = await Student.findById(req.params.id);
      if (!student){
        return res
          .status(404)
          .json({ message: "Student not found or id is incorrect" });
        }
      else{
        res.json(student);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //  Update a student by ID
  static async updateStudent(req, res) {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
       new: true,
      });
      if (!student){
        return res.status(404).json({ message: "Student not found or id is incorrect"});
      } else{
      res.json({ message: "Student updated successfully", student });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  //  Delete a student by ID
  static async deleteStudent(req, res) {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student){return res.status(404).json({ message: "Student not found or id is incorrect"});
    }else{
      res.json({ message: "Student deleted successfully" });
    }      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default StudentController;
