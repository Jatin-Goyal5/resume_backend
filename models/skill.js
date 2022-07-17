const mongoose = require("../utils/db");
const skillSchema = mongoose.Schema({
    name: {type: String},
    rating: {type: Number},
    user: { type: mongoose.Schema.Types.ObjectId , ref: "User" }
  });
  module.exports = mongoose.model('Project',skillSchema);