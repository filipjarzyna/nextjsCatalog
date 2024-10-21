import React from 'react'
import { imagesPath } from '@components/reusable/Variables'
import Link from 'next/link'
import { singleProductPath } from '@components/reusable/Variables'

const ProductCard = ({ name, image, price, category, brand }) => {
    return (
        <Link href={`${singleProductPath}/${name}`}>
            <div className='rounded-sm overflow-hidden w-fit shadow-md hover:shadow-neutral-800 pb-5 hover:opacity-90 '>
                <img src={`${imagesPath}/${image}`} alt={name} className='w-full'/>
                <div className='p-3'>
                    <h3 className='text-2xl'>{name}</h3>
                    <p className='mb-2'>{price}PLN</p>
                    <p className='text-blue-400'>{category}</p>
                    <p className='text-red-400'>{brand}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard