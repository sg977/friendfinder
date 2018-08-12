// Your server.js file should require the basic npm packages
// we've used in class: express, body-parser and path.

//require dependencies 
var express = require('express');
var bodyParser = require ('body-parser');
var path = require('path');

//comfigure the express application 
var app = express();
var PORT = process.env.PORT||8080;

//expose the public directory to access CSS files 
app.use(express.static(path.join(__dirname, './app/public')));

//parsing incoming request bodies 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//add application routers
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//start listening on PORT
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on Port: ' + PORT);

});