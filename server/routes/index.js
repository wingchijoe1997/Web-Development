var express = require("express");
const { findById } = require("../models/webuser");
var router = express.Router();

let Business = require("../models/webuser");

let indexController = require("../controllers/index");
let businessController = require("../controllers/business");
/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET About Us page. */
router.get("/about", indexController.displayAboutPage);

/* GET Products page. */
router.get("/projects", indexController.displayProjectsPage);
/* GET Services page. */
router.get("/services", indexController.displayServicesPage);

/* GET Contact Us page. */
router.get("/contact", indexController.displayContactPage);

/* GET business  page. */
router.get("/business", businessController.displayBusiness);

// get route for displaying the add page - Create Operation
router.get("/business/add", businessController.displayAddPage);

// post route for processing the add page -Create Operation
router.post("/business/add", businessController.processAddPage);

// get route for displaying the edit page   - Update Operation
router.get("/business/edit/:id", businessController.displayEditPage);

// post route for processing the edit page  - Update Operation
router.post("/business/edit/:id", businessController.processEditPage);

// get route for displaying  the delete page
router.get("/business/delete/:id", businessController.performDelete);

/* GET Login Us page. */
router.get("/Login", function (req, res, next) {
  res.render("Login", { title: "Login" });
});

module.exports = router;
