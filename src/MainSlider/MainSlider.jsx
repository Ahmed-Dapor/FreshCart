import React from 'react'
import style from './MainSlider.module.css'
import slider1 from '../assets/images/slider-image-1.jpeg'
import slider2 from '../assets/images/slider-image-2.jpeg'
import slider3 from '../assets/images/slider-image-3.jpeg'
import sideImage from '../assets/images/grocery-banner.png'
import sideImage2 from '../assets/images/grocery-banner-2.jpeg'
import Slider from "react-slick";


export default function MainSlider() {



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    }





    return <>

        <div className="flex mt-3">
           <div className="w-3/4">
           <Slider {...settings}>
                <img src={slider1} className='w-full h-[400px]' alt="" />
                <img src={slider2} className='w-full h-[400px]' alt="" />
                <img src={slider3} className='w-full h-[400px]' alt="" />
            </Slider>
           </div>


            <div className="w-1/4">
                <img src={sideImage} className='w-full h-[200px]' alt="" />
                <img src={slider3} className='w-full h-[200px]' alt="" />

            </div>
        </div>





    </>
}
