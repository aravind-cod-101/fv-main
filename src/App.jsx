import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./navbar/navbar";

import Home from "./home/home";
import Product from "./components/product/product";
import LoginPage from "./user/login";
import Vendor from "./vendor/vendor";
import VendorApp from './vendor/VendorApp'
import NewVendor from "./vendor/newVendor";
import Cart from "./components/cart/cart";
import Order from "./components/cart/order";
import BannerPage from "./components/BannerPages/bannerPage";

import { connect } from "react-redux";
import { loginUser, logoutUser } from "./store/user/actions";
import { isUserLoggedIn, getUserLogin } from "./util/localStorage";

import Footer from "./components/Footer/Footer";
import ListView from "./components/ListView/ListView";
import Navbar from "./components/Navbar/Navbar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import OpeningBanner from "./components/Banner/OpeningBanner";
import RestrictMobile from "./components/util/RestrictMobile";
// import "./grid.css";
import "./App.css";

const HomeRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div className="fv-app">
        <Navbar />
        <CategoryBar />
        <OpeningBanner />
        <Home {...props} />
        <Footer />
      </div>
    )}
  />
);

const NavRoute = ({ exact, path, component: Component, page }) => (
  <Route
    exact={exact}
    path={path}
    key={page}
    render={(props) => (
      <div>
        <Navbar />
        <CategoryBar />
        <Component {...props} page={page} />
        <Footer />
      </div>
    )}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
      show: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const logged = isUserLoggedIn();
    if (logged) {
      const user = getUserLogin();
      this.props.loginUser(user);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    this.props.logoutUser();
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <NavRoute path="/cart/order/:id" component={Cart} />
          <NavRoute path="/cart/order" component={Order} />
          <NavRoute path="/cart" component={Cart} />
          <NavRoute path="/product/:id" component={Product} />
          <Route path="/vendor/new/membership" component={NewVendor} />
          <Route path="/vendor/new" component={NewVendor} />
          <Route path="/vendor/:id" component={VendorApp} />
          <Route path="/signin" component={LoginPage} />
          <NavRoute
            path="/catalogue"
            component={BannerPage}
            page={"catalogue"}
          />
          <NavRoute
            path="/photography"
            component={BannerPage}
            page={"photography"}
          />
          <NavRoute
            path="/craftmans"
            component={BannerPage}
            page={"craftmans"}
          />
          <HomeRoute path="/" exact />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user: user };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
