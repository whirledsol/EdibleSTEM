var express = require('express');
var router = express.Router();

	/**
		GLOBAL VARS
	*/
var vars = new Object;
	vars.HOME_PATH = ".";
	vars.title = "Edible STEM";	




router.get('/about', function(req, res, next) {
  res.render('about', vars);
});
router.get('/cool-tips', function(req, res, next) {
  res.render('cool-tips', vars);
});
router.get('/can-dids', function(req, res, next) {
  res.render('can-dids', vars);
});
router.get('/lab', function(req, res, next) {
  res.render('lab', vars);
});
router.get('/legal', function(req, res, next) {
  res.render('legal', vars);
});

	
	/**
		From Parameters, creates a block on the page for the carousel
	*/
	vars.CreateBlock = function(title,url,imageurl){
		title = title == null ? "" : title ;
		url = url == null ? "#" : url ;
		
		var html = '';
		html += '<a href="/posts/'+url+'">';
		html += '<table class="recipeTable">';
			html += '<tr>';
				html += '<td>';
				if (imageurl != null){
					html += '<img src="/images/'+imageurl+'" />';
				}
				html += '</td>';
			html += '</tr>';
			html += '<tr>';
				html += '<td class="font-handwritten font-green-dark">';
					html += title;
				html += '</td>';
			html += '</tr>';
		html += '</table>';
		html += '</a>';
		return html;
		};
		
	/**
		Title
	*/
	



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', vars);
});

module.exports = router;
