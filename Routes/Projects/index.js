const express = require('express');
const router = express.Router({mergeParams:true})

let post = require('./post');
let get= require('./get');
const check_auth = require('../../middleware/check_auth');
router.get("/",check_auth, get.getProjects);
router.post("/",check_auth, post.addProject);
module.exports= router;

