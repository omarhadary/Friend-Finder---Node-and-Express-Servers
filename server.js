// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initial express
var app = express();

// Set port for server listening
var PORT = process.env.PORT || 10000;

// BodyParser for server to consume data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// route files for server

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// start the server
app.listen(PORT, function() {
    console.log("Listening on PORT: "+PORT);
});