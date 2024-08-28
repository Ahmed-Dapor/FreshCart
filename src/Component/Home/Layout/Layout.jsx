import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContect'

export default function Layout() {



  return <>
    <Navbar />

    <div className="container py-14">
    <Outlet></Outlet>
    </div>


    <Footer />


  </>

}
