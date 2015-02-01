var express = require('express');
var router = express.Router();


/* GET users listing. */

router.get('/', function(req, res) {
    res.render('add')
});

router.post('/submit', function(req, res) {
	var models = require("../models/");
    var title = req.body.pagetitle;
    var body = req.body.pagecontent;

    var generateUrlName = function(name) {
        if (typeof name != "undefined" && name !== "") {
            // Removes all non-alphanumeric characters from name 
            // And make spaces underscore 
            return name.replace(/\s/ig, "_").replace(/\W/ig, "");
        } else {
            // Generates random 5 letter string 
            return Math.random().toString(36).substring(2, 7);
        }
    };

    var url_name = generateUrlName(req.body.pagetitle);

    var p = new models.Page({
        "title": title,
        "body": body,
        "url_name": url_name
    });
    p.save();
    res.redirect('/');
});


module.exports = router;