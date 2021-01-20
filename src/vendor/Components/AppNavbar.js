import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import logo1 from '../images/logo1.png';
//import logo from './logo1.png'; // with import

//Add in Index.html -> remaining bootstrap files
class AppNavbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar className="App-Navbar" collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand className="Nav-Brand">
              <div className="shoe-container">
            <img src={logo1} alt=""
              width="100px"
                  height="-50px"
                 />
        </div>

            </Navbar.Brand>
            {/* <Navbar.Toggle className="Nav-Toggle"/> */}
          </Navbar.Header>
          {/* <Navbar.Collapse className="Navbar-Collapse">
            <Nav className="Navbar-Nav">
              <NavItem className="App-Nav-Item" eventKey={1} href="#">
                <span className="Nav-Item-Span">Category</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Active">Hot Selling Products</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Guarante on Supplier</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Hot Selling Products</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Help</span>
              </NavItem>
              
            </Nav>
          </Navbar.Collapse> */}
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
