import React, { Component } from 'react';
import { Grid,Row,Col,Button } from 'react-bootstrap';
import Product from './Product';

//Add in Index.html -> remaining bootstrap files
class AppContent extends Component {
  constructor(props){
    super(props);
    this.state = { filter:'all' };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e){
    filteredProducts = [];
    filteredProducts1 = [];
    filteredProducts2 = [];
    this.setState({filter : e.target.value});
  }

  render() {
    const filterText = this.state.filter;

    if(filterText === "all"){
      PRODUCTS.forEach((product,index) => {
        filteredProducts.push(
          <Product key={index}
            category={product.category}
            price={product.price}
            name={product.name}
            subname={product.subname}
            image={product.image}/>
          );
      });
    }else{
      filteredProducts = [];
      PRODUCTS.forEach((product,index) => {
        if(product.category.indexOf(filterText)===-1){
          return;
        }
        filteredProducts.push(
          <Product key={index}
            category={product.category}
            price={product.price}
            name={product.name}
            subname={product.subname}
            image={product.image}/>
          );
      });
    }

    // console.log(filteredProducts);

    for (var i=0;i<filteredProducts.length;i++){
      if ((i+2)%2===0) {
        filteredProducts2.push(filteredProducts[i]);
      }
      else {
        filteredProducts1.push(filteredProducts[i]);
      }
    }

    if(filteredProducts1.length < filteredProducts2.length){
      filteredProductsTemp = filteredProducts2;
      filteredProducts2 = filteredProducts1;
      filteredProducts1 = filteredProductsTemp;
    }

    return (
      <div className="AppContent">
        <Grid>
          <div className="content-nav-div">
            <ul className="app-content-nav">
              <li><Button className={"filterButton "+ (this.state.filter === "all" ? "active" : "")}
               onClick={this.handleFilterChange} value="all">ALL</Button></li>
              <li><Button className={"filterButton "+ (this.state.filter === "new" ? "active" : "")}
               onClick={this.handleFilterChange} value="new">NEW</Button></li>
              <li><Button className={"filterButton "+ (this.state.filter === "offers" ? "active" : "")}
               onClick={this.handleFilterChange} value="offers">OFFERS</Button></li>
              <li><Button className={"filterButton "+ (this.state.filter === "in10days" ? "active" : "")}
               onClick={this.handleFilterChange} value="in10days">DELIVERY IN 10 DAYS</Button></li>
            </ul>
          </div>
          <Row className="show-grid product-row">
            <Col md={6} sm={6} className="product-col">
              {filteredProducts1}
            </Col>
            <Col md={6} sm={6} className="product-col product-col-right">
              {filteredProducts2}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <Button className="showMoreButton">
                SHOW MORE PRODUCTS
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

let filteredProducts = [];
let filteredProducts1 = [];
let filteredProducts2 = [];
let filteredProductsTemp = [];
const PRODUCTS = [{
  category: 'new',
  price: "386\u20AC",
  name: 'Patino',
  subname: 'armchair,blue',
  image: '1'
},
{
  category: 'offers',
  price: '350\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '2'
},
{
  category: 'new',
  price: '150\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '3'
},
{
  category: 'offers',
  price: '250\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '4'
},
{
  category: 'in10days',
  price: '200\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '5'
},
{
  category: 'in10days',
  price: '230\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '6'
},
{
  category: 'offers',
  price: '355\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '7'
},
{
  category: 'new',
  price: '170\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '8'
},
{
  category: 'in10days',
  price: '190\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '9'
},
{
  category: 'new',
  price: '230\u20AC',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '10'
},
];

export default AppContent;
