var express = require("express");
const { findById } = require("../models/webuser");
var router = express.Router();

let Business = require("../models/webuser");

let indexController = require("../controllers/index");
let businessController = require("../controllers/business");

let passport = require("passport");
// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

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
router.get("/business/add", requireAuth, businessController.displayAddPage);

// post route for processing the add page -Create Operation
router.post("/business/add", requireAuth, businessController.processAddPage);

// get route for displaying the edit page   - Update Operation
router.get(
  "/business/edit/:id",
  requireAuth,
  businessController.displayEditPage
);

// post route for processing the edit page  - Update Operation
router.post(
  "/business/edit/:id",
  requireAuth,
  businessController.processEditPage
);

// get route for displaying  the delete page
router.get(
  "/business/delete/:id",
  requireAuth,
  businessController.performDelete
);

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
