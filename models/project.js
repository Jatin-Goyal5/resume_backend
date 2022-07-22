const mongoose = require("../utils/db");
const projectSchema = mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    skills: {
        type: Array,
    },
    user: { type: mongoose.Schema.Types.ObjectId , ref: "User" }
  
  });
  module.exports = mongoose.model('Project',projectSchema);