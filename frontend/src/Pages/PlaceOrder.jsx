import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, deliveryFee, products } = useContext(ShopContext);
  const [method, setMethod] = useState('cashOnDelivery');
  const [addressData, setAddressData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    addressFirstLine: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setAddressData(data => ({ ...data, [name]: value }));

  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(addressData);

    try {
      let orderItems = [];

      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = structuredClone(products.find(product => product._id === itemId))
          if (itemInfo) {
            itemInfo.quantity = cartItems[itemId];
            orderItems.push(itemInfo);
          }
        }
      }

      let orderData = {
        address: addressData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      }

      switch (method) {
        case 'cashOnDelivery':
          const response = await axios.post(backendUrl + '/api/order/placeCashOnDelivery', orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message)
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/placeStripe', orderData, {headers:{token}});
          if(responseStripe.data.success){
            const {session_url} = responseStripe.data;
            window.location.replace(session_url)
          }else{
            toast.error(responseStripe.data.message);
          }

          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/*left side*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFO'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={addressData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={addressData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={addressData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email address' />
        <input required onChange={onChangeHandler} name='addressFirstLine' value={addressData.addressFirstLine} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Address First Line' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={addressData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={addressData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={addressData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zip Code' />
          <input required onChange={onChangeHandler} name='phone' value={addressData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
        </div>

      </div>

      {/*right side*/}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        {/*Payments*/}
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>

            <div onClick={() => { setMethod('stripe') }} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''} `}></p>
              <img className='h-5 mx-3' src={assets.stripe_logo} />
            </div>

            <div onClick={() => { setMethod('cashOnDelivery') }} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cashOnDelivery' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-bold mx-3'>CASH ON DELIVERY</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white text-md border px-14 py-3'>ORDER</button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder