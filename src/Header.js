var React = require('react');
var {Layout, Header, Navigation} = require('react-mdl');


var MainHeader = React.createClass({
    render() {
        return (
            <Layout fixedHeader>
                <Header title="Birding Big Day Planner">
                    <Navigation>
                        <a href="">About</a>
                    </Navigation>
                </Header>
                {this.props.children}
            </Layout>
        );
    },
});

module.exports = MainHeader;