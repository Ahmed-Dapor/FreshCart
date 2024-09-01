import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Home/Layout/Layout.jsx'
import Home from './Component/Home/Home.jsx'
import Cart from './Component/Home/Cart/Cart.jsx'
import Categories from './Component/Home/Categories/Categories.jsx'
import Login from './Component/Home/Login/Login.jsx'
import Register from './Component/Home/Register/Register.jsx'
import Products from './Component/Home/Products/Products.jsx'
import Notfound from './Component/Home/Notfound/Notfound.jsx'
import Brands from './Component/Home/Brands/Brands.jsx'
import UserContextProvider from './Context/UserContect.jsx'
import WishList from './Component/Home/WishList/WishList.jsx'
import ProtectedRoute from './Component/Home/Navbar/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Component/Home/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Component/Home/Checkout/Checkout.jsx'
import Allorders from './Component/Home/Allorders/Allorders.jsx'
import WishListContextProvider from './Context/WishListContext.jsx'







let routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: 'checkout', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute><Allorders /></ProtectedRoute> },
      { path: 'wishlist', element: <ProtectedRoute><WishList /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> }
    ]
  }
])







function App() {


  return <WishListContextProvider>
    <CartContextProvider>
      <UserContextProvider>
        <RouterProvider router={routers}></RouterProvider>

        <Toaster />
      </UserContextProvider>
    </CartContextProvider>

  </WishListContextProvider>







}

export default App
