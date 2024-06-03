const mongoose = require("mongoose");

const userObj = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

  const userModel = mongoose.model("user", userObj);
  module.exports = userModel;