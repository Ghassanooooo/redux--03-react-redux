import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counter from './store/reducer/counter';
import results from './store/reducer/results';

//for mul reducer dont forget the nested state 
//ctr: state.ctr.counter,
//res: state.res.results

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reduser = combineReducers({
    ctr: counter,
    res: results
})

const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
