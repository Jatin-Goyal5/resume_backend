const express = require('express');
const router = express.Router({mergeParams:true})

let post = require('./post');
let get= require('./get');
router.get("/", get.getProjects);
router.post("/", post.addProject);
module.exports= router;

