var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/leek-potato-soup', function(req, res, next) {
  res.render('posts/leek-soup', { title: 'Leek and Potato Soup' });
});

module.exports = router;
