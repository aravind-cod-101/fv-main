import React, { Component } from "react";
import { Link } from "react-router-dom";

import BismillaLogo from "../assets/images/vendor/bismilla/logo1.jpg";
import ThreeStarLogo from "../assets/images/vendor/threestar/ThreeStarLogo.png";
import RoomGearLogo from "../assets/images/vendor/roomgear/RoomGearLogo.png";
import VenusLogo from "../assets/images/vendor/venus/logo.png";

class ProductCard extends Component {
  state = {};
  // constructor(props) {
  //     super(props);

  // }

  render() {
    const { url, name, imgArr } = this.props;
    const { arr } = this.state;
    const logoArr = [BismillaLogo,ThreeStarLogo,RoomGearLogo,VenusLogo];
    let count = 0;
    return (
      <div className="card">
        <div className="card-category">
          <div className="card-category-name">{name}</div>
          <div className="prod-shelf">
            {imgArr.map((i) => {
              let className = "prod-pic";
              count = count + 1;
              let to = "/vendor/" + count;
              return (
                <Link key={i} to={to}>
                  <img src={logoArr[count-1]} alt={count} className={className} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
