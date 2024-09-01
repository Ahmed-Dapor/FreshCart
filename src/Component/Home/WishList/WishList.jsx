import React, { useContext, useEffect } from 'react'
import { WishListContext } from './../../../Context/WishListContext';
import Loading from '../Loading/Loading';

export default function WishList() {

    let { getFav, favourite, loading, setFavourite, deletFav } = useContext(WishListContext)

    useEffect(() => {
        getFav()
    }, [])







    return <>


        {loading ? <div className='lg:flex justify-center items-center'> <Loading /></div> :
        <div>
        {favourite.data ? <div className='lg:w-3/4 mx-auto '>

            {favourite.data?.map((product) => <div key={product.id} className='flex justify-center items-center m-8 bg-slate-300 '>
                <div className='lg:w-1/4 p-3'>
                    <img src={product.imageCover} className='w-full' alt="" />
                </div>
                <div className='lg:w-3/4  ps-5 py-14 '>
                    <h2 className='text-3xl py-5 '>{product.title}</h2>
                    <p className='text-1xl text-slate-700 py-5'>{product.description}</p>
                    <span className='text-2xl py-5'>{product.price} EGP</span>

                </div>
                <button onClick={() => deletFav(product.id)} className='btn w-1/4 rounded bg-red-700 text-center text-white py-2 px-4 '>Remove</button>
            </div>)}

        </div> : <h2 className='text-3xl'>Empty</h2>}


    </div>


        }

        
    </>
}


