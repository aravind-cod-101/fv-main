import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CategoryCard extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { category, products } = this.props;
    return (
      <div className="container product-container">
        <div className="card top-products-bg">
          <span className="title">{category}</span>
        </div>
        <div className="container top-products">
          {products.map((product, i) => {
            return (
              <Link key={i} to={"/product/" + product.product_id}>
                <div className="card product" key={i}>
                  <div className="product-img">
                    <img
                      src={product.product_thumbnail}
                      alt={product.product_title}
                    />
                  </div>
                  <div className="product-name">{product.product_title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryCard;
