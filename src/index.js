import React from 'react';
import { render } from 'react-dom';
var App = require('./App');
require('babel-polyfill');
var { createHistory } = require('history');
var { Router, Route } = require('react-router');


var history = createHistory();

render(
    <Router history={history}>
        <Route path="*" component={App} />
    </Router>
, document.getElementById('root'));