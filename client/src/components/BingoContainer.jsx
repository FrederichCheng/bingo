import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Panel, Grid, Row, Col, Button, Alert } from 'react-bootstrap';
import Ticket from './Ticket';
import LastBall from './LastBall';
import BallHistory from './BallHistory';
import * as actions from '../actions/bingoActions';


const propTypes = {
    actions: PropTypes.object.isRequired,
    ticketValues: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number),
};

const defaultProps = {
    selectedNumbers: []
};


class BingoContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onRequestDraw() {
        this.props.actions.drawBall();
    }

    onVerify() {
        this.props.actions.verify(this.props.ticketValues);
    }

    render() {

        if (this.props.hasWon) {
            return <img src="/assets/images/winner.png" style={{height: "100%"}} />
        }

        const tickets = this.props.ticketValues.map((values, i) => {
            return <Ticket key={i} numbers={values} selectedNumbers={this.props.selectedNumbers} />
        });
        const lastNumber = this.props.selectedNumbers[this.props.selectedNumbers.length - 1];
        let header = <Grid>
            <Row>
                <Col xs={6} md={6}><LastBall number={lastNumber} /></Col>
                <Col xs={6} md={6}><BallHistory selectedNumbers={this.props.selectedNumbers} /></Col>
            </Row>
        </Grid>;
        
        return <div className="bingo-container">
            <Panel header={header}>
                <div className="ticket-wrapper">
                    {tickets}
                </div>
                <div className="button-set">
                    <Button className="draw" onClick={this.onRequestDraw.bind(this)}>Request Draw</Button>
                    <Button className="bingo" onClick={this.onVerify.bind(this)} bsStyle="success">Bingo!</Button>
                </div>
            </Panel>
            {this.props.verified &&
                <Alert bsStyle="warning">
                    <h4>Tickets verified and no winner yet!</h4>
                </Alert>
            }
            {this.props.error &&
                <Alert bsStyle="danger">
                    <h4>Oh snap! You got an error!</h4>
                    {this.props.error.message}
                </Alert>
            }
        </div>;

    }
}

BingoContainer.propTypes = propTypes;
BingoContainer.defaultProps = defaultProps;


function mapStateToProps(state) {
    return {
        ticketValues: state.ticketValues,
        selectedNumbers: state.selectedNumbers,
        error: state.error,
        verified: state.verified,
        hasWon: state.hasWon
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export { BingoContainer };
export default connect(mapStateToProps, mapDispatchToProps)(BingoContainer);
