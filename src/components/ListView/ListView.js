import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ListView.css";

const pics = [
  "https://image.freepik.com/free-photo/3d-rendering-scandinavian-pink-wall-with-green-leather-decor-living-room_105762-937.jpg",
  "https://image.freepik.com/free-psd/cozy-living-room-with-brown-sofa-center-table-large-window_176382-1508.jpg",
  "https://image.freepik.com/free-vector/modern-interior-with-yellow-sofa_1441-3957.jpg",
  "https://image.freepik.com/free-photo/comfortable-armchair-room-decorated_1048-2932.jpg",
  "https://image.freepik.com/free-photo/blue-chair-room_53876-88595.jpg",
  "https://image.freepik.com/free-photo/cozy-room-with-wooden-desk-laptop_23-2148267447.jpg"
]

export default function ListView() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className="item-slider">
      <Slider {...settings}>
        {
          pics.map((pic, pic_key) => {
            return (
              <div key={pic_key} className="list-view-container">
                <div className="list-view-wrap">
                  <img className="list-view-pic" src={pic} />
                  <p>{pic_key}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}