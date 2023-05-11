import * as dotenv from "dotenv";
dotenv.config();

const message = process.env.NAME || "кука";

console.log(message);
