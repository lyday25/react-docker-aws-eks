const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express application");
});

app.get("/me", (req, res) => {
  res.send("Hi I am  clement");
});

app.listen(5004, () => {
  console.log("listening");
});
