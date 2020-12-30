import React, { Component } from "react";
import { loginUser } from "../store/user/actions";
import { connect } from "react-redux";

import { isUserLoggedIn } from "../util/localStorage";
import "./user.css";

class LoginPage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  componentDidMount() {
    // const { logged } = this.props.user;
    // let logged = localStorage.getItem('logged');
    if (isUserLoggedIn()) {
      this.props.history.push("/");
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // To be changed in future - User Object
    let user = { username: this.state.username, type: "user" };
    this.props.loginUser(user);
  };
  componentDidUpdate() {
    const { logged } = this.props.user;
    if (logged) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="login-page">
        <div className="sidenav">
          <div className="login-main-text">
            <h2>
              Furniture Villages
              <br /> Login Page
            </h2>
            <p>Any quote or text to be displayed</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-chocolate">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return { user: user };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
