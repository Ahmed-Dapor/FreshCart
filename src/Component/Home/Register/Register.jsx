import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContect'

export default function Register() {

 
 const [apiError, setApiError] = useState(null)
 const [loading, setLoading] = useState(false)
 let {setUserData}=useContext(UserContext)
 
 let navigate = useNavigate()



  async function Register(values) {

   try{
    setLoading(true)
    let{data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , values)
    localStorage.setItem('userToken' , data.token)
    navigate('/')
    setUserData(data.token)
    
    
   }catch(err){
    
    setApiError(err.response.data.message)
    setLoading(false)

    
   }
   

  }

 

  let validationSchema = yup.object().shape({
    name: yup.string().min(3, 'At least 3 letters').max(10, 'Max 10').required('Name is rquired'),
    email: yup.string().email('Email is invaled').required('Email is required'),
    password: yup.string().matches(/^[A-Z]\w{5,10}$/, 'Password invaled Ex(Ahmed123)').required('Password is required'),
    rePassword: yup.string().oneOf([yup.ref('password')], 'Repassword do not match').required('Repassword is required'),
    phone: yup.string().matches(/^(002)?01[0125][0-9]{8}$/, 'Enter egyptian number').required('Phone number is')
  })










  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    }, validationSchema: validationSchema,
       onSubmit:Register
  })



  return <>

    <div className='pt-8 w-1/2 mx-auto'>
      <h1 className='py-5 text-3xl font-semibold'>Register Now :</h1>

      <form onSubmit={formik.handleSubmit}>


     {apiError &&  <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800" role="alert">
          {apiError}
        </div>}

        <div className="relative z-0 w-full mb-5 group py-4">
          <input type="text" name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-400 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Name</label>
        </div>
        {formik.errors.name && formik.touched.name && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800" role="alert">
          {formik.errors.name}
        </div>
        }


        <div className="relative z-0 w-full mb-5 group py-4">
          <input type="email" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-400 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        {formik.errors.email && formik.touched.email && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800" role="alert">
          {formik.errors.email}
        </div>
        }






        <div className="relative z-0 w-full mb-5 group py-4">
          <input type="password" name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-400 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        {formik.errors.password && formik.touched.password && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800" role="alert">
          {formik.errors.password}
        </div>
        }




        <div className="relative z-0 w-full mb-5 group py-4">
          <input type="password" name="rePassword" value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-400 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repassword</label>
        </div>
        {formik.errors.rePassword && formik.touched.rePassword && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800" role="alert">
          {formik.errors.rePassword}
        </div>
        }





        <div className="relative z-0 w-full mb-5 group py-4">
          <input type="tel" name="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-400 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
        </div>
        {formik.errors.phone && formik.touched.phone && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-200 dark:text-red-800" role="alert">
          {formik.errors.phone}
        </div>
        }

        {loading ? <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
          <i className='fas fa-spinner fa-spin-pulse'></i>
        </button> :        <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>
      }

        
      </form>

    </div>

  </>
}
