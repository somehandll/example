var React  = require('react');
    Slider = require('react-slick'),

BigFishCarousel = React.createClass({
    render: function () {
        var settings = {
            centerMode: true,
            centerPadding: '480px',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
          <Slider {...settings}>
            <div><img src={"./img/slider01.jpg"}/></div>
            <div><img src={"./img/slider02.jpg"}/></div>
            <div><img src={"./img/slider03.jpg"}/></div>
          </Slider>
        );
    }
});
React.render(
    <BigFishCarousel />,
    document.getElementById('content')
);
