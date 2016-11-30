const User = require('./user.model').User;

module.exports = {
  getAll: (req, res) => {
    console.log('ask for users');
    
    User.find((err, doc) => {
      res.send(doc);
    });
  }
}