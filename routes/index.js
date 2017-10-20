const express = require('express');
const BALL_MODEL = require('../api/models/BallModel');
const randomUtils = require('../helpers/randomUtils');

const router = express.Router();
const TICKET_NUM = 4;
const CELL_NUM = 25;

/* GET home page. */
router.get('/', function(req, res, next) {
  let ticketValues = [];
  for (let i = 0; i < TICKET_NUM; i++) {
    let randomBalls = randomUtils.randomBalls();
    ticketValues.push(randomBalls.slice(0, CELL_NUM));
  } 

  res.render('index', {
    bootstrapData: JSON.stringify({
      ticketValues: ticketValues,
      selectedNumbers: BALL_MODEL.getBalls()
    })
  });
});

module.exports = router;
