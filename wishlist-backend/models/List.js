const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name for the list.',
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
})

module.exports = mongoose.model('List', listSchema)