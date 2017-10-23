const express = require('express');
const constants = require('../constants');
const BALL_MODEL = require('../models/BallModel');
const TICKET_MODEL = require('../models/TicketModel');
const randomUtils = require('../helpers/randomUtils');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    bootstrapData: JSON.stringify({
      ticketValues: TICKET_MODEL.getTickets(),
      selectedNumbers: BALL_MODEL.getBalls()
    })
  });
});

module.exports = router;
