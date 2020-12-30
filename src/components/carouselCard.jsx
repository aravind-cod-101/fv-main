/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import "./cardComponent.css";

class CarouselCard extends Component {
  state = {
    isBtnHovered: false,
    onPreviousClicked: false,
    onNextClicked: false,
    arr: [],
  };
  constructor(props) {
    super(props);
    let count = 0;
    let arr = this.props.imgArr.map((i) => {
      count = count + 1;
      return count;
    });
    this.state = {
      isBtnHovered: false,
      onPreviousClicked: false,
      onNextClicked: false,
      arr,
    };
  }

  onWheel = (e) => {
    e.preventDefault();
    var card = e.currentTarget["children"][1];
    var cardScrollPosition = card.scrollLeft;
    card.scrollTo({
      top: 0,
      left: cardScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  onPrevious = (e) => {
    this.setState({ onPreviousClicked: true });
    setTimeout(() => {
      this.setState({ onPreviousClicked: false });
    }, 500);
    let card = e.target["offsetParent"];
    let cardValue = e.target["offsetParent"]["attributes"][0]["nodeValue"];
    if (cardValue !== "card-category") {
      card = card["offsetParent"];
    }
    let productRow = card["children"][1];
    this.scrollRightFunc(productRow, 120);
    return false;
  };

  scrollRightFunc = async (row, distance) => {
    for (let i = 0; i < distance; i = i + 5) {
      row.scrollTo({
        left: row.scrollLeft - 5,
        behaviour: "smooth",
      });
      await this.scrollDelay(10);
    }
  };

  onNext = (e) => {
    this.setState({ onNextClicked: true });
    setTimeout(() => {
      this.setState({ onNextClicked: false });
    }, 500);
    let card = e.target["offsetParent"];
    let cardValue = e.target["offsetParent"]["attributes"][0]["nodeValue"];
    if (cardValue !== "card-category") {
      card = card["offsetParent"];
    }
    let productRow = card["children"][1];
    this.scrollLeftFunc(productRow, 120);
    return false;
  };

  scrollLeftFunc = async (row, distance) => {
    for (let i = 0; i < distance; i = i + 5) {
      row.scrollTo({
        left: row.scrollLeft + 5,
        behaviour: "smooth",
      });
      await this.scrollDelay(10);
    }
  };

  scrollDelay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  onMouseOver = () => {
    this.setState({ isBtnHovered: true });
  };
  onMouseOut = () => {
    this.setState({ isBtnHovered: false });
  };

  getNextClassName = () => {
    let className = "prod-btn prod-next";
    if (this.state.isBtnHovered) className = className + " hovered";
    if (this.state.onNextClicked) className = className + " clicked";
    return className;
  };
  getPreviousClassName = () => {
    let className = "prod-btn prod-previous";
    if (this.state.isBtnHovered) className = className + " hovered";
    if (this.state.onPreviousClicked) className = className + " clicked";
    return className;
  };

  render() {
    const { url, name, imgArr } = this.props;
    const { arr } = this.state;
    let count = 0;
    return (
      <div className="card">
        <div className="card-category">
          <div className="card-category-name">{name}</div>
          <div className="prod-pic-row">
            <ul className="prod-shelf">
              {imgArr.map((img, i) => {
                let className = "prod-pic-exclusive";
                count = count + 1;
                let u = url + "?sig=" + i;
                return (
                  <li key={count}>
                    <img src={u} alt={arr[count - 1]} className={className} />
                  </li>
                );
              })}
            </ul>
          </div>
          <a
            // eslint-disable-next-line no-script-url
            href="#!"
            className={this.getPreviousClassName()}
            style={{ display: "inline" }}
            onClick={(e) => this.onPrevious(e)}
            onTouchStart={(e) => this.onPrevious(e)}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
          >
            <span className="fa fa-angle-left"></span>
          </a>
          <a
            // eslint-disable-next-line no-script-url
            href="#!"
            className={this.getNextClassName()}
            style={{ display: "inline" }}
            onClick={(e) => this.onNext(e)}
            onTouchStart={(e) => this.onNext(e)}
            onMouseOver={() => this.onMouseOver()}
            onMouseOut={() => this.onMouseOut()}
          >
            <span className="fa fa-angle-right"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default CarouselCard;
