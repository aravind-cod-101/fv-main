import React, { Component } from "react";
import NavbarLogo from '../assets/images/navbar-logo.png'
import SearchBar from './searchBar';
import NavbarOptions from './navbarOptions';

class NavbarHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row navbar-header">
                <div className="col-sm-1 col-md-2 navbar-logo">
                    <img src={NavbarLogo} alt="Furniture Villages" />
                </div>
                <div className="col-sm-11 col-md-10 navbar-components">
                    <div className="desktop-site">
                        <div className="row middle-right">
                            <SearchBar />
                            <NavbarOptions />
                        </div>
                    </div>
                    <div className="mobile-site">
                        <div className="row middle-right">
                            <SearchBar />
                        </div>
                        <div className="row middle-right">
                            <NavbarOptions />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NavbarHeader;