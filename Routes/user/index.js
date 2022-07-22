const express = require('express');
const router = express.Router({mergeParams:true})
const check_auth = require('../../middleware/check_auth');
let post = require('./post');
let put = require('./put');
let get = require('./get');
router.post("/login", post.login);
router.post("/signup", post.signup);
router.put("/",check_auth,put.updateUser);
router.get("/",check_auth, get.getUser);
module.exports= router;

