var express = require('express');
var app = express();
var rand = require('random-seed');

const ROOT = "./public";

//receive a port, or select default port
app.set('port', (process.env.PORT || 5000));

//log each server request
app.use(function(req, res, next) {
	console.log(req.method + " request for " + req.url);
	next();
});

//send the home page
app.get(['/', '/index.html', '/index'], function(req, res) {
	res.sendFile("/index.html", {root: ROOT});
});

app.get('/rand/:seed',function(req,res){
	var random = {};
	random.val = rand(req.params.seed);
	res.send(random);
})

//send all other static files
app.use(express.static(ROOT));

//send 404 for anything other request
app.all("*", function(req, res) {
  res.status(404);
	res.sendFile("/404.html", {root: ROOT});
})

//start listening on the selected port
app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});
