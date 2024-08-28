import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CategorySlider() {

    

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false
      }


      const [categories, setCategories] = useState([])

  async function getRecentcategories() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(data.data);
    setCategories(data.data)

  }

  useEffect(() => {

    getRecentcategories()
  }, [])




  return<>
  
  
  
  
  <Slider {...settings}>
       {categories?.map((category , index)=>
       <div key={index} className='my-3 text-center'>
         <img  src={category.image} className='w-full h-[200px]'/>
         <h3>{category.name}</h3>
       </div> )}
    </Slider>
  
  
  
  
  
  
  </>
}
