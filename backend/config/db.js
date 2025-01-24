import mongoose from "mongoose";
const { connection } = mongoose;


import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log("MONGO DB connected : " + conn,connection.host);
    } catch (error) {
        console.error("Error connecting to MONGODB: " + error.message);
        process.exit(1);
    }
}