import React, { useContext } from 'react'
import style from './Navbar.module.css'
import logo from '../../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContect'
import { CartContext } from '../../../Context/CartContext'

export default function Navbar() {

let{userData , setUserData}=useContext(UserContext)
let navigate = useNavigate()
let {cart} =useContext(CartContext);


function logOut(){
localStorage.removeItem('userToken')
setUserData(null)
navigate('/login')

}


  return <>
    <nav className='bg-gray-100 lg:fixed top-0 left-0 right-0  z-50'>

      <div className='container text-center flex flex-col lg:flex-row justify-between items-center capitalize py-4'>
        <div className='flex flex-col lg:flex-row items-center'>
          <img src={logo} width={150} className='me-2' alt="logo" />
          {userData && <ul className='flex flex-col lg:flex-row'>
            <li className='mx-2'><NavLink className=' text-gray-500' to=''>home</NavLink></li>
            <li className='mx-2'><NavLink className=' text-gray-500' to='products'>products</NavLink></li>
            <li className='mx-2'><NavLink className=' text-gray-500' to='categories'>categories</NavLink></li>
            <li className='mx-2'><NavLink className=' text-gray-500' to='brands'>brands</NavLink></li>
            <li className='mx-2'><NavLink className=' text-gray-500' to='wishlist'>wishlist</NavLink></li>
          </ul>}
        </div>
        <div className='flex flex-col lg:flex-row '>
         
          <ul className='flex flex-col lg:flex-row'>
           
            <li className='mx-2 relative'><NavLink className=' text-main text-2xl fa-2xl' to='cart'><i className="fa-solid fa-cart-shopping"></i> </NavLink>  <span className='text-white absolute left-1/2 bottom-1/2 w-6 h-6 bg-red-600 rounded-full'> {cart ? cart.numOfCartItems : 0}</span></li>

            <li className='space-x-2 mx-2'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
            </li>

            {userData?  <li className='mx-2 text-main cursor-pointer' onClick={logOut}>logout</li> :
            <>
            
            <li className='mx-2'><NavLink className='  text-gray-500' to='register'>register</NavLink></li>
            <li className='mx-2'><NavLink className=' text-gray-500' to='login'>login</NavLink></li>
            
            
            </>
            
            
            
            
            }

            
           
          </ul>
        </div>

      </div>


    </nav>




  </>
}
