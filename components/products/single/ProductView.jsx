import { imagesPath } from '@components/reusable/Variables'
import React from 'react'

function ProductView({product}) {
    console.log("product: ",product)  
  
    return (
    <div className='flex flex-col md:flex-row justify-around items-center text-3xl text-white'>
        <div className='h-[500px] w-[500px]'>
          <img className='w-full h-full' src={`${imagesPath}/${product.image}`}/>
        </div>
        <div className='w-[500px] '>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h2>{product.brand}</h2>
        </div>
    </div>
  )
}

export default ProductView