var mongoose = require('mongoose');

//Mongoose Connect
var db = 'mongodb://localhost/garage_sale';
mongoose.connect(db);

var User = require('./models/');
var Item = require('./models/');
var Comment = require('/models/');


//create a user
var user1 = new User({
//populate with your unique keys in your db
});

//saving user
user1.save(function(err){
  if (err) return (err);
});


