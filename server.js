var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = process.env.PORT || 3000;

//db connection
var db = 'mongodb://localhost/for_sale';
mongoose.connect(db);

var User = require('./models/User.js');
var Item = require('./models/Item.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));





app.listen(PORT, function(req, res){
  console.log('Listening on PORT: ' + PORT);
});
