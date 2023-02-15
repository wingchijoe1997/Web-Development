let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// create the User Model instance
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
  res.render("content", { title: "Home" });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("about", { title: "About" });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("projects", { title: "Projects" });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("services", { title: "Services" });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contact", { title: "Contact" });
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }

      const payload = {
        id: user._id,
        displayName: user.displayName,
        username: user.username,
        email: user.email,
      };

      const authToken = jwt.sign(payload, DB.Secret, {
        expiresIn: 604800, // 1 week
      });

      /* TODO - Getting Ready to convert to API
          res.json({success: true, msg: 'User Logged in Successfully!', user: {
              id: user._id,
              displayName: user.displayName,
              username: user.username,
              email: user.email
          }, token: authToken});
          */

      return res.redirect("/business");
    });
  })(req, res, next);
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/Login");
};
