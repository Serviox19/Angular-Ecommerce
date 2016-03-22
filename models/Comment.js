var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comment: String,
  item: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
