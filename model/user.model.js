const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  team: {
    type: String,
    required: true
  },
  win: {
    type: Number,
    required: true,
  },
  lose: {
    type: Number,
    required: true,
  },
  point: {
    type: Number,
    required: true,
  }
});

const userModel = new mongoose.model("USERS", userScheme);

module.exports = userModel;
