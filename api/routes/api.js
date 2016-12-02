const express = require('express');
const router = express.Router();
const users = require('../controllers/users/users.route');
const urls = require('../controllers/url/url.route');

router.use('/users', users);

router.use('/urls', urls);

router.get('/login', (req, res) => {
  res.send('from the login callback');
});


module.exports = router;

