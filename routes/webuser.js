var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");

//connect to our user
let webuser = require("../models/webuser");

// get route for
router.get("/", (req, res, next) => {
  webuser.find((err, user) => {
    if (err) {
      return console.error(err);
    } else {
      console.log(user);
      res.render("business", { title: "business", User: user });
    }
  });
});

module.exports = router;
