import React, { Component } from 'react';
import { Carousel,Image,Grid,Row,Col,Button } from 'react-bootstrap';
//import SofaImage1 from '../images/product2_1.jpeg';
// import SofaImage2 from '../images/sofa2.jpeg';
import SofaImage3 from '../images/img_5.jpg';

//Add in Index.html -> remaining bootstrap files
class AppCarousel extends Component {
  render() {
    return (
      <div className="AppCarousel container">
              <Col className="Main-Image-Col" sm={5} >
                <Image className="SofaImage Main-Image" src={SofaImage3} responsive
                 width="1100px"
                  height="700px" />
              </Col>
          
      </div>
    );
  }
}

export default AppCarousel;
