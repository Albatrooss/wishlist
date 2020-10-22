const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: "Please supply an email address!"
  },
  fName: {
    type: String,
    require: 'Please supply a first name',
    trim: true
  },
  lName: {
    type: String,
    require: 'Please supply a last name',
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);