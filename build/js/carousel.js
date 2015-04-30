var React  = require('react');
    Slider = require('react-slick'),

BigFishCarousel = React.createClass({displayName: "BigFishCarousel",
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
          React.createElement(Slider, React.__spread({},  settings), 
            React.createElement("div", null, React.createElement("img", {src: "img/slider01.jpg"})), 
            React.createElement("div", null, React.createElement("img", {src: "img/slider02.jpg"})), 
            React.createElement("div", null, React.createElement("img", {src: "img/slider03.jpg"}))
          )
        );
    }
});
React.render(
    React.createElement(BigFishCarousel, null),
    document.getElementById('content')
);
