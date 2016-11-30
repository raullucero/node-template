const express = require('express');
const router = express.Router();
const users = require('../controllers/users/users.route');

router.use('/users', users);

router.get('/login', (req, res) => {
  res.send('from the login callback');
});


module.exports = router;

