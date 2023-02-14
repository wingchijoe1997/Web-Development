var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");

//connect to our user
let Business = require("../models/webuser");

// get route for the business page  - read operation
// router.get("/", (req, res, next) => {
//   Business.find((err, business) => {
//     if (err) {
//       return console.error(err);
//     } else {
//       //console.log(user);
//       res.render("/businessList/business", {
//         title: "Business",
//         Business: business,
//       });
//     }
//   });
// });

// // get route for displaying the add page - Create Operation
// router.get("/add", (req, res, next) => {
//   res.render("businessList/add", { title: "Add business" });
// });

// // post route for processing the add page -Create Operation
// router.post("/add", (req, res, next) => {
//   let newBusiness = Business({
//     name: req.body.name,
//     email: req.body.email,
//     contact: req.body.contact,
//   });
//   Business.create(newBusiness, (err, Business) => {
//     if (err) {
//       console.log(err);
//       res.end(err);
//     } else {
//       //refresh the business list
//       res.redirect("/businessList/business");
//     }
//   });
// });

// // get route for displaying the edit page   - Update Operation
// router.get("/edit/:id", (req, res, next) => {
//   let id = req.params.id;
//   Business.findById(id, (err, businessToEdit) => {
//     if (err) {
//       console.log(err);
//       res.end(err);
//     } else {
//       res.render("/businessList/edit", {
//         title: "Edit business",
//         Business: businessToEdit,
//       });
//     }
//   });
// });

// // post route for processing the edit page  - Update Operation
// router.post("/edit/:id", (req, res, next) => {
//   let id = req.params.id;
//   let updatedBusiness = Business({
//     _id: id,
//     name: req.body.name,
//     email: req.body.email,
//     contact: req.body.contact,
//   });
//   Business.updateOne({ id: id }, updatedBusiness, (err) => {
//     if (err) {
//       console.log(err);
//       res.end(err);
//     } else {
//       res.redirect("/businessList/business");
//     }
//   });
// });

// // get route for displaying the delete page
// router.get("/delete/:id", (req, res, next) => {
//   let id = req.params.id;
//   Business.remove({ _id: id }, (err) => {
//     if (err) {
//       console.log(err);
//       res.end(err);
//     } else {
//       res.redirect("/businessList/business");
//     }
//   });
// });

module.exports = router;
