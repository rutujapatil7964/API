import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import StudentRoutes from './routes/StudentRoutes.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

 // Load Routes
 app.use("/api/user", userRoutes)
 app.use("/api/student", StudentRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})



// const studentData = await Student.find();
// const roll_no = studentData.length + 1;



// if (!first_name || !middle_name || !last_name || !agev) {
//   return res
//     .status(400)
//     .send({ status: "failed", message: "All fields are required" });
// }
