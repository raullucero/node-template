const mongoose = require('mongoose');

const schema = {
  original_url:String,
  shorted:String,
  creation:Date,
  last_use:Date,
  user_id:String,
}

const Url = mongoose.model('Url', schema, 'urls');

module.exports = {
  Url: Url,
  schema: schema
};
