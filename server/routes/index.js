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
  res.render("projects", { title: "Projects" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

/* GET business  page. */
router.get("/business", function (req, res, next) {
  // res.render("business", { title: "business" });
  webuser.find((err, business) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("businessList/business", {
        title: "Business",
        Business: business,
      });
    }
  });
});

/* GET Login Us page. */
router.get("/Login", function (req, res, next) {
  res.render("Login", { title: "Login" });
});

module.exports = router;
