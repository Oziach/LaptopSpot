import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <Link to={'/'}>
            <p className='text-4xl font-bold logoFont'> LaptopSpot <span className='text-4xl font-bold'>.</span></p>
            <p className='font-bold text-2xl logoFont text-slate-500'>Admin Panel</p>
        </Link>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 my-2 sm:px-7 sm:py-2 rounded-full text-sx sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar