const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World! My name is Dung");
});
app.get("/maidungonly", (req, res) => {
  //res.send("Hello World! My name is maidungonly");
  res.render("sample.ejs");
});
app.get("/hoangtanphat", (req, res) => {
  res.send("Hello World! My name is hoangtanphat");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
