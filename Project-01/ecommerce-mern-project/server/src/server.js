const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to page in sever" });
});
app.get("/text", (req, res) => {
  res.status(200).send({
    message: "api testing is working ",
  });
});


app.post("/text", (req, res) => {
  res.status(200).send({
    message: "Post: api testing is working ",
  });
});

app.put("/text", (req, res) => {
  res.status(200).send({
    message: "Put: api testing is working ",
  });
});

app.delete("/text", (req, res) => {
  res.status(200).send({
    message: "delete: api testing is working ",
  });
});

app.listen(3002, () => {
  console.log(`Server is at running in http://localhost:3002`);
});
