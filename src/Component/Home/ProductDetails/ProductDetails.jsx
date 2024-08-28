import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import { CartContext } from '../../../Context/CartContext';
import Loading from '../Loading/Loading';




export default function productDetails() {


  let { id } = useParams()


  const [productDetails, setProductDetails] = useState({});
  let{addProductToCart}=useContext(CartContext)



  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    setProductDetails(data.data)

  }

  useEffect(() => {

    getProductDetails(id)

  }, [])

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


  {productDetails ?  <div className="flex items-center p-10">

<div className='w-1/4 p-4 me-4'>
<Slider {...settings}>
    {productDetails.images?.map((image, index) => <img key={index} src={image} className='w-full' />)}
  </Slider>
</div>
<div className='w-3/4'>
  <div>
    <h2 className='font-medium text-3xl'>{productDetails.title}</h2>
    <p className='text-gray-500 my-6'>{productDetails.description}</p>
    <h3>{productDetails.category?.name}</h3>
    <div className='flex justify-between my-2'>
      <h3>{productDetails.price} EGP</h3>
      <h3><i className='fas fa-star rating-color'></i> {productDetails.ratingsAverage}</h3>

    </div>
    <button onClick={()=> addProductToCart(productDetails.id)} className='btn w-full bg-main rounded p-1 text-white'>+ Add To Cart</button>

  </div>
</div>


</div> : <div className='flex justify-center items-center'>


<Loading />

</div> }

   
    


  </>
}
