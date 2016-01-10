var React = require('react');
var {Footer, FooterSection, FooterLinkList} = require('react-mdl');

var MainFooter = React.createClass({
    render() {
        return (
            <Footer size="mini">
                <FooterSection type="left" logo="Birding Big Day">
                    <FooterLinkList>
                        <a href="#">About</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        );
    },
});

module.exports = MainFooter;