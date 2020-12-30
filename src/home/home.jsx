import React, { Component } from "react";

import ProductCard from "../components/productCard";
import SupplyCard from "../components/supplyCard";
import CarouselCard from "../components/carouselCard";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    const url = "https://source.unsplash.com/collection/1163637/120x120";
    const supplyUrl = "https://source.unsplash.com/collection/1163637/80x80";
    const exclusiveUrl =
      "https://source.unsplash.com/collection/1163637/180x180";
    // const name = [
    //   "New Arrival",
    //   "Bulk Sourcing",
    //   "Customised Products",
    //   "Off the Shelf Products",
    // ];
    const name = [
      "Top Manufacturers",
      "Bulk Sourcing",
      "Customised Products",
      "Off the Shelf Products",
    ];
    const supplierName = [
      "Home Decor Products",
      "Commercial Furniture",
      "Modular Kicthen and Cabinets",
      "Carved Furniture and Art Work",
      "Construction and Interior",
    ];
    const exclusiveName = [
      "Exclusive Product Promotion for Enrolled Vendors 1",
      "Exclusive Product Promotion for Enrolled Vendors 2",
      "Exclusive Product Promotion for Enrolled Vendors 3",
      "Gift A Furniture",
    ];
    const imgArr = [1, 2, 3, 4];
    const exclusiveArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <main>
        <div className="products-home grid-container">
          {name.map((n) => {
            return <ProductCard key={n} url={url} name={n} imgArr={imgArr} />;
          })}
        </div>
        <div className="supplier-home">
          {supplierName.map((n) => {
            return (
              <SupplyCard key={n} url={supplyUrl} name={n} imgArr={imgArr} />
            );
          })}
        </div>
        <div className="exclusive-home">
          {exclusiveName.map((n) => {
            return (
              <CarouselCard
                key={n}
                url={exclusiveUrl}
                name={n}
                imgArr={exclusiveArr}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Home;
