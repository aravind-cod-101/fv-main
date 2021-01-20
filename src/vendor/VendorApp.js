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

var fetchProductsUrl = "https://cors-anywhere.herokuapp.com/http://13.127.249.221:8000/vendor/fetch/products";
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
  render() {
    console.log("hello world");
    return (
      <div className="VendorApp">
        <AppNavbar />
        <AppCarousel />
        <Grid className="left-right-sidebar">
          <Row className="show-grid">
            <Col className="left-side-bar" md={3} sm={3}>
            </Col>
            <Col className="left-side-bar" md={9} sm={9}>
            </Col>
          </Row>
        </Grid>
       <h2 id="footnotes-label">Products</h2>
        <b>SOFA</b>
        <Collection products={this.state.products}/>
      <b>CHAIR</b>
         <Collection1 />
          <b>TABLE</b>
          <Collection2 />
        <b>Other Furniture</b>
           <Collection3 />
             <div className="vendor-products">
        {this.state.products.map((product,i)=>{
          console.log(i);
            return <div className="product-container" key={i}>
            <div className="product-image">
                <img src={product.product_thumbnail} alt={product.product_title}
                  />
            </div>
            <div className="product-details">
                <div className="product-name">{product["product_title"]}</div>
                
                <div className="product-rate">
                    <div className="final-rate">
                        ₹ {product["product_price"]["selling_price"]}
                        {"   "}
                    </div>
                    {product["product_price"]["discount"] > 0 && (
                        <div className="offer-rate">
                        <div className="original-rate">
                            ₹ {product["product_price"]["mrp"]}
                        </div>
                        </div>
                    )}
                </div>
                <br/>
                <Link to={"/product/"+product.product_id}>
                <span>
                    <button
                    className="btn btn-secondary btn-block"
                    >
                    View
                    </button>
                </span>
                </Link>
            </div>
        </div>
          })}
        </div>
      </div>
    );
  }
}

export default VendorApp;
