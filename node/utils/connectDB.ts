import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
  } catch (e) {
    console.error("Could not initialize the database. Exit. ", e);

    process.exit(1);
  }
};
