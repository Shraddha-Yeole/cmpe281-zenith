var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  mobilenumber: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
});


var User = mongoose.model('User', UserSchema);
module.exports = User;