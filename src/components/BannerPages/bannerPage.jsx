import React, { Component } from "react";
import Slider from "react-slick";

import "./bannerPage.css";

import Catalogue from "../../assets/images/banner/free catalogue.jpg";
import Photography from "../../assets/images/banner/free photography.jpg";
import Carpenter from "../../assets/images/banner/promote indigenous carpenter.jpg";
import Craftmans from "../../assets/images/banner/support for indigenous craftsman.jpg";

class BannerPage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { src: "" };
  }

  componentDidMount() {
    this.updateBanner();
  }
  componentWillUnmount() {
    this.setState({ src: "" });
  }

  updateBanner = () => {
    const { page } = this.props;
    let src = "";
    if (page === "catalogue") {
      src = Catalogue;
    } else if (page === "photography") {
      src = Photography;
    } else if (page === "carpenter") {
      src = Carpenter;
    } else if (page === "craftmans") {
      src = Craftmans;
    }
    this.setState({ src });
  };
  render() {
    const { src } = this.state;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="banner-page">
        <Slider {...settings}>
          <div>
            <img
              src={src}
              alt={this.props.page + " banner"}
              width="100%"
              height="400"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default BannerPage;
