const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: 'Welcome page in sever' });
});
app.get("/text", (req, res) => {
  res.status(200).send({
    message: 'api is wroking fine',
  });
});

app.listen(3002, () => {
  console.log(`Server is at running in http://localhost:3002`);
});
