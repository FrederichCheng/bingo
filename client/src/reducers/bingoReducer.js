import { handleActions } from 'redux-actions'
import { ballDrawn, ballDrawing, drawBallFailed, ticketVerified, ticketVerifying, ticketVerifyFailed } from '../actions/bingoActions'

const reducer = handleActions({
    [ballDrawn](state, { payload: payload }) {
        return Object.assign({}, state, { error: undefined, verified: false }, payload);
    },
    [ticketVerified](state, { payload: payload }) {
        return Object.assign({}, state, { error: undefined, verified: true }, payload);

    },
    [drawBallFailed](state, { payload: error }) {
        console.error(error);
        return Object.assign({}, state, { error });
    },
    [ticketVerifyFailed](state, { payload: error }) {
        console.error(error);
        return Object.assign({}, state, { error });
    },
}, {});

export default reducer;