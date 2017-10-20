const express = require('express');
const BallController = require('../controllers/BallController');

const router = express.Router();
const ballController = new BallController(router);

module.exports = router;
