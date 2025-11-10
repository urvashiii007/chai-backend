//require('dotenv').config({path: './env'})
import 'dotenv/config';
dotenv.config({ path: "./.env" });
import { app } from './app.js';

import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed !!!', err);
    process.exit(1);
  });

/*
connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!!",err);
})
*/


/*
import express from 'express'
const app = express()

( async () => {
  try {
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error", () => {
  console.log("ERROR: ", error);
  throw error
}) 
app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`)
})

}
  catch(error) {
    console.error("ERROR: ",error)
    throw err
  }
})()
  */