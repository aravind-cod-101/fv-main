import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const box_one_links = [
  "About Us",
  "Contact Us",
  "Careers",
  "Connect With Us",
  "Terms and Conditions",
];

const box_two_links = [
  "Earn With Us",
  "Sell Through Venus Interior",
  "Free photograhy of your product",
  "Free catalogue making",
  "Help",
];

const box_three_links = [
  "Connect With Us",
  "Supporting Indigenious Crafts Man",
  "Promoting Made In India",
  "Carft Man Needing Support ",
  "Champians of Make in Inda ",
];

const box_one = box_one_links.map((link, link_key) => {
  return (
    <li key={link_key} className="footer-li">
      {" "}
      {link}{" "}
    </li>
  );
});

const box_two = box_two_links.map((link, link_key) => {
  return (
    <li key={link_key} className="footer-li">
      {link_key === 2 && <Link to="/photography">{link}</Link>}
      {link_key === 3 && <Link to="/catalogue">{link}</Link>}
      {link_key !== 2 && link_key !== 3 && link}
    </li>
  );
});

const box_three = box_three_links.map((link, link_key) => {
  return (
    <li key={link_key} className="footer-li">
      {link_key === 1 && <Link to="/craftmans">{link}</Link>}
      {link_key !== 1 && link}
    </li>
  );
});

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-box-container">
        <div className="footer-box">
          <ul className="footer-ul"> {box_one} </ul>{" "}
        </div>{" "}
        <div className="footer-box">
          <ul className="footer-ul"> {box_two} </ul>{" "}
        </div>{" "}
        <div className="footer-box">
          <ul className="footer-ul"> {box_three} </ul>{" "}
        </div>{" "}
      </div>{" "}
      <div className="footer-hr" />
      <div className="footer-copyright">
        <span>
          {" "}
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Copyright 2020
          . All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
