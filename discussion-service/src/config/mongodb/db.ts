import mongoose from "mongoose";
import "dotenv/config";

let MONGO_URI = "mongodb://localhost:27017";
let MONGODB_NAME = "discussionDB";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${MONGO_URI}/${MONGODB_NAME}`);
    console.log(`discussionDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };
