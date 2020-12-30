/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "./component.css";

class Incrementer extends Component {
  state = {
    counter: 1,
  };
  constructor(props) {
    super(props);
    let counter = this.props.value || 1;
    this.state = { counter };
  }
  onDecrement = () => {
    const { id } = this.props;
    let counter = this.state.counter;
    if (counter >= 2) {
      counter = counter - 1;
    }
    this.setState({ counter });
    this.props.onChange(counter, id);
  };
  onIncrement = () => {
    const { id } = this.props;
    let counter = this.state.counter;
    counter++;
    this.setState({ counter });
    this.props.onChange(counter, id);
  };
  render() {
    let { counter } = this.state;
    let decerment = "btn btn-sm m-2 decrement ";
    if (counter <= 1) {
      decerment += "disabled";
    }
    return (
      <div className="incrementer">
        <a href="#!" className={decerment} onClick={this.onDecrement}>
          -
        </a>
        <div className="counter">{counter}</div>
        <a
          href="#!"
          className="btn btn-sm m-2 increment"
          onClick={this.onIncrement}
        >
          +
        </a>
      </div>
    );
  }
}

export default Incrementer;
