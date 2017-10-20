const _ = require('lodash');
const BALL_MODEL = require('../models/BallModel');

class BallController {
    constructor(router) {
        router.get('/balls', this.listBalls.bind(this));
        router.post('/balls', this.drawBall.bind(this));
        router.post('/balls/verify', this.verify.bind(this));

        this.model = BALL_MODEL;
    }

    drawBall(req, res) {
        res.header("Content-Type",'application/json');
        this.model.drawBall();
        res.status(201).send(JSON.stringify({
            selectedNumbers: this.model.getBalls()
        }));
    }

    listBalls(req, res) {
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify({
            selectedNumbers: this.model.getBalls()
        }));
    }

    verify(req, res) {
        res.header("Content-Type",'application/json');
        let ticketValues = req.body.ticketValues;
        for (let i in ticketValues) {
            let ticket = ticketValues[i].map(n => parseInt(n));
            let intersec = _.intersection(this.model.getBalls(), ticket).sort();
            ticket.sort();
            if (_.isEqual(ticket, intersec)) {
                res.send(JSON.stringify({
                    hasWon: true
                }));
                BALL_MODEL.reset();
                return;
            }
        }
        res.send(JSON.stringify({
            hasWon: false
        }));
    }
}

module.exports = BallController;