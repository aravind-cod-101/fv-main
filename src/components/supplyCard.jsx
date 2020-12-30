import React, { Component } from "react";

class SupplyCard extends Component {
  state = {};
  render() {
    const { url, name, imgArr } = this.props;
    const { arr } = this.state;
    let count = 0;
    return (
      <div className="card supplier-card">
        <div className="card-category">
          <div className="card-category-name">{name}</div>
          <div className="supply-shelf row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="supply-cards">
                <div className="card premium-supplier">Premium Suppliers</div>
                <div className="card premium-supplier">Premium Suppliers</div>
                <div className="premium-top">
                  <div className="card top-prod">Top Selling Products</div>
                  <div className="card top-supplier">Top Suppliers </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-0 col-sm-0">
              <div className="premium-top">
                <div className="card top-prod">
                  {imgArr.map((i) => {
                    let className = "prod-pic";
                    count = count + 1;
                    let u = url + "?sig=" + i;
                    return (
                      <img key={i} src={u} alt={count} className={className} />
                    );
                  })}
                </div>
                <div className="card top-supplier">
                  {imgArr.map((i) => {
                    let className = "prod-pic";
                    count = count + 1;
                    let u = url + "?sig=" + i;
                    return (
                      <img key={i} src={u} alt={count} className={className} />
                    );
                  })}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyCard;
