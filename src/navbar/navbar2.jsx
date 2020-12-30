import React, { Component } from "react";

class NavBar2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row navbar-2">
                <div className="menu-wrapper col-xs-12">
                    <ul className='navbar-2-ul'>
                        <li className='navbar-2-li'><div className="navbar-2-item category">Category</div>
                            
                        </li>
                        <li className='navbar-2-li'><div className="navbar-2-item">Guarante on Supplier</div></li>
                        <li className='navbar-2-li'><div className="navbar-2-item">Hot Selling Products</div></li>
                        <li className='navbar-2-li'><div className="navbar-2-item">Help</div></li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default NavBar2;