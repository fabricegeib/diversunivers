const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET URL : /users");
  //   res.send("Users list");
  res.render("users/users", {
    title: "users",
    users: [{ name: "Fabrice" }, { name: "Charly" }],
  });
});

router.get("/new", (req, res, next) => {
  console.log("GET URL : /users/new");
  // res.send("User new form");
  res.render("users/new", { firstName: "first name" });
});

router.post("/", (req, res, next) => {
  // res.send("Create new user");
  // console.log(req.body.firstName);
  res.send(`${req.body.firstName}`);
});

router
  .route("/:id")
  .get((req, res, next) => {
    console.log(req.user);
    res.send(`Get user with ID : ${req.params.id}`);
  })
  .put((req, res, next) => {
    res.send(`Update user with ID : ${req.params.id}`);
  })
  .delete((req, res, next) => {
    res.send(`Delete user with ID : ${req.params.id}`);
  });

const users = [{ name: "Fabrice" }, { name: "Charly" }];
router.param("id", (req, res, next, id) => {
  //   console.log(id);
  req.user = users[id];
  next();
});

module.exports = router;
