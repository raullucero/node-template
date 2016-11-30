const express = require('express');
const router = express.Router();


const handlers = require('./user.controller');
console.log(handlers);

router.get('/', handlers.getAll);

router.get('/:userId', () => {
});

module.exports = router;