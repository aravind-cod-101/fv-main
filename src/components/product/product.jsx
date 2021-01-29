/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import prod from "../../assets/data/product.json";
import prod from "../../assets/data/venus.json";
import { loadProduct } from "../../store/product/actions";
import { addCart } from "../../store/cart/actions";
import { connect } from "react-redux";
import Incrementer from "../incrementer";
import ProductCarousel from "./productCarousel";
import "./product.css";

var fetchProductByIdUrl = "https://squnic-cors.herokuapp.com//http://13.127.249.221:8000/web/fetch/product?product_id=";


class Product extends Component {
  state = {
    product:{},
    selected: 0,
    quantity: 1,
  };
  constructor(props) {
    super(props);
    this.state = { selected: 0, quantity: 1, cart: {} };
  }
getProductsList = (id)=>{
    return new Promise((resolve,reject)=>{
        axios.get(fetchProductByIdUrl+id).then((res)=>{
            let product = res.data.product;
            this.props.loadProduct(product);
            resolve();
            reject("Fetching products failed");
        });
    })
}
  componentDidMount() {
    // let product = { ...prod[this.props.match.params["id"] - 1] };
    // let product = {};
    // for (let i in prod) {
    //   if (prod[i]["product_id"] === this.props.match.params["id"]) {
    //     product = { ...prod[i] };
    //     break;
    //   }
    // }
    // this.props.loadProduct(product);
    let id = this.props.match.params["id"];
    this.getProductsList(id);
  }

  onImgChange = (i) => {
    this.setState({
      selected: i,
    });
  };

  onQuantityChange = (i, id) => {
    this.setState({
      quantity: i,
    });
  };

  addToCart = () => {
    let { product, addCart } = this.props;
    let quantity = this.state.quantity;
    let amount = product["product_price"]["selling_price"];
    let delivery = { ...product["product_delivery"] };
    let total = amount * quantity;
    let cart = {
      id: product["product_id"],
      name: product["product_title"],
      image: product["product_thumbnail"],
      quantity: quantity,
      amount: amount,
      total: total,
      delivery,
    };
    this.setState({ cart });
    addCart(cart);
  };

  render() {
    let { product } = this.props;
    return (
      <main>
        {product["product_id"] && (
          <div className="product-page">
            <div className="details">
              <div className="image-column">
                <img
                  className="main-img"
                  src={
                    product["product_images"][this.state.selected]["image_url"]
                  }
                  alt="Product Image"
                  width="450px"
                  height="500px"
                />
                <div className="image-carousel">
                  <ProductCarousel
                    imgArr={product["product_images"]}
                    onSelected={this.onImgChange}
                  />
                </div>
              </div>
              <div className="content-column">
                <div className="product-name">{product["product_title"]}</div>
                <div className="seller">
                  <div className="seller-name">
                    <Link
                      to={"/vendor/" + product["seller_details"]["seller_id"]}
                    >
                      {product["seller_details"]["seller_name"]}{" "}
                      <i className="fa fa-check-circle"></i>
                    </Link>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi. Magni deserunt sunt labore.
                </div>
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
                      <div className="discount-percent">
                        ({product["product_price"]["discount"]}% discount)
                      </div>
                    </div>
                  )}
                </div>
                <div className="product-quantity">
                  <Incrementer
                    onChange={this.onQuantityChange}
                    id={product["product_id"]}
                    value={0}
                  />
                  <div className="total">
                    <div className="rate">
                      ₹{" "}
                      {product["product_price"]["selling_price"] *
                        this.state.quantity}{" "}
                    </div>
                    <div className="savings">
                      {product["discount-amount"] > 0
                        ? " (You save ₹ " +
                          (product["product_price"]["mrp"] -
                            product["product_price"]["selling_price"]) *
                            this.state.quantity +
                          ")"
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="product-btns">
                  <div className="add-to-cart">
                    <a href="#!" className="btn m2" onClick={this.addToCart}>
                      Add to cart
                    </a>
                  </div>
                  <div className="buy-now-btn">
                    <a href="#!" className="btn m2">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { product } = state;
  return { product: product };
};

const mapDispatchToProps = (dispatch) => ({
  loadProduct: (product) => dispatch(loadProduct(product)),
  addCart: (cart) => dispatch(addCart(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
