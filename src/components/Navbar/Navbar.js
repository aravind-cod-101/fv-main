import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logoutUser } from "../../store/user/actions";
import { connect } from "react-redux";

import { isUserLoggedIn, getUserLogin } from "../../util/localStorage";
import "./Navbar.css";
import logo from "../../assets/fv_logo.png";
import {
  RoomOutlined as Room,
  DehazeOutlined as Dehaze,
  ShoppingCartOutlined as ShoppingCart,
  Person,
} from "@material-ui/icons";

const iconStyle = {
  fontSize: 22,
  color: "#F3F5EB",
  fontWeight: "lighter",
};

const mobIconStyle = {
  fontSize: 40,
  color: "#F3F5EB",
  fontWeight: "lighter",
};

const usermenu = ["Become Vendor", "Logout"];

const vendor = (user) => {
  if (user.type === "user") {
    return (
      <Link to="/vendor/new" className="user-menu-item vendor">
        Become Vendor
      </Link>
    );
  } else {
    return (
      <Link to="/vendor/" className="user-menu-item vendor">
        Manage Products
      </Link>
    );
  }
};

class MainNavbar extends Component {
  state = {};
  handleLogout = () => {
    this.props.logoutUser();
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  userSignInBtn = () => {
    const logged = isUserLoggedIn();
    if (logged) {
      const user = getUserLogin();
      return (
        <div className="logged-user">
          <div className="user-menu">
            <div className="nav-icon">
              <Person style={iconStyle} />
            </div>
            <span className="nav-text"> User </span>
          </div>
          <div className="hoveruser">
            <div className="user-menu-box-container">
              <div className="user-menu-box">
                {vendor(user)}
                <div
                  className="user-menu-item logout"
                  onClick={this.handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <Link to="/signin">
        <div className="nav-icon">
          <Person style={iconStyle} />
        </div>
        <span className="nav-text"> Signin </span>
      </Link>
    );
  };
  render() {
    const { cart } = this.props;
    return (
      <div id="navbar" className="navbar">
        <div className="navbar-pad" />

        <div
          onClick={() => {
            alert("Mobile Menu Clicked");
          }}
          className="nav-item clickable mobile-only"
        >
          <Dehaze style={mobIconStyle} />
        </div>

        <div className="nav-item logo-img-container">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-pad20 desktop-only" />

        <div className="nav-item nav-fill">
          <input
            type="text"
            placeholder="Search Furnitures,"
            className="nav-search"
          />
        </div>

        <div className="navbar-pad" />

        <div className="clickable desktop-only nav-text-container">
          <this.userSignInBtn />
        </div>

        <div className="navbar-pad20 desktop-only" />

        <div className="clickable desktop-only nav-text-container">
          <div className="nav-icon">
            <Room style={iconStyle} />
          </div>
          <span className="nav-text">Track</span>
        </div>

        <div className="navbar-pad20 desktop-only" />

        <div className="clickable nav-text-container">
          <Link to="/cart">
            <div className="nav-icon desktop-only">
              <ShoppingCart style={iconStyle} />
            </div>
            <div className="mobile-only">
              <ShoppingCart style={mobIconStyle} />
            </div>
            <span className="nav-text desktop-only">Cart</span>
            {cart.length > 0 && (
              <span className="badge badge-pill badge-light-chocolate">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        <div className="navbar-pad" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, cart } = state;
  return { user, cart };
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
