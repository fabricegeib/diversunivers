const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// console.log("Server");

app.get("/", (req, res, next) => {
  console.log("GET URL : /");
  //   res.send("URL : /");
  res.render("index", { title: "divers univers" });
});

app.get("/download", (req, res, next) => {
  res.download("server.js");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.get("/500", (req, res, next) => {
  //   res.sendStatus(500);
  res.status(500).json({ message: "Error 500" });
});

app.listen(3333);
