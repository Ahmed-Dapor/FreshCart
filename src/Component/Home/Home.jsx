import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../../RecentProducts/RecentProducts'


import CategorySlider from '../../CategorySlider/CategorySlider'
import MainSlider from '../../MainSlider/MainSlider'
import Loading from './Loading/Loading'






export default function Home() {

  const [products, setProducts] = useState([])

  async function getRecentProducts() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log(data.data);
    setProducts(data.data)

  }

  useEffect(() => {

    getRecentProducts()
  }, [])




  return <>

    <MainSlider />


    <CategorySlider />

    {products.length ?
      <div className="flex flex-wrap justify-center pb-5">
        {products.map((product, index) => <RecentProducts key={index} product={product} />)}
      </div> : <div className='flex justify-center items-center'>


        <Loading />

      </div>
    }



  </>
}

