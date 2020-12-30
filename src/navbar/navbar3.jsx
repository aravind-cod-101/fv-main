import React, { Component } from 'react';
import {navbarItems} from './lists';

class NavBar3 extends Component {
    state = {  }
    render() { 
        function GetItems(){
            let list = navbarItems.map(function (item) {
                return (<li className="navbar-3-li" key={item.name}><a href={item.url}>{item.name}</a></li>)
            });
            return list;
        }
        return ( <div className="navbar-3">
            <div className="row">
                <div className="col-sm-2 location"><i className="fa fa-map-marker"></i> Location</div>
                <div className="col-sm-10 items"><ul className="navbar-3-ul"><GetItems/></ul></div>
            </div>
        </div> );
    }
}
 
export default NavBar3;