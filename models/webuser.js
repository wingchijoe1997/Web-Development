let mongoose = require("mongoose");

//create a user class
let business = mongoose.Schema(
  {
    name: String,
    email: String,
    contact: String,
  },
  {
    collection: "business",
  }
);

module.exports = mongoose.model("business", business);
