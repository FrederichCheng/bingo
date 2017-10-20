import classNames from 'classNames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool
};

const defaultProps = {
    selected: false
};

export default class TicketCell extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let cellClass = classNames({
            'ticket-cell': true,
            'selected': this.props.selected,
        });
        return <div className={cellClass}>
            <span>
                {this.props.number}
            </span>
        </div>;
    }
}

TicketCell.propTypes = propTypes;
TicketCell.defaultProps = defaultProps;