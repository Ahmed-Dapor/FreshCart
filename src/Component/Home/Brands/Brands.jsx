import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Brands() {

  const [brands, setBrands] = useState([])


  async function getBrands() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    console.log(data.data);
    setBrands(data.data)

  }

  useEffect(() => {
    getBrands()
  }, [])














  return <>
   

    <div className='flex flex-wrap justify-center pt-4'>

      {brands.map((brand , index) => <div key={index} className='lg:w-1/4 p-4'>
        <div className='my-3 p-2 brand '>

          <img src={brand.image} className='w-full h-[200px]' alt="" />
          

        </div>

      </div>)}

    </div>
  </>
}
