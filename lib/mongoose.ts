import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("=> no database url found");

  if (isConnected) return console.log("=> using existing database connection");
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.DB_NAME,
    });

    isConnected = true;

  } catch (error) {
    console.log("=> error while connecting with database:", error);
  }
}