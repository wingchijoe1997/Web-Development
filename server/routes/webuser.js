var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");

//connect to our user
let webuser = require("../models/webuser");

// get route for the business page  - read operation
router.get("/", (req, res, next) => {
  webuser.find((err, business) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(user);
      res.render("/businessList/business", {
        title: "Business",
        Business: business,
      });
    }
  });
});

// get route for displaying the add page - Create Operation
router.get("/add", (req, res, next) => {
  res.render("/businessList/business", {
    title: "Business",
    Business: business,
  });
});

// post route for processing the add page -Create Operation
router.post("/add", (req, res, next) => {});

// get route for displaying the edit page   - Update Operation
router.get("/edit/:id", (req, res, next) => {});

// post route for processing the edit page  - Update Operation
router.post("/edit/:id", (req, res, next) => {});

// get route for displaying the delete page
router.get("/delete/:id", (req, res, next) => {});

module.exports = router;
