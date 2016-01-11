var React = require('react');
var { Carousel, CarouselItem } = require('react-bootstrap');

var MainCarousel = React.createClass({
    render() {
        var imageStyle = {
            width: '100%',
            height: 700,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
        return (
            <Carousel>
                <CarouselItem>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: 'url(/img/birds1.jpg)',
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
                            backgroundImage: 'url(/img/birds2.jpg)',
                        }}
                    />
                    <div className="carousel-caption">
                        <h1>Beat a local record</h1>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: 'url(/img/birds3.jpg)',
                        }}
                    />
                    <div className="carousel-caption">
                        <h1>Look, Listen, List</h1>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: 'url(/img/birds4.jpg)',
                        }}
                    />
                    <div className="carousel-caption">
                        <h1>Beat the Numbers</h1>
                    </div>
                </CarouselItem>
            </Carousel>
        );
    },
});

module.exports = MainCarousel;