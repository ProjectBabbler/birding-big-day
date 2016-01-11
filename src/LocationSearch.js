var React = require('react');
var ReactSelect = require('react-select');
require('react-select/dist/react-select.min.css')

var LocationSearch = React.createClass({
    render() {
        var locations = this.props.locations.map((loc, i) => {
            return {
                value: i,
                label: `${loc.name} (${loc.subnational1Code})`,
            }
        });

        return (
            <div style={{
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 5,
            }}>
                <ReactSelect
                    placeholder="County of Interest"
                    options={locations}
                    ignoreCase={true}
                />
            </div>
        );
    },
});

module.exports = LocationSearch;