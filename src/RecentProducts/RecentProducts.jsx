import React, { useContext } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'




export default function RecentProducts({ product }) {


    let { addProductToCart } = useContext(CartContext)
   







    return <>
        <div className=" lg:w-1/6 product p-4  ">

            <div>
                <Link to={`productdetails/${product.id}`}>
                    <img src={product.imageCover} className='w-full' alt={product.title} />
                    <h2 className='text-main text-sm'>{product.category.name}</h2>
                    <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                    <div className='flex justify-between my-2'>
                        <h3>{product.price} EGP</h3>
                        <h3><i className='fas fa-star rating-color '></i> {product.ratingsAverage}</h3>

                    </div>
                </Link>
                <button onClick={() => addProductToCart(product.id)} className='btn w-full bg-main rounded p-1 text-white'>Add To Cart</button>
            </div>

        </div>

    </>
}
