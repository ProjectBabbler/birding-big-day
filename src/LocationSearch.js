var React = require('react');
var ReactSelect = require('react-select');
require('react-select/dist/react-select.min.css')
var { History } = require('react-router');


var LocationSearch = React.createClass({
    mixins: [History],

    contextTypes: {
        counties: React.PropTypes.array.isRequired,
    },

    onSelect(code) {
        var counties = this.context.counties;
        counties.push(code);
        this.history.push({
            query: {
                counties: counties.join(','),
            },
        })
    },

    render() {
        var locations = this.props.locations.map((loc, i) => {
            return {
                value: loc.subnational2Code,
                label: `${loc.name} (${loc.subnational1Code})`,
            }
        });

        var locations = locations.filter((item) => {
            return this.context.counties.indexOf(item.value) == -1;
        });

        return (
            <div style={{
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 5,
            }}>
                <ReactSelect
                    className="test-counties-select"
                    placeholder="County of Interest"
                    options={locations}
                    ignoreCase={true}
                    onChange={this.onSelect}
                />
            </div>
        );
    },
});

module.exports = LocationSearch;