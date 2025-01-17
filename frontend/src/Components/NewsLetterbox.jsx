import React from 'react'

const NewsLetterbox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault(); //dont reload webpage
    }

  return (
    <div className='text-center'>
        {/* <p className='text-2xl font-medium text-gray-800'>Subscribe now to get 15% off!</p>
        <p className='text-gray-400 mt-3'>
            Subscribe to our newsletter to get a discount on your first
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3 my-6'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form> */}
    </div>
  )
}

export default NewsLetterbox