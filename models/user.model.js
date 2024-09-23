const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

let User = mongoose.model("recipeuser", usermodel);

module.exports = User;