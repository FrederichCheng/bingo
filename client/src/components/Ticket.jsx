import PropTypes from 'prop-types';
import React from 'react';
import TicketCell from './TicketCell'

const propTypes = {
    numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number)
};

const defaultProps = {
    selectedNumbers: []
};

export default class Ticket extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {
        const selectedNumberSet = new Set(this.props.selectedNumbers);
        const cells = this.props.numbers.map(num => {
            return <TicketCell key={num.toString()} number={num} selected={selectedNumberSet.has(num)} />
        });
        return <div className="ticket">
            {cells}
        </div>;
    }
}

Ticket.propTypes = propTypes;
Ticket.defaultProps = defaultProps;