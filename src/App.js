var React = require('react');
var Carousel = require('./Carousel');
var Footer = require('./Footer');
var Header = require('./Header')
require('react-mdl/extra/material.css')
require('react-mdl/extra/material.js')
var ebird = require('ebird-js');
var axios = require('axios');

var App = React.createClass({
    componentDidMount() {
        ebird.ref.location({
            rtype: 'subnational2',
        }).then(data => {
            this.setState({
                locations: data,
            })
        });
    },

    childContextTypes: {
        counties: React.PropTypes.array.isRequired,
    },

    getChildContext() {
        var queryString = this.props.location.query.counties;
        var counties = queryString ? queryString.split(',') : [];
        return {
            counties: counties,
        };
    },

    getInitialState() {
        return {
            locations: [],
        };
    },

    render() {
        return (
            <div>
                <Header />
                <Carousel locations={this.state.locations} />
                <Footer />
            </div>
        );
    },
});

module.exports = App;