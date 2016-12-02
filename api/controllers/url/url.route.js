const express = require('express');
const router = express.Router();

const handlers = require('./url.controller');

router.get('/', handlers.getUrls);

router.get('/:shorted', handlers.getUrl);


router.post('/', handlers.saveUrl);


module.exports = router;