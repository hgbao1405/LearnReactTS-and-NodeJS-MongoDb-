import mongoose from "mongoose";
import express from "express";
import { QuizAPI } from "./API/AllApi.js";

const app = express();
const port = 3001;

const url = "mongodb://localhost:27017";
const dbName = "Quiz_game_history_of_viet_nam";

mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.json());

  app.use("/api", QuizAPI);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
