//dependencies
var express = require("express");
var bodyParser = require("body-parser");

// setting up express
var app = express();
var PORT = process.env.PORT || 3000;
//set up bodyparser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//listen to port
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
  
//connecting routes from routing
  // html routes
  // (app) is from module.exports from route files
require('./app/routing/htmlRoutes.js')(app);
  // api routes
require('./app/routing/apiRoutes.js')(app);