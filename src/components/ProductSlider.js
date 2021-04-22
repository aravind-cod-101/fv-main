import React, { useState } from 'react'
import './productSlider.css'
import leftArrow from './images/arrow-left.png'
import rightArrow from './images/arrow-right.png'
import {Image} from 'react-bootstrap'

const ProductSlider = ({images:subImages, image}) => {
 
    let images = []

    images = [image, ...subImages]

    let thumbnails = document.getElementsByClassName('thumbnail')

    let activeImages = document.getElementsByClassName('active')

    for (var i=0; i < thumbnails.length; i++){

        thumbnails[i].addEventListener('mouseover', function(){
            
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
            }
            

            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
    }



    function handleClickLeft(){
        document.getElementById('slider').scrollLeft -= 180
    }

    function handleClickRight(){
        document.getElementById('slider').scrollLeft += 180
    }

    return (
            <div id="content-wrapper">
		

		<div className="column">
			<Image id='featured' style={{height:'450px', width:'450px'}} resizeMode='contain' src={image} />

			<div id="slide-wrapper" >
                <button onClick={handleClickLeft}>
				<img id="slideLeft" className="arrow" src={leftArrow} />
                
                </button>

				<div id="slider">
                    {images.map(image =>(
                        <Image src={image} key={image}  className="thumbnail" fluid />
                    ))}
				</div>
                <button onClick={handleClickRight}>
				<img id="slideRight" className="arrow" src={rightArrow} />
                </button>
			</div>
		</div>
        </div>
    )
}

export default ProductSlider
