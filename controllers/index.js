var express = require('express');
var router = express.Router();


var vars = new Object;
	/**
		HOME_PATH
	*/
	vars.HOME_PATH = ".";	
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
	vars.title = "Edible STEM";



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', vars);
});

module.exports = router;
