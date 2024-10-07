'use client'
import FilterTab from '@components/products/filtertab/FilterTab'
import ProductCard from '@components/products/ProductCard'
import Searchbar from '@components/products/Searchbar'
import React, { Suspense } from 'react'
import { useEffect, useState } from 'react'

const Sklep = () => {
    const [allProducts, setAllProducts] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [category, setCategory] = useState("")

    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/products", {method: "GET"})
            const result = await res.json()

            setAllProducts(result.data)
            console.log(`allproducts: ${allProducts.length}`)
        } catch (error) {
            console.log("Error fetching data")
        }

    }
    useEffect(() => {
        fetchProducts()
    },[])


    return (
        <>
            <div className='grid grid-cols-6'>
                <div className='col-span-6'>
                    <Searchbar 
                        fetch={fetchProducts}
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                </div>
                <div className='row-span-10'>
                    <FilterTab />
                </div>
                <div className='grid grid-cols-4 col-span-5'>
                    {allProducts.map((product, index) => (
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
            </div >
        </>
    )
}

export default Sklep