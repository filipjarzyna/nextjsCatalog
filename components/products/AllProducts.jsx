import React from 'react'
import ProductCard from './ProductCard'
import { getAllProducts } from '@utils/extra'



export default function AllProducts({ data }) {
    console.log(data)
    return (
        <div className='grid grid-cols-4 col-span-5'>
            {data && data.map((product, index) => (
                <ProductCard
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    category={product.category}
                    brand={product.brand}
                    key={index}
                />
            ))
            }
        </div>
    )
}

export async function getServerSideProps() {
    const res = await getAllProducts()
    const data = await res.json()

    console.log("-----------------------------")
    console.log(result)
    console.log("-----------------------------")
    return { props: {data} }
}
