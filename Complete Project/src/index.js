import dotenv from "dotenv";
import connectDB from "./db/index.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({
  path: "./.env",
});

connectDB();
