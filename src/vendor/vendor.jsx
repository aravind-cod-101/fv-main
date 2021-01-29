import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import axios from "axios";
import Slider from "react-slick";

import {loadProduct} from '../store/product/actions';
import CategoryCard from "./categoryCard";
import vendorProducts from "../assets/data/venus.json";

import Logo from "../assets/images/vendor/bismilla/bismillah logo-1.jpg";
import Banner1 from "../assets/images/vendor/bismilla/img_1.jpg";
import Banner2 from "../assets/images/vendor/bismilla/img_2.jpg";
import Banner3 from "../assets/images/vendor/bismilla/img_3.jpg";
import Banner4 from "../assets/images/vendor/bismilla/img_4.jpg";
import Banner5 from "../assets/images/vendor/bismilla/img_5.jpg";

var fetchProductsUrl = "https://squnic-cors.herokuapp.com/http://13.127.249.221:8000/vendor/fetch/products";

class Vendor extends Component {
  state = {
    products:[],
    iterator:[0,1,2,3,4,5,6,7,8,9]
  };
  constructor(props) {
    super(props);
    // this.state = { category: {}, keys: [] };
  }

  componentDidMount(){
    this.updateState();
}
updateState = ()=>{
    this.getProductsList();
}
getProductsList = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get(fetchProductsUrl).then((res)=>{
            let products = res.data.products;
            this.setState({products});
            resolve();
            reject("Fetching products failed");
        });
    })
}

  // componentDidMount() {
  //   let category = {};
  //   for (let i in vendorProducts) {
  //     let name = vendorProducts[i]["product_category"];
  //     if (name in category) {
  //       category = {
  //         ...category,
  //         [name]: [...category[name], { ...vendorProducts[i] }],
  //       };
  //     } else {
  //       category = {
  //         ...category,
  //         [name]: [{ ...vendorProducts[i] }],
  //       };
  //     }
  //   }
  //   let keys = Object.keys(category);
  //   this.setState({ category, keys });
  // }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="vendor-page">
        <div className="home-banner">
          <Slider {...settings}>
            <div>
              <img src={Banner1} alt="Bismillah Banner" />
            </div>
            <div>
              <img src={Banner2} alt="Bismillah Banner" />
            </div>
            <div>
              <img src={Banner3} alt="Bismillah Banner" />
            </div>
            <div>
              <img src={Banner4} alt="Bismillah Banner" />
            </div>
            <div>
              <img src={Banner5} alt="Bismillah Banner" />
            </div>
          </Slider>
        </div>
        <div className="vendor-products">
        {this.state.products.map((product,i)=>{
          console.log(i)
            return <div className="product-container" key={i}>
            <div className="product-image">
                <img src={product.product_thumbnail} alt={product.product_title}/>
            </div>
            <div className="product-details">
                <div className="product-name">{product["product_title"]}</div>
                
                <div className="product-rate">
                    <div className="final-rate">
                        ₹ {product["product_price"]["selling_price"]}
                        {"   "}
                    </div>
                    {product["product_price"]["discount"] > 0 && (
                        <div className="offer-rate">
                        <div className="original-rate">
                            ₹ {product["product_price"]["mrp"]}
                        </div>
                        </div>
                    )}
                </div>
                <br/>
                <Link to={"/product/"+product.product_id}>
                <span>
                    <button
                    className="btn btn-secondary btn-block"
                    >
                    View
                    </button>
                </span>
                </Link>
            </div>
        </div>
          })}
        </div>
      </div>
    );
  }
}

export default Vendor; 