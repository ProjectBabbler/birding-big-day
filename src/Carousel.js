var React = require('react');
var { Carousel, CarouselItem } = require('react-bootstrap');

var MainCarousel = React.createClass({
    render() {
        var imageStyle = {
            width: '100%',
            height: 400,
            backgroundSize: 'cover',
        };
        return (
            <Carousel>
                <CarouselItem>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: 'url(/img/bigdaybirding.jpg)',
                        }}
                    />
                    <div className="carousel-caption">
                        <h1>Plan Your Next Big Day</h1>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: 'url(/img/bigdaybirding.jpg)',
                        }}
                    />
                    <div className="carousel-caption">
                        <h1>Beat a local record</h1>
                    </div>
                </CarouselItem>
            </Carousel>
        );
    },
});

module.exports = MainCarousel;