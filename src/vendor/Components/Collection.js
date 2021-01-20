import React  from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import SofaImage1 from '../images/S1.jpg';
import SofaImage2 from '../images/S2.jpg';
import SofaImage3 from '../images/S3.jpg';
import SofaImage4 from '../images/C5.jpg';
import SofaImage5 from '../images/C6.jpg';
import SofaImage6 from '../images/C8.jpg';
import SofaImage7 from '../images/C9.jpg';
import SofaImage8 from '../images/C10.jpg';
import SofaImage9 from '../images/S4.jpg';
class Collection extends React.Component {
    render() {
        const settings = {
			dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            autoplay:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
	return (
		<div className="container slick-class">
            <Slider className="slider-class" {...settings}>
            {this.props.products.map((product,i)=>{
          console.log(i);
            return <div className="product-container" key={i}>
                <Link to={"/product/"+product.product_id}>
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
                
            </div>
                </Link>
        </div>
          })}
                {/* <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage1} />
                </div>
                <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage2} />
                </div>
                <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage3} />
                </div>
				<div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage4} />
                </div>
                <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage5} />
                </div>
                <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage6} />
                </div>
                  <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage7} />
                </div>
                  <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage8} />
                </div>
                 <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage9} />
                </div> */}
            </Slider>
      </div>
      );
    }
}

// class Collection extends Component {
//   render() {
//     return (
//         <Grid className="container-fluid">
//             <Row className="show-grid" className="image-row">
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage1} responsive />
//                 </Col>
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage2} responsive />
//                 </Col>
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage3} responsive />
//                 </Col>
//                 <Col md={3} className="image-col">
//                     <Image className="SofaImage" src={SofaImage1} responsive />
//                 </Col>
//             </Row>
//         </Grid>
//     );
//   }
// }

export default Collection;