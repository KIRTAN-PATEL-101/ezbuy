import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {

   const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/product/${product?._id}`)}className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
         <img src={product.image} alt="product" className='w-full h-full object-cover object-left-top'/>
      </div>

      <div className='textPart bg-white p-3'>
         <div>
            <p className='font-bold opacity-60'>{product.brand}</p>
            <p>{product.title}</p>
         </div>
         <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{product.selling_price}</p>
            <p className='line-through opactiy-50'>{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.disscount}</p>
         </div>
      </div>
      
    </div>
  )
}

export default ProductCard
