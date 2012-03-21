
var express = require('express'),
	//Use a config to make any customizations
	bndlr = require('./bndlr.config.js'),
	app = express.createServer();


app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(bndlr.middleware);
app.use(app.router);

//setup Jade and turn layout off for Express 3 compat
app.set('view engine', 'jade');
app.set('view options', { layout: false, pretty: true });


app.dynamicHelpers(bndlr.dynamicHelpers);


app.get('/', function(req, res){
	var min = !!+(req.query.min||exports.min),
		common = bndlr.open(bndlr.webroot + '/public/bundle.config.js');
	res.render('splash', {
		min:min,
		webroot: bndlr.webroot,
		common:common,
		isBundle: function(file){
			return file instanceof bndlr.Bundle;
		},
		addMin: function(filename){
			return bndlr.addMin(filename);
		}
	});
});

app.listen(80);
console.log('Express app started on port 80');