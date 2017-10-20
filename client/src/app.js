import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Panel, PageHeader, Alert, FormGroup, ControlLabel, HelpBlock, Button, FormControl } from 'react-bootstrap';
import BingoContainer from './components/BingoContainer';
import bingoReducer from './reducers/bingoReducer';

const root = document.getElementById('root');
const bootstrapData = JSON.parse(root.getAttribute('data-bootstrap'));
const bootstrapState = Object.assign(bootstrapData, {
    hasWon: false,
    verified: false
});
const store = createStore(bingoReducer, bootstrapState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <div>
            <BingoContainer />
        </div>
    </Provider>,
    root
);