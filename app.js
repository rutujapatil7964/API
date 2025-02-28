// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import cors from "cors";
// import connectDB from "./config/connectdb.js";

// const app = express();
// const port = process.env.PORT || 8000;
// const uri = process.env.DATABASE_URL || "";

// //corse policy
// app.use(cors());

// //database connection

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
//   connectDB();
// });
//-----------------------------------------------------------------------
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'

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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})