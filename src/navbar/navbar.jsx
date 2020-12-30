import React, { Component } from "react";
import "./navbar.css";
import NavbarHeader from "./navbarHeader";
import NavBar2 from "./navbar2";
import NavBar3 from "./navbar3";
import CategoryList from "./categoryList";

class NavBar extends Component {
  componentDidMount = () => {
    let main = document.getElementsByTagName("main")[0];
    let category = document.getElementsByClassName("category")[0];
    let categoryList = document.getElementsByClassName("category-list")[0];

    function offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    category.addEventListener("mouseover", function (event) {
      let categoryOffset = offset(category);
      let listTop = parseFloat(categoryOffset.top) + 40;
      categoryList.setAttribute("style", "display:block;top:" + listTop + "px");
    });
    category.addEventListener("mouseout", function (event) {
      categoryList.setAttribute("style", "display:none");
    });

    categoryList.addEventListener("mouseover", function (event) {
      let categoryOffset = offset(category);
      let listTop = parseFloat(categoryOffset.top) + 40;
      categoryList.setAttribute("style", "display:block;top:" + listTop + "px");
    });
    categoryList.addEventListener("mouseout", function (event) {
      categoryList.setAttribute("style", "display:none");
    });

    category.addEventListener(
      "touchstart",
      function (event) {
        if (categoryList.style.display === "block") {
          categoryList.setAttribute("style", "display:none");
        } else {
          let categoryOffset = offset(category);
          let listTop = parseFloat(categoryOffset.top) + 40;
          let listLeft = parseFloat(categoryOffset.left) + 50;
          categoryList.setAttribute(
            "style",
            "display:block;top:" + listTop + "px;left:" + listLeft + "px;"
          );
        }
      },
      true
    );
    main.addEventListener(
      "touchstart",
      function (event) {
        categoryList.setAttribute("style", "display:none;");
      },
      true
    );
  };

  state = {};
  render() {
    return (
      <header>
        <div className="fixed-header">
          <div className="container">
            <NavbarHeader />
            <NavBar2 />
            <NavBar3 />
          </div>
        </div>
        <CategoryList />
      </header>
    );
  }
}

export default NavBar;
