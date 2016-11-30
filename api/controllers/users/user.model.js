const mongoose = require('mongoose');

const schema = {
  name:String
}

const User = mongoose.model('User', schema, 'users');

module.exports = {
  User: User,
  schema: schema
};
