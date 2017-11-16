    //pure node
/* var http = require('http'),
   fs = require('fs');
http.createServer(function(req, res) {
	res.writeHead(200, {
     'Content-Type': 'text/html',
   'Access-Control-Allow-Origin' : '*'
  });
var readStream = fs.createReadStream(__dirname + '/index.html');
readStream.pipe(res);  

  }).listen(1337);
 
 // tell ourselves what's happening
 console.log('Visit me at http://localhost:1337'); */

 
   //express framework

/*var express = require('express');

 
var app     = express();
  //var path = require('path');
    
  // send our index.html file to the user for the home page
  app.get('/display', function(req, res) {
  	//res.sendFile(path.join(__dirname + '/index.html'));
  res.send("hllo");
  console.log("hello");
  });
  // send our index.html file to the user for the home page
  app.get('/display1', function(req, res) {
  	//res.sendFile(path.join(__dirname + '/index.html'));
  res.send("hllo1");
  console.log("hello1");
  });



app.listen(1337);
console.log("port is running");*/


  //************************ express-router and route middleware************
    var express=require('express');
    var app=express();
    var adminRouter = express.Router();
 
  
  adminRouter.use(function(req, res, next) {

 	
 	 	console.log(req.method, req.url);

 	
 	next(); 
 });
  adminRouter.get('/', function(req, res) {
  	res.send('I am the dashboard!');
  });
 
 // users page (http://localhost:1337/admin/users)
 adminRouter.get('/users', function(req, res) {
 	res.send('I show all the users!');
 });

 //route parameters
 adminRouter.get('/users/:name', function(req, res) {
	res.send('hello ' + req.params.name + '!');
 });

 // posts page (http://localhost:1337/admin/posts)
 adminRouter.get('/posts', function(req, res) {
 	res.send('I show all the posts!');
 });
 app.use('/admin', adminRouter);
 

 app.listen(1337);
 
 // apply the routes to our application app.use('/admin', adminRouter);
