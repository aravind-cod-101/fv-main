import React, { Component } from "react";
import { Link } from "react-router-dom";

import EmptyCart from "./emptyCart";
import Incrementer from "../incrementer";

import {
  addCart,
  updateCart,
  removeCart,
  clear,
} from "../../store/cart/actions";
import { isUserLoggedIn, getUserLogin } from "../../util/localStorage";
import { connect } from "react-redux";
import { ThreeSixty } from "@material-ui/icons";

import "./cart.css";

class Cart extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  onQuantityChange = (quantity, id) => {
    const { cart, updateCart: update } = this.props;
    for (let item in cart) {
      if (cart[item]["id"] === id) {
        let cartItem = Object.assign({}, cart[item]);
        let amount = cartItem["amount"];
        cartItem["quantity"] = quantity;
        cartItem["total"] = amount * quantity;
        console.log(cartItem);
        update(cartItem);
      }
    }
  };

  removeCartItem = (id) => {
    const { cart, removeCart: remove } = this.props;
    for (let item in cart) {
      if (cart[item]["id"] === id) {
        let cartItem = Object.assign({}, cart[item]);
        remove(cartItem);
      }
    }
  };

  clearCart = () => {
    const { clear } = this.props;
    clear();
  };

  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        {cart.length <= 0 ? <EmptyCart /> : <this.CartContainer />}
      </div>
    );
  }
  CartContainer = () => {
    const { cart } = this.props;
    let total = 0;
    return (
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            total += item["total"];
            return (
              <tr key={i}>
                <td className="cart-image">
                  <img
                    src={item["image"]}
                    alt={item["name"]}
                    width="100"
                    height="120"
                  />
                </td>
                <td className="details">
                  <span>
                    <b>{item["name"]}</b>
                  </span>
                  <br />
                  <span>
                    <Incrementer
                      onChange={this.onQuantityChange}
                      id={item["id"]}
                      value={item["quantity"]}
                    />
                  </span>
                  <br />
                  <span>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.removeCartItem(item["id"])}
                    >
                      Remove
                    </button>
                  </span>
                </td>
                <td className="price">
                  <span>₹ {item["amount"]}</span>
                  <br />
                  <span>x {item["quantity"]}</span>
                  <br />
                  <hr />
                  <span>₹ {item["total"]}</span>
                </td>
              </tr>
            );
          })}
          <tr className="cart-total">
            <td></td>
            <td>Cart Total</td>
            <td className="price">₹ {total}</td>
          </tr>
          <tr className="cart-btns">
            <td></td>
            <td>
              <span>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={this.clearCart}
                >
                  Clear Cart
                </button>
              </span>
            </td>
            <td>
              <span>
                <Link to="/cart/order">
                  <button className="btn btn-chocolate btn-sm">
                    Place Order
                  </button>
                </Link>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
}

const mapStateToProps = (state) => {
  const { cart } = state;
  return { cart };
};

const mapDispatchToProps = (dispatch) => ({
  addCart: (item) => dispatch(addCart(item)),
  updateCart: (item) => dispatch(updateCart(item)),
  removeCart: (item) => dispatch(removeCart(item)),
  clear: () => dispatch(clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
