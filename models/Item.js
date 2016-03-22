var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
   _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemName: String,
  description: String,
  price: Number,
  sold: Boolean,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
