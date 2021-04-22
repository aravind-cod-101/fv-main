import React from 'react'
import './Nav.css'

const NavbarComponent = () => {
    return (
        <div>
    <nav className="nav">
    <div className="wrapper container">
      <div className="logo"><a href="">BLOGSHOP</a></div>
      <ul className="nav-list">
        <div className="top">
          <label for="" className="btn close-btn"><i className="fas fa-times"></i></label>
        </div>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li>
          <a href="" className="desktop-item">Shop <span><i className="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Shop <span><i className="fas fa-chevron-down"></i></span></label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src="./images/woman.jpg" alt="" />
              </div>
              <div className="row">
                <header>Shop Layout</header>
                <ul className="mega-links">
                  <li><a href="#">Shop With Background</a></li>
                  <li><a href="#">Shop Mini Categories</a></li>
                  <li><a href="#">Shop Only Categories</a></li>
                  <li><a href="#">Shop Icon Categories</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Filter Layout</header>
                <ul className="mega-links">
                  <li><a href="#">Sidebar</a></li>
                  <li><a href="#">Filter Default</a></li>
                  <li><a href="#">Filter Drawer</a></li>
                  <li><a href="#">Filter Dropdown</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Product Layout</header>
                <ul className="mega-links">
                  <li><a href="#">Layout Zoom</a></li>
                  <li><a href="#">Layout Sticky</a></li>
                  <li><a href="#">Layout Sticky 2</a></li>
                  <li><a href="#">Layout Scroll</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="" className="desktop-item">Vendors <span><i className="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showdrop1" />
          <label for="showdrop1" className="mobile-item">Vendors <span><i className="fas fa-chevron-down"></i></span></label>
          <ul className="drop-menu1">
            <li><a href="">Vendor Store listings</a></li>
            <li><a href="">Store Details</a></li>
          </ul>
        </li>

        <li>
          <a href="" className="desktop-item">Page <span><i className="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showdrop2" />
          <label for="showdrop2" className="mobile-item">Page <span><i className="fas fa-chevron-down"></i></span></label>
          <ul className="drop-menu2">
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Faq</a></li>
            <li><a href="">Page 404</a></li>
          </ul>
        </li>
        {/* <!-- icons --> */}
        <li className="icons">
          <span>
            <img src="./images/shoppingBag.svg" alt="" />
            <small className="count d-flex">0</small>
          </span>
          <span><img src="./images/search.svg" alt="" /></span>
        </li>
      </ul>
      <label for="" className="btn open-btn"><i className="fas fa-bars"></i></label>
    </div>
  </nav> 
        </div>
    )
}

export default NavbarComponent
