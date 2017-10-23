const constants = require('../constants');
const randomUtils = require('../helpers/randomUtils');

function generateTickets() {
    let ticketValues = [];
    for (let i = 0; i < constants.TICKET_NUM; i++) {
        let randomBalls = randomUtils.randomBalls(constants.MAX_BALL_NUM);
        ticketValues.push(randomBalls.slice(0, constants.CELL_NUM));
    }
    return ticketValues;
}

const TICKET_MODEL = {
    ticketValues: [],
    getTickets() {
        return this.ticketValues;
    },
    reset() {
        this.ticketValues = generateTickets();
    }
};

TICKET_MODEL.reset();

module.exports = TICKET_MODEL;