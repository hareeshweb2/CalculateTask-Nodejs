var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var cors = require('cors'); // CORS is a node.js package for 
//providing a Connect / Express middleware that can be 
// used to enable CORS with various options.

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function() {
    console.log("app running on port.", server.address().port);
});