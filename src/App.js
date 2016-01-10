var React = require('react');
var Carousel = require('./Carousel');
var Footer = require('./Footer');
require('react-mdl/extra/material.css')
require('react-mdl/extra/material.js')

var App = React.createClass({
    render() {
        return (
            <div>
                <Carousel />
                <Footer />
            </div>
        );
    },
});

module.exports = App;