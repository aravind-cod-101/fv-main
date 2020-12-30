import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import Banner from "../../assets/banner.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 10,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

class OpeningBanner extends Component {
  render() {
    return (
      <div className="bnr-20">
        <div className="opening-banner">
          <Slider {...settings}>
            <img className="img-res" src={Banner} alt="Banner" />
            <img
              className="img-res"
              src={
                "https://spacewood.in/wp-content/uploads/2017/08/terri-bed-4.jpg"
              }
              alt="Banner"
            />
          </Slider>
        </div>
      </div>
    );
  }
}

export default OpeningBanner;
