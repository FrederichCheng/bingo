import { createAction } from 'redux-actions'
import $ from 'jquery';

export const ballDrawn = createAction('BALL_DRAWN');
export const ballDrawing = createAction('BALL_DRAWING');
export const drawBallFailed = createAction('DRAW_BALL_FAILED');
export const ticketVerified = createAction('TICKET_VERIFIED');
export const ticketVerifying = createAction('TICKET_VERIFYING');
export const ticketVerifyFailed = createAction('TICKET_VERIFY_FAILED');

export function drawBall() {
    return function (dispatch) {
        dispatch(ballDrawing());
        const url = `/api/v1/balls`;
        $.ajax({
            type: 'POST',
            url,
            success: (data) => {
                dispatch(ballDrawn(data));
            },
            error: (error) => {
                dispatch(drawBallFailed({message: 'Draw failed', error}));
            },
        });
    };
};

export function verify(ticketValues) {
    return function (dispatch) {
        dispatch(ticketVerifying());
        const url = `/api/v1/balls/verify`;
        $.ajax({
            type: 'POST',
            data: {
                ticketValues: ticketValues
            },
            url,
            success: (data) => {
                dispatch(ticketVerified(data));
            },
            error: (error) => {
                dispatch(ticketVerifyFailed({message: 'Verification failed', error}));
            },
        });
    };
};