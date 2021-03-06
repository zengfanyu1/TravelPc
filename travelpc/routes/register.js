const express = require('express');
const router = express.Router();
const md5 = require('md5');
const user = require('../models/user'); 

router.get("/", function (req, res) {
    res.render("register");
})

router.post('/', function (req, res) {
    var userInstance = new user({
        username: req.body.username,
        password: md5(req.body.password)
    });
    userInstance.save();
    res.redirect('/login');
})

module.exports = router;