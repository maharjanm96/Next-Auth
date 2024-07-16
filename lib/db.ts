import mongoose from "mongoose";

export const connectDb = async () => {
  const connectionString = process.env.CONNECTION_STRING;

  if (!connectionString) {
    throw new Error("CONNECTION_STRING is not defined");
  }

  try {
    await mongoose.connect(connectionString);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error occurred", error);
  }
};
