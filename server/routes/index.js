var express = require("express");
var router = express.Router();

let Business = require("../models/webuser");

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
  Business.find((err, business) => {
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

// get route for displaying the add page - Create Operation
router.get("/add", (req, res, next) => {
  res.render("businessList/add", { title: "Add business" });
});

// post route for processing the add page -Create Operation
router.post("/add", (req, res, next) => {
  let newBusiness = Business({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
  });
  Business.create(newBusiness, (err, Business) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the business list
      res.redirect("/businessList/business");
    }
  });
});

// get route for displaying the edit page   - Update Operation
router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;
  Business.findById(id, (err, businessToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("/businessList/edit", {
        title: "Edit business",
        Business: businessToEdit,
      });
    }
  });
});

// post route for processing the edit page  - Update Operation
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;
  let updatedBusiness = Business({
    _id: id,
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
  });
  Business.updateOne({ _id: id }, updatedBusiness, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/business");
    }
  });
});

// get route for displaying the delete page
router.get("/business/delete/:id", (req, res, next) => {
  let id = req.params.id;
  Business.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/business");
    }
  });
});

/* GET Login Us page. */
router.get("/Login", function (req, res, next) {
  res.render("Login", { title: "Login" });
});

module.exports = router;
