import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../Context/CartContext';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Products() {


    const [allproducts, setAllProducts] = useState([])
    let { addProductToCart } = useContext(CartContext)

    async function getProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        console.log(data.data);
        setAllProducts(data.data)

    }

    useEffect(() => {

        getProducts()
    }, [])







    return <>


        {allproducts.length ? <div className="flex flex-wrap justify-center pt-4">
            {allproducts.map((product, index) => <div key={index} className='w-1/5 p-1'>


                <div className=" product p-4  ">

                    <div>
                        <div>
                        <img src={product.imageCover} className='w-full' alt={product.title} />
                            <h2 className='text-main text-sm'>{product.category.name}</h2>
                            <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                            <div className='flex justify-between my-2'>
                                <h3>{product.price} EGP</h3>
                                <h3><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</h3>

                            </div>
                        </div>
                        <button onClick={() => addProductToCart(product.id)} className='btn w-full bg-main rounded p-1 text-white'>Add To Cart</button>
                    </div>

                </div>

            </div>)}
        </div> : <div className='flex justify-center items-center'>


            <Loading />

        </div>

        }







    </>
}

