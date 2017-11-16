var express=require('express');
var app=express();
app.route('/login')
 
 	// show the form (GET http://localhost:1337/login)
  	.get(function(req, res) {
 		res.send('this is the login form');
 	})
 
	// process the form (POST ”


  	.post(function(req, res) {
 		console.log('processing');
 		res.send('processing the login form!');
 	});
 	app.listen(8000);

