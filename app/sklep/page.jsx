'use client'
import FilterTab from '@components/products/filtertab/FilterTab'
import ProductCard from '@components/products/grid/ProductCard'
import Searchbar from '@components/products/Searchbar'
import Loading from '@components/reusable/Loading'
import { brandsList, categoriesList } from '@components/reusable/Variables'

import React, { Suspense } from 'react'
import { useEffect, useState } from 'react'
// import { useSearchParams, useRouter, usePathname } from 'next/navigation'


const Sklep = () => {
    const [allProducts, setAllProducts] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [brands, setBrands] = useState([]) //list of brands indexes
    const [categories, setCategories] = useState([])

    //handle searchInput change 
    const handleSearch = (input) => {
        setSearchInput(input)
    }

    //function used to handle storing indexes of brands chosen by the user
    //in the brands useState. Index is based on brandsList
    const handleBrand = (newBrand) => {
        const index = brandsList.indexOf(newBrand)
        if (index < 0) return

        if (brands.includes(index)) {
            setBrands((prev) => prev.filter((c) => c != index))
        } else {
            setBrands((prev) => [...prev, index])
        }
    }

    //function used to handle storing indexes of categories chosen by the user
    //in the categories useState. Index is based on categoriesList
    const handleCategory = (newCategory) => {
        const index = categoriesList.indexOf(newCategory)
        if (index < 0) return

        if (categories.includes(index)) {
            setCategories((prev) => prev.filter((c) => c != index))
        } else {
            setCategories((prev) => [...prev, index])
        }
    }

    //fetch products from the database
    const fetchAllProducts = async () => {
        try {
            const res = await fetch("/api/products/all", {
                method: "GET",
                revalidate: 36000,
            })
            const result = await res.json()

            setAllProducts(result.data)
        } catch (error) {
            console.log("Error fetching data")
        }

    }

    //fetch products using categories and search input
    const fetchProducts = async () => {
        try {
            //if nothing is used then fetch cached allProducts response
            if (brands.length == 0 && categories.length == 0 && searchInput.length == 0) {
                fetchAllProducts()
                return
            }

            const res = await fetch("api/products", {
                method: "POST",
                cache: 'no-store',
                body: JSON.stringify({
                    brands: brands,
                    categories: categories,
                    search: searchInput
                })
            })
            const result = await res.json()

            setAllProducts(result.data)
        } catch (error) {
            console.log("Error fetching data")
        }
    }

    //first product fetch
    useEffect(() => {
        fetchAllProducts()
    }, [])

    //testing  
    useEffect(() => {
        fetchProducts()
    }, [brands, searchInput])


    return (
        <>
            <div className='grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8'>
                <div className='col-span-2'/>
                <div className='col-span-3 md:col-span-4 lg:col-span-6'>
                    <Searchbar
                        handleSearch={handleSearch}
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                </div>
                <div className='row-span-10 col-span-2'>
                    <FilterTab
                        handleBrand={handleBrand}
                        handleCategory={handleCategory}
                    />
                </div>
                <Suspense fallback={<Loading />}>
                    <div className='grid col-span-3 md:col-span-4 lg:col-span-6 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-around'>
                        {allProducts && allProducts.map((product, index) => (
                            <div key={index} className='flex justify-center items-center m-2'>
                                <ProductCard
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                    brand={product.brand}
                                />
                            </div>
                        ))
                        }
                    </div>
                </Suspense>
            </div >
        </>
    )
}

export default Sklep