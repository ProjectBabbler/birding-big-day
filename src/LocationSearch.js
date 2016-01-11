var React = require('react');
var {AutoComplete} = require('material-ui');

var LocationSearch = React.createClass({
    render() {
        var locations = this.props.locations.map(loc => {
            return {
                text: `${loc.name} (${loc.countryCode})`,
            };
        });

        return (
            <div style={{
                backgroundColor: '#fff',
                padding: 5,
            }}>
                <AutoComplete
                    style={{
                        width: '100%',
                    }}
                    hintText="County of Interest"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={locations}
                />
            </div>
        );
    },
});

module.exports = LocationSearch;