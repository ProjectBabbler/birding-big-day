var React = require('react');
var {Layout, Header, Navigation} = require('react-mdl');


var MainHeader = React.createClass({
    render() {
        return (
            <Header title="Birding Big Day Planner">
                <Navigation>
                    <a href="">About</a>
                </Navigation>
            </Header>
        );
    },
});

module.exports = MainHeader;