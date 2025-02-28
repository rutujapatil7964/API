// import mongoose from "mongoose";
// `import dotenv from 'dotenv'
// dotenv.config()`;

// const dbUrl = process.env.DB_URL || "";

// console.log(process.env.DB_URL);
// const connectDB = async () => {
//   try {
//     await mongoose.connect(dbUrl).then((data) => {
//       console.log(`DataBase connected success ${data.connection.host}`);
//     });
//   } catch (error) {
//     console.log(error.message);
//     setTimeout(connectDB, 5000);
//   }
// };

// export default connectDB;

//------------------------------------------------------------------------------

import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "Rgistration_API"
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB



