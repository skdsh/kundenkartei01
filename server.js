const express = require("express");
const app = express();
const fs = require("fs");
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "kyle", title: "My Site", myCss: myCss });
});
const users = [];
var myCss = {
  style: fs.readFileSync("./index.css", "utf8")
};
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "kyle", title: "My Site", myCss: myCss });
});
app.post("/", (req, res) => {
  req.body.login;
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(require.body.passport, 10);
    users.push({
      id: req.body.username,
      name: req.body.name,
      email: require.body.email,
      password: hashedPassword
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
    console.log(users);
  }
});
app.get("/leon", (req, res) => {
  res.render("leon.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.listen(3000);
