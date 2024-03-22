const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first react application");
});

app.get("/me", (req, res) => {
  res.send("Hi I am  Laide");
});

app.listen(5004, () => {
  console.log("Server running...");
});
