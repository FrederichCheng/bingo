
const constants = require('../constants');
const randomUtils = require('../helpers/randomUtils');

let randomBalls = randomUtils.randomBalls(constants.MAX_BALL_NUM);
let index = 0;
const BALL_MODEL = {
    ballList: [],

    drawBall() {
        if (index >= randomBalls.length) {
            randomBalls = randomUtils.randomBalls(constants.MAX_BALL_NUM);
            index = 0;
        }
        let newBall = randomBalls[index];
        this.ballList.push(newBall);
        index++;
        return newBall;
    },

    getBalls() {
        return this.ballList;
    },

    reset() {
        this.ballList = [];
        this.drawBall();
    }
}

BALL_MODEL.drawBall();
module.exports = BALL_MODEL;