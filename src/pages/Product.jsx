import React from 'react'
import ProductData from '../components/productData'
import Login from '../pages/LoginUser'
import Navbar from '../components/Navbar'

const Product = () => {
  return (
    <div className='bg-gray-200 min-h-screen overflow-x-hidden py-12'>
      <Navbar />
      <ProductData />
      <Login />
    </div>
  )
}

export default Product