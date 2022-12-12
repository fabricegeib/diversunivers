const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET URL : /api");
  if (req.query.name !== (null || undefined)) {
    console.log("query : ", req.query.name);
  }

  //   res.send("API");

  res.status(200).json({
    title: "api",
    message: "Welcome to API",
    about: "A hand-crafted Rest API",
    owner: "Fabrice Geib",
    // createdBy: "Fabrice Geib",
    github: "github.com/fabricegeib",
    twitter: "twitter.com/fabricegeib",
    pages: [
      { hello: "/api/hello/" },
      { documentaires: "/api/documentaires/" },
      { people: "/api/peoples/" },
      { planets: "/api/planets/" },
      { films: "/api/films/" },
      { species: "/api/species/" },
      { vehicles: "/api/vehicles/" },
      { starships: "/api/starships/" },
    ],
    //   support: "For Bugs & Feature requests please submit on github",
  });

  //   res.render("users/users", {
  //     title: "users",
  //     users: [{ name: "Fabrice" }, { name: "Charly" }],
  //   });
});

router.get("/new", (req, res, next) => {
  console.log("GET URL : /api/new");
  // res.send("User new form");
  //   res.render("users/new", { firstName: "first name" });
  res.render("api/new");
});

module.exports = router;
