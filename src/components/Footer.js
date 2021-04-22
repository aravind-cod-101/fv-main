import React from 'react'
import '../css/footer.css'

const Footer = () => {

    const year = new Date().getFullYear()
    return (
            
  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Contact us</a></li>
  	 				<li><a href="#">Careers</a></li>
  	 				<li><a href="#">Work With Us</a></li>
  	 				<li><a href="#">Terms and Condition</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Work With Us</h4>
  	 			<ul>
  	 				<li><a href="#">Earn With Us</a></li>
  	 				<li><a href="#">Sell Through Venus Interior</a></li>
  	 				<li><a href="#">Free Photography of your Product</a></li>
  	 				<li><a href="#">Free Catalogue Making</a></li>
  	 				<li><a href="#">Help</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Others</h4>
  	 			<ul>
  	 				<li><a href="#">Connect With Us</a></li>
  	 				<li><a href="#">Supporting Indegineous Crafts Men</a></li>
  	 				<li><a href="#">Promoting Made in India</a></li>
  	 				<li><a href="#">Craft Man Needing Support</a></li>
  	 				<li><a href="#">Champions of Make In India</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
                  <h6 className='text-center copyright'>&copy;Copyright@{year}. All Rights Reserved</h6>
        </footer>
    )
}

export default Footer
