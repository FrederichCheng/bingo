import React from 'react';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';

import { Label } from 'react-bootstrap';

const propTypes = {
    number: PropTypes.number.isRequired,
};

export default class LastBall extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.number === undefined) {
            return <div></div>;
        }
        return <div className="last-ball">
            <h3>
                <span>
                    Last Ball
                </span>
                <Label className="number" bsStyle="primary">{sprintf("%02d", this.props.number)}</Label>
            </h3>
        </div>;
    }
}

LastBall.propTypes = propTypes;