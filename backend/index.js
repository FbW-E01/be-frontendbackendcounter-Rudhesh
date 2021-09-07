import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

let counter = 0;

app.get("/", function (req, res) {
  console.log(req.body);
  res.send(counter.toString());
});

app.post("/", function (req, res) {
  counter++;
  res.send(counter.toString());
});

app.listen(3030, () => {
  console.log("Server started on http://localhost:3030");
});
