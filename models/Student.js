import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  roll_no: { type: Number, required: true },
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
});

// studentSchema.pre("save", async function (next) {
//   if (!this.roll_no) {
//     const lastStudent = await this.constructor.findOne().sort("-roll_no"); // Get last roll_no
//     this.roll_no = lastStudent ? lastStudent.roll_no + 1 : 0; // Start from 1
//   }
//   next();
// });


//export default mongoose.model("Student", StudentSchema);

const Student = mongoose.model("Student", StudentSchema)

export default Student
