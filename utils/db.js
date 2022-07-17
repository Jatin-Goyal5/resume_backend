const mongoose = require("mongoose");
const env = require('../env/env');
mongoose.connect(env.mongoURI).then(()=>{
  console.log("Db connected");
}).catch((e)=>{
  console.log(e.message);
})

module.exports =mongoose;