import React from 'react';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';
import { Label } from 'react-bootstrap';

const propTypes = {
    selectedNumbers: PropTypes.arrayOf(PropTypes.number),
};

const defaultProps = {
    selectedNumbers: []
};

const MAX_HISTORY_ITMES = 5;

export default class BallHistory extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let balls = [];
        let selectedNumbers = this.props.selectedNumbers;
        if (selectedNumbers.length > 1) {
            const end = selectedNumbers.length - 1;
            const start = end >= MAX_HISTORY_ITMES ? end - MAX_HISTORY_ITMES : 0;
            balls = selectedNumbers.slice(start, end);
        }
        const ballLabels = balls.map((num ,i) => {
            return <Label className="ball" key={(i).toString()} bsStyle="default">{sprintf("%02d", num)}</Label>;
        });
        return <div className="ball-history">
            <h4>previous balls</h4>
            <div className="balls">
                {ballLabels}
            </div>
        </div>;
    }
}

BallHistory.propTypes = propTypes;
BallHistory.defaultProps = defaultProps;