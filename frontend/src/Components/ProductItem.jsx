import React, { useCallback, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {
  
  const {currency} = useContext(ShopContext);

    return (
    <Link className='text-gray-700 cursor-pointer flex flex-col justify-between' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <div className='h-1/4'>
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>{currency}{price}</p>
        </div>

    </Link>
  )
}

export default ProductItem