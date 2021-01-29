import React, { Component } from "react";
import { Link } from "react-router-dom";

import vendorImage from "../assets/images/vendor/bismilla/bismillah logo-1.jpg";

class ProductCard extends Component {
  state = {};
  // constructor(props) {
  //     super(props);

  // }

  render() {
    const { url, name, imgArr } = this.props;
    const { arr } = this.state;
    let count = 0;
    return (
      <div className="card">
        <div className="card-category">
          <div className="card-category-name">{name}</div>
          <div className="prod-shelf">
            {imgArr.map((i) => {
              let className = "prod-pic";
              count = count + 1;
              let u = "";
              count === 1 ? (u = vendorImage) : (u = url + "?sig=" + i);
              let to = "/vendor/" + count;
              return (
                <Link key={i} to={to}>
                  <img src={vendorImage} alt={count} className={className} />
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
