//server.js

//set up
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var database = require('./config/database');


//configuration
mongoose.connect(database.url);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({"type": "application/vnd.api+json"}));
app.use(methodOverride());

//routes
require('./app/routes')(app);

app.listen(8080);
console.log("App listening on port 8080");