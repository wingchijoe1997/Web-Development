let mongoose = require("mongoose");

//create a user class
let webuser = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("user", webuser);
