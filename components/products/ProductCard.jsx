import React from 'react'
import { imagesPath } from '@components/reusable/Variables'

const ProductCard = ({ name, image, price, category, brand }) => {
    return (
        <div className='rounded-md overflow-hidden w-fit shadow-md shadow-neutral-800 pb-5 hover:opacity-70 hover:cursor-pointer'>
            <img src={`${imagesPath}/${image}`} alt={name} width={300} height={300} />
            <div className='p-3'>
                <h3>{name}</h3>
                <p>{category}</p>
                <p>{brand}</p>
                <p>{price} PLN</p>
            </div>
        </div>
    )
}

export default ProductCard