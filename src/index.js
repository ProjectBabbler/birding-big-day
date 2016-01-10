import React from 'react';
import { render } from 'react-dom';
var App = require('./App');
require('babel-polyfill');

render(<App />, document.getElementById('root'));