const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name for the item.',
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    // validate: [validator.isURL, 'Please supply a valid URL.'],
    trim: true
  },
  imgs: [String],
  price: Number,
  desireRank: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  },
  exactness: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    enum: ['unclaimed', 'reserved', 'purchased', 'gifted'],
    required: 'Please set a valid status',
    default: 'unclaimed'
  },
  // list: {

  // }
})

module.exports = mongoose.model('Item', itemSchema)