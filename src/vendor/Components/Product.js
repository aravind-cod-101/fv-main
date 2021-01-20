import React, { Component } from 'react';
import { Row,Col,Image,Button } from 'react-bootstrap';
import ProductImage1 from '../images/product1.jpeg';
import ProductImage2 from '../images/product2.jpeg';
import ProductImage3 from '../images/product3.jpeg';
import ProductImage4 from '../images/product4.jpeg';
import ProductImage5 from '../images/product5.jpeg';
import ProductImage6 from '../images/product6.jpeg';
import ProductImage7 from '../images/product7.jpeg';
import ProductImage8 from '../images/product8.jpeg';
import ProductImage9 from '../images/product9.jpeg';
import ProductImage10 from '../images/product10.jpeg';
// import { Button,Checkbox,FormGroup } from 'react-bootstrap';

class Product extends Component {
    render() {
        let ProductImage = ProductImage10;
        let num = this.props.image;
        if(num === "1") ProductImage = ProductImage1;
        else if(num === "2") ProductImage = ProductImage2;
        else if(num === "3") ProductImage = ProductImage3;
        else if(num === "4") ProductImage = ProductImage4;
        else if(num === "5") ProductImage = ProductImage5;
        else if(num === "6") ProductImage = ProductImage6;
        else if(num === "7") ProductImage = ProductImage7;
        else if(num === "8") ProductImage = ProductImage8;
        else if(num === "9") ProductImage = ProductImage9;
        else ProductImage = ProductImage10;
        let ProductClassName = "Product animated fadeIn";
        return (
            <div className={ProductClassName}>
            <Row className="show-grid item-row">
                <Col className="product-left-col" md={6}>
                    <div>
                        <Image className="ProductImage"
                        src={ProductImage} />
                    </div>
                </Col>
                <Col className="product-right-col" md={6}>
                    <Row>
                        <Col md={6} sm={12}>
                            <h5 className="heading-content patino">{this.props.name}</h5>
                        </Col>
                        <Col md={6} sm={12}>
                            <h5 className="heading-content">{this.props.price}</h5>
                        </Col>
                    </Row>
                    <h5 className="heading-content">{this.props.subname}</h5>
                    <h6 className="text-muted heading-content h6-class">Within 6 days</h6>

                    <p className="text-muted heading-content">
                        commodo ullamcorper a lacus vestibulum sed arcu non odio euismod
                    </p>
                    <div className="heading-content buy-class">
                        <Button className="buy-now">Buy Now</Button>
                    </div>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Product;
