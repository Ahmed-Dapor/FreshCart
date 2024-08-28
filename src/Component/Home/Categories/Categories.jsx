import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';

export default function Categories() {

  const [categories, setCategories] = useState([])


  async function getCategories() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(data.data);
    setCategories(data.data)


  }

  useEffect(() => {

    getCategories()

  }, [])







  return <>

    



    <div className='flex flex-wrap justify-center pt-4 '>
      {categories.map((category) => <div className='p-2 w-1/4 '>

        <div className=' my-3 p-4 cat'>
          <img src={category.image} className='w-full h-[200px]' alt="" />
          <h2 className='text-center font-semibold'>{category.name}</h2>
        </div>

      </div>)}

    </div>

  </>
}
