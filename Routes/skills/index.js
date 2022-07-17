const express = require('express');
const router = express.Router({mergeParams:true})

let post = require('./post');
let get= require('./get');
router.get("/", get.getSkills);
router.post("/", post.addSkill);
module.exports= router;

