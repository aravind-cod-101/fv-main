import React, { Component } from 'react';

import {categoryLists} from './lists';

class CategoryList extends Component {
    state = {  }
    render() { 

        function GetList() {
            let list = categoryLists.map(function(item){
                return (<li key={item.name}><a href={item.url}>{item.name}</a></li>)
            });
            return list;
        }

        return (<div className="container">
            <div className="category-list">
                <ul>
                    <GetList/>
                </ul>
            </div>
        </div> );
    }
}
 
export default CategoryList;