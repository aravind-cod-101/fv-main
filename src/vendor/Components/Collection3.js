import React  from 'react';
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import SofaImage1 from '../images/T1.jpg';
import SofaImage2 from '../images/T2.jpg';
import SofaImage3 from '../images/T3.jpg';
import SofaImage4 from '../images/Tea1.jpg';
class Collection3 extends React.Component {
    render() {
        const settings = {
			dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            autoplay:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
                <div className="slider-inner">
                    <Image className="SofaImage" src={SofaImage1}/>
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

export default Collection3;