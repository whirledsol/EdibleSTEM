var express = require('express');
var router = express.Router();

var vars = new Object;
	/**
		HOME_PATH
	*/
	vars.HOME_PATH = "../";
	vars.title = "Leek and Potato Soup";
	
/* GET users listing. */
router.get('/leek-potato-soup', function(req, res, next) {
  res.render('posts/leek-potato-soup', vars);
});

module.exports = router;
