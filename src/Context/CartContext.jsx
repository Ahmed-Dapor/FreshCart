import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export let CartContext = createContext();

export default function CartContextProvider({ children }) {

    let headers = {
        token: localStorage.getItem('userToken')
    }

    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(false)

    async function updateProductCount(ProductId , count) {
        if(count > 0){
            try {
                setLoading(true)
                let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${ProductId}`, {
                    count
                }, {
                    headers
                })
                
    
                setCart(data)
                setLoading(false)
    
               
    
    
            } catch (err) {
                console.log(err);
                setLoading(false)
    
            }
    
        }else{
            deletProduct(ProductId)
        }
        

    }
    async function ClearCart() {
        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers
            })
           

            setCart(null)
            setLoading(false)

           


        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }
    async function deletProduct(ProductId) {
        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${ProductId}`, {
                headers
            })
           

            setCart(data)
            setLoading(false)

           


        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }
    async function checkout(shippingAddress) {
        try {
            setLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart?.data._id}?url=http://localhost:5173`, {
                shippingAddress
            },
            
            {
                headers
            })
            
            console.log(data);
            window.location.href =  data.session.url
          
            setLoading(false)

           


        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }
    async function addProductToCart(ProductId) {
        try {
            setLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId: ProductId
            }, {
                headers
            })
            toast.success(data.message, {
                duration: 1000
            })

            setCart(data)
            setLoading(false)

           


        } catch (err) {
            console.log(err);
            setLoading(false)

        }


    }

    
    async function getCart() {
        try {
            setLoading(true)
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers
            })


            setCart(data)

            // console.log(data);
            setLoading(false)


        } catch (err) {
            // console.log(err);
            setLoading(false)

        }


    }


    useEffect(()=>{
        getCart()
    } , [])


    return <CartContext.Provider value={{ClearCart , checkout , deletProduct ,  loading ,  updateProductCount , addProductToCart , getCart , cart ,setCart }}>

        {children}

    </CartContext.Provider>
}