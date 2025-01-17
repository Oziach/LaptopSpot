import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../Components/NewsLetterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] overflow-hidden object-cover' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At LaptopSpot, we specialize in providing high-quality laptops and accessories to meet the needs of every tech enthusiast, professional, and student. Our extensive selection features top brands and the latest models, ensuring that our customers have access to the best technology available. Whether you're looking for a powerful laptop for work, gaming, or everyday use, we’ve got you covered with a variety of options at competitive prices.</p>
          <p>In addition to laptops, LaptopSpot offers a wide range of accessories, from cases and chargers to keyboards and mice, designed to enhance your computing experience. Our knowledgeable team is dedicated to helping you find the perfect device and accessories tailored to your specific requirements. We pride ourselves on excellent customer service and aim to make your shopping experience as seamless and enjoyable as possible.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
At LaptopSpot, our mission is to provide high-quality laptops and accessories that empower individuals and businesses to stay connected, productive, and ahead of the curve. We are committed to offering the latest technology, exceptional customer service, and tailored solutions to meet the diverse needs of our customers, ensuring they have the tools they need to succeed in an ever-evolving digital world.</p>
        </div>
      </div>

      <div className='pt-10'></div>

      <NewsLetterbox/>
 
    </div>
  )
}

export default About