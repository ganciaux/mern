import express from "express";
import dotenv from "dotenv";
const port = 5000;
const app = express();

dotenv.config();

app.get("/", (req, res) => res.send("server is ready"));
app.listen(port, () => {
  console.log(`server listen on port ${port}`);
});
