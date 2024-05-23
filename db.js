import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database conection successfully");
  })
  .catch((err) => {
    console.log(`Database conection failed: ${err.message}`);
    process.exit(1);
  });
