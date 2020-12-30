import React, { Component } from "react";

class NavbarOptions extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar-options">
                <div className="navbar-login"><i className="fa fa-user-o"></i> Login</div>
                <div className="navbar-track"><i className="fa fa-truck"></i> Track</div>
                <div className="navbar-cart"><i className="fa fa-cart-plus"></i> Cart</div>
            </div>
         );
    }
}
 
export default NavbarOptions;