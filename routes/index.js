const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('index');
});

router.get('/api', (req, res) => {
  res.send('you got a user');
});

module.exports = router;