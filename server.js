/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , basic = require('./routes/basic')
  , http = require('http')
  , path = require('path')
  , curl = require('request');

var app = express();

app.configure(function(){
  app.set('port', process.env.VCAP_APP_PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('2342#$%$#@$%^%&^*__---++==+sjedon'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/basic', basic.basicNode);
//app.get('/getPage',function(req,res){
//    var url = req.param('url');
//    curl(url, function (error, response, body) {
//			if (!error && response.statusCode == 200) {
//				res.send(body);
//				}
//			  else{
//			    res.send({error:' cURL Error:'+error});
//			   }
//		});
//	
//});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});