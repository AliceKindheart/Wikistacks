var express = require('express');
var router = express.Router();

var Page = require('../models').Page;

/* GET home page. */
router.get('/', function(req, res, next) {
	Page.find({}, function(err, docs)
	{
		res.render('index', { title: 'Express', docs: docs });
	})	
 
});

router.get('/wiki/:title', function(req, res, next) {
	Page.find({url_name:req.params.title}, function(err, docs)
	{
		var pagetitle = docs[0].title;
		var body = docs[0].body;
		res.render('wiki', { title: pagetitle, body: body});
	})	
 
});

module.exports = router;
