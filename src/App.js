var React = require('react');
var Carousel = require('./Carousel');
var Footer = require('./Footer');
var Header = require('./Header')
require('react-mdl/extra/material.css')
require('react-mdl/extra/material.js')

var App = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Carousel />
                <Footer />
            </div>
        );
    },
});

module.exports = App;