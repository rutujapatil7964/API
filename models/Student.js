import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  roll_no: { type: Number, required: true , unique: true},
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema)

export default Student
