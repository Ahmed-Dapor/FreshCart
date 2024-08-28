import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../../Context/CartContext'

export default function Allorders() {




let {ClearCart} = useContext(CartContext);

useEffect(()=>{
ClearCart()

} , [])












  return<>
  
  
  
  </>
}
