import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../Components/NewsLetterbox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>7884 Bells Street <br/> Suite 88, Utopia</p>
          <p className='text-gray-500'>Phone: +1-234-5678-90 <br/> Email: admin@laptopspot.com</p>
          <p></p>
          <p></p>
        </div>
      </div>

      <NewsLetterbox/>
    </div>
  )
}

export default Contact