//very important variables, praise be to them
var express = require('express');
var app = express();
var swig = require('swig');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');


//TODO: are these needed?
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

// view engine setup
app.engine('html',swig.renderFile);
app.use(express.static(path.join(__dirname ,'public')));
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);


// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/icon.ico'));
/*
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
*/

//For .LESS and static files
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//delete all css files that have a less counterpart
fs.readdir(path.join(__dirname, 'public/stylesheets'),cleanCSS);

//ROUTING
var routes = require('./routes/index');
var posts = require('./routes/posts');
app.use('/', routes);
app.use('/posts/', posts);




//ERRORS

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  console.log(err.stack);
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
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
				fs.unlinkSync(path.join(__dirname, 'public/stylesheets/'+cssCounterPart));
			}
			catch(deleteerr){
				console.log("No need to delete " + path.join(__dirname, 'public/stylesheets/'+cssCounterPart));
			}
		}
	}	
	
	return true;
}

module.exports = app;
