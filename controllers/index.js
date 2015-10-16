var express = require('express');
var router = express.Router();

/** HELPERS */

var vars = new Object;
	
	/**
		From Parameters, creates a block on the page for the carousel
	*/
	vars.CreateBlock = function(imageurl,title,summary,url){
		return '<p>Things!</p>';
		};
		
	/**
		Title
	*/
	vars.title = "Edible STEM";



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', vars);
});

module.exports = router;
