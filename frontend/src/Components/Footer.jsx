import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
            <div>
            <p className='text-3xl font-bold logoFont'> LaptopSpot <span className='text-4xl font-bold'>.</span></p>
                <p className='w-full md:w-2/3 text-gray-600'>
                At LaptopSpot, we specialize in providing high-quality laptops and accessories to meet the needs of every tech enthusiast, professional, and student
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About Us</li></Link>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-123-4567-890</li>
                    <li>email@laptopspot.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025 LaptopSpot - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer