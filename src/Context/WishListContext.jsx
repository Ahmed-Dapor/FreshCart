import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export let WishListContext = createContext();
export default function WishListContextProvider({ children }) {



    let headers = {
        token: localStorage.getItem('userToken')
    }

    const [favourite, setFavourite] = useState([])
    const [loading, setLoading] = useState(false)

    async function addToFav(ProductId) {
        try {
            setLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId: ProductId
            }, {

                headers
            })
            toast.success(data.message, {
                duration: 1000
            })

            setFavourite(data)
            setLoading(false)

        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }
    async function getFav() {
        try {
            setLoading(true)
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                  headers
                })
                
                

            setFavourite(data)
            setLoading(false)
            console.log(data.data);
            
            


        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }

    async function deletFav(ProductId) {
        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${ProductId}`,{
                headers
            })
            setFavourite(data)
            getFav()
            setLoading(false)


            toast.success(data.message, {
                duration: 1000
            })
           

           
           


        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }

    


    useEffect(()=> {
        getFav()
    },[])
























    return <WishListContext.Provider value={{ addToFav, favourite, setFavourite , getFav , loading , deletFav}}>
        {children}
    </WishListContext.Provider>



}