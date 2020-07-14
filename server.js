//import express, body-parser, and path modules
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require('mongoose');


//the port to bind should be either 8080 or process.env.PORT so that node express server can be deployed to Heroku
const PORT = process.env.PORT || 8080; 

//create a new express application
const app = express();

//app.use() is intended for binding middleware to your application
//you need to use bodyParser() if you want the form data to be available in req.body. 
//bodyParser has to parse the data differently depending on its type
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//use the following code to serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://phoebe:Potato123!@ds249818.mlab.com:49818/heroku_jrcnwlj4", {
	useNewUrlParser: true,
	useFindAndModify: false
})

//The code below returns a function
//var func = require('./routes/htmlRoutes.js');
//func(app);
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//return HTTP server instance
app.listen(PORT, function() {
	console.log("listening");
});
