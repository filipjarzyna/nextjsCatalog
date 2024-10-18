import { imagesPath } from '@components/reusable/Variables'
import Link from 'next/link'
import React from 'react'
import '@styles/global.css'

function ProductView({ product }) {
  console.log("product: ", product)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mx-auto max-md:px-2'>
      <div className='h-full max-lg:mx-auto'>
        <img className='rounded-2xl h-full object-cover max-lg:mx-auto lg:ml-auto' src={`${imagesPath}/${product.image}`} />
      </div>
      <div className='mx-auto w-full max-w-xl'>
        <div className='flex flex-col mb-6 h-full justify-between'>
          <div className='text-wrap'>
            <h2 className='font-bold text-3xl leading-10 mb-1 text-wrap'>
              {product.name}
            </h2>
            <h6 className='font-semibold text-2xl leading-9 text-gray-300 mb-4'>
              {product.price}PLN
            </h6>
            <div>
              <div className='flex gap-6 flex-col text-xl'>
                <div>
                  <p className=''>
                    Marka:
                  </p>
                  <p className='link-red'>
                    {product.brand}
                  </p>
                </div>
                <div>
                  <p className=''>
                    Kategoria:
                  </p>
                  <Link href={""} className='link-red'>
                    {product.category}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='text-xl mb-2'>
            <p className='text-red-400 text-2xl'>Uwaga</p>
            <p>Aktualnie produkty są sprzedawane wyłącznie na miejscu, w razie pytań prosimy o
              <Link href={""} className='mx-1 link-red'>kontakt</Link>
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductView