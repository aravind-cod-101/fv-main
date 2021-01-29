import React, { Component } from 'react';
import './style/main.css';
import './VendorApp.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import AppNavbar from './Components/AppNavbar';
import AppCarousel from './Components/AppCarousel';
import Collection from './Components/Collection';
import Collection1 from './Components/Collection1';
import Collection2 from './Components/Collection2';
import Collection3 from './Components/Collection3';

var fetchProductsUrl = "https://squnic-cors.herokuapp.com/http://13.127.249.221:8000/vendor/fetch/products";
class VendorApp extends Component {
   state = {
    products:[],
    iterator:[0,1,2,3,4,5,6,7,8,9]
  };

  componentDidMount(){
    console.log("helloworld");
    this.updateState();
    
}
updateState = ()=>{
    this.getProductsList();
}
getProductsList = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get(fetchProductsUrl).then((res)=>{
            let products = res.data.products;
            this.setState({products});
            console.log(products);
            resolve();
            reject("Fetching products failed");
        });
    })
}
filterProducts = (category)=>{
  const {products} = this.state;
  return products.filter((product)=>product.product_category.toUpperCase() === category.toUpperCase());
}
  render() {
    let categories = ["Sofa","chair","table","Other Furniture"];
    console.log("hello world");
    return (
      <div className="VendorApp">
        <AppNavbar />
        <AppCarousel />
       <h2 id="footnotes-label">PRODUCTS</h2>
      {categories.map((category,key)=>{
        return <React.Fragment key={key}>
          <b>{category.toUpperCase()}</b>
          <Collection products={this.filterProducts(category)}/>
        </React.Fragment>
      })}
        {/* <b>SOFA</b>
        <Collection products={this.state.products}/>
        <b>CHAIR</b>
         <Collection1 />
          <b>TABLE</b>
          <Collection2 />
        <b>OTHER FURNITURE</b>
           <Collection3 />      */}
      </div>
    );
  }
}

export default VendorApp;
