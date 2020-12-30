import React, { Component } from "react";

class SearchBar extends Component {
    state = {  }
    render() { 
        return (<div className="search-bar">
            <form id="search-bar-form">
                <input
                    id="search-bar-input"
                    type="text"
                    maxLength="200"
                />
                <span className="search-bar-space-right"></span>
                <button type="button" className="btn bg-transparent">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div> );
    }
}
 
export default SearchBar;