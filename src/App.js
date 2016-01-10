var React = require('react');
var Carousel = require('./Carousel');

var App = React.createClass({
    render() {
        return (
            <div>
                <Carousel />
            </div>
        );
    },
});

module.exports = App;