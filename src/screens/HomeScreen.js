import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Product from "../components/Product";
import {listProducts } from '../actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";
import { Link } from "react-router-dom";
import ReactSlider from "../components/ReactSlider";

const HomeScreen = ({match,history}) => {

  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])



  return (
    <>
    <Meta />
    {!keyword ? <ProductCarousel /> : <Link className="btn btn-light my-3 " to="/">
        Go Back
      </Link> }
        
    {loading?<Loader /> : error? <Message variant='danger' >{error}</Message>:(
     <>
     {/* <Row>
       {products.map((product) => (
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
           <Product product={product} match={match} history={history} />
         </Col>
       ))}
     </Row> */}
     <h2 className="list-title">Trending <b>Products</b></h2>
     <ReactSlider>
       {products.map((product) => (
           <Product product={product} match={match} history={history} />
       ))}      
       </ReactSlider>
       <h2 className="list-title">Most Viewed <b>Products</b></h2>
       <ReactSlider >
       {products.map((product) => (
           <Product product={product} match={match} history={history} />
       ))}    
       </ReactSlider>
       <h2 className="list-title">Most Liked <b>Products</b></h2>
       <ReactSlider >
       {products.map((product) => (
           <Product product={product} match={match} history={history} />
       ))}    
       </ReactSlider>
   </>
      )}
    </>
  );
};

export default HomeScreen;
