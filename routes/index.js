var express = require("express");
var router = express.Router();

let webuser = require("../models/webuser");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("content", { title: "Home" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("content", { title: "Home" });
});

/* GET About Us page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET Products page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Products" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

/* GET business Us page. */
router.get("/business", function (req, res, next) {
  // res.render("business", { title: "business" });
  webuser.find((err, user) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("business", { title: "Business", User: user });
    }
  });
});

/* GET Contact Us page. */
router.get("/Login", function (req, res, next) {
  res.render("Login", { title: "Login" });
});

module.exports = router;
