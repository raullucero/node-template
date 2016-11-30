const Users = require('./user.model').User;

module.exports = {

  getAll: (req, res) => {    
    Users.find((err, doc) => {
      res.send(doc);
    });
  },

  saveUser: (req, res) => {
    const newUser = new Users(req.body);
    newUser.save(req.body)
           .then(data => res.json(data))
           .catch(err => err);
  }
}