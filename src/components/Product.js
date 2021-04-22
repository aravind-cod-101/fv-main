import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import '../css/product.css'

const Product = ({ product,history } ) => {


  return (
    <>
     <div className="card">
          <div className="card__side card__side--front card__side--front-3">
          <Card>
            <Link to={`/product/${product._id}`}>
      <div className="card__image--2 card__image">
      <img src={product.image} alt={product.name} className='img' />                    &nbsp;
      </div></Link>
      <Card.Body>
          <Card.Title as="div" className="product-title">
          <Link to={`/product/${product._id}`}>
            <b>{product.name}</b>
          </Link>
          </Card.Title>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews}`}
          />
        </Card.Text>
        <Card.Text as="p" className="product-price"><strike>
        {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR'
                                      }).format(product.price+2000)}
          </strike> <span>{new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR'
                                      }).format(product.price)}</span></Card.Text>
      </Card.Body>
    </Card>                  </div>
          <div className="card__side card__side--back card__side--back-3">
            <h4 className="brand-name">{product.brand}</h4>
           <Link className="btn btn-primary link-button-1" to={`/product/${product._id}`}>
            VIEW DETAILS
           </Link>
           { product.countInStock > 0 ? 
           <Button
           onClick={() => {history.push(`/cart/${product._id}?qty=${1}`)}}
           className="btn-primary btn link-button-2"
           type="button"
           disabled={product.countInStock === 0}
         >
           ADD TO CART
         </Button>:
         <Button
         onClick={() => {history.push(`/cart/${product._id}?qty=${1}`)}}
         className="btn-primary btn link-button-2"
         type="button"
         disabled
       >
         OUT OF STOCK
       </Button> }
           
          </div>
      </div>       
    
    </>
  );
};

export default Product;
