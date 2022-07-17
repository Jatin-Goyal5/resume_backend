const mongoose = require("../utils/db");
// const uniqueValidator= require("mongoose-unique-validator");
const userSchema = mongoose.Schema({
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    },
   name:{
    type: String,
   },
   phnNo: {
    type:String,
   },
   about:{
    type:String,
   },
   imgLink:{
    type:String
   },  
  });
  module.exports = mongoose.model('User',userSchema);