const mongoose = require('mongoose');

const schema = {
  name:String,
  email:String
}

const User = mongoose.model('User', schema, 'users');

module.exports = {
  User: User,
  schema: schema
};
