var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password : {
    type : String,
    required : true,
  },
  balance: {
    type: Number,
    default: 0,
    currency: 'USD'
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;
