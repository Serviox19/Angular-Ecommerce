var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var PORT = process.env.PORT || 3000;

//db connection
var db = 'mongodb://localhost/garage_sale';
mongoose.connect(db);

var User = require('./models/User.js');
var Item = require('./models/Item.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));

app.use(passport.initialize());
app.use(passport.session());

var api = require('./routes/api');
app.use('/api', api);

app.use(session({
  secret: 'super secret',
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 5
  },
  saveUninitialized: true,
  resave: true
}));


app.listen(PORT, function(req, res){
  console.log('Listening on PORT: ' + PORT);
});
