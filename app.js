var ROOTURL = "/"


//very important variables, praise be to them
var express = require('express');
var app = express();
var swig = require('swig');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');

// view engine setup
app.engine('html',swig.renderFile);
app.use(express.static(path.join(__dirname ,'assets')));
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);


// website icon
app.use(favicon(__dirname + '/assets/icon.ico'));


//For .LESS and static files
app.use(require('less-middleware')(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'assets')));

//delete all css files that have a less counterpart
fs.readdir(path.join(__dirname, 'assets/stylesheets'),cleanCSS);

//ROUTING
var HomeController = require('./controllers/index');
var PostController = require('./controllers/posts');
app.use('/', HomeController);
app.use('/posts/', PostController);





//ERRORS

// catch 404 
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('error/404', {
      message: err.message,
      error: err,
	  HOME_PATH: ROOTURL
    });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error/500', {
      message: err.message,
      error: err
    });
    console.log(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/**
	cleanCSS: callback which looks at all less files and runs a clean on css counterparts
*/
function cleanCSS(err, files){
	
	if (err != null){
		console.log(err);
		return false;	
	}
	//good to go
	for(var index=0;index < files.length;index++){
		var styleFile = files[index];
		if(styleFile.indexOf(".less") >= 0){
			//found a less file
			var rootname = styleFile.substring(0,styleFile.indexOf(".less"));
			var cssCounterPart = rootname + ".css";
			//delete css file
			try{
				fs.unlinkSync(path.join(__dirname, 'assets/stylesheets/'+cssCounterPart));
			}
			catch(deleteerr){
				console.log("No need to delete " + path.join(__dirname, 'assets/stylesheets/'+cssCounterPart));
			}
		}
	}	
	
	return true;
}

module.exports = app;
