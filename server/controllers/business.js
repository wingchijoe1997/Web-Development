let express = require("express");
let router = express.Router;
let mongoose = require("mongoose");

let Business = require("../models/webuser");

module.exports.displayBusiness = function (req, res, next) {
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
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("businessList/add", { title: "Add business" });
};

module.exports.processAddPage = (req, res, next) => {
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
      res.redirect("/business");
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  Business.findById(id, (err, businessToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("businessList/edit", {
        title: "Edit business",
        Business: businessToEdit,
      });

      console.log("123");
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
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
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  Business.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/business");
    }
  });
};
