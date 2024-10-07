'use client'
import React from 'react'
import { useState } from 'react'


function AddProduct() {
    const categories = ["Sterowniki Poduszek AIRBAG", "Tasmy", "Poduszki"]
    const brands = ["Fiat", "Audi", "Volvo", "Skoda", "Mercedes"]

    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        category: "",
        brand: "",
        location: 0,
        file: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            file: e.target.files[0],
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("name", formData.name)
        data.append("price", formData.price)
        data.append("category", formData.category)
        data.append("brand", formData.brand)
        data.append("location", formData.location)
        data.append("file", formData.file)

        try {
            //send data to the endpoint
            const res = await fetch('/api/sqlproducts/add', {
                method: "POST",
                body: data,
            })

            console.log(res)
        } catch (error) {
            console.log(error)
        }
        console.log('submited: ', formData)
    }

    return (
        <form className='border-2 border-gray-500 p-4 w-fit' onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Nazwa</label>
                <input type="text" id="name" onChange={handleChange} name="name" className="bg-gray-600 border border-gray-300 text-white text-xl rounded-lg p-3 w-full" />
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Cena</label>
                <input type="number" id="price" onChange={handleChange} name="price" className="bg-gray-600 border border-gray-300 text-white text-xl rounded-lg p-3 w-full" />
            </div>
            <div className="mb-5">
                <label htmlFor="category" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Kategoria</label>
                <select name="category" id="category" onChange={handleChange} defaultValue={"-"} className="bg-gray-600 border border-gray-300 text-white text-xl rounded-lg p-3 w-full">
                    <option value={"-"} hidden disabled>-</option>
                    {categories.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}

                </select>
            </div>
            <div className="mb-5">
                <label htmlFor="brand" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Marka</label>
                <select name="brand" id="brand" onChange={handleChange} defaultValue={"-"} className="bg-gray-600 border border-gray-300 text-white text-xl rounded-lg p-3 w-full">
                    <option value={"-"} hidden disabled>-</option>
                    {brands.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="mb-5">
                <label htmlFor="location" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Lokalizacja</label>
                <input type="number" id="location" onChange={handleChange} name="location" className="bg-gray-600 border border-gray-300 text-white text-xl rounded-lg p-3 w-full" />
            </div>
            <div className="mb-5">
                <label htmlFor="file" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Zdjecie</label>
                <input type="file" id="file" onChange={handleFileChange} name="file" className="bg-gray-600 border border-gray-300 text-white text-xl rounded-lg p-3 w-full" />
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='bg-green-800 rounded-md p-3 hover:opacity-80 border-2 border-white w-4/5'>Dodaj</button>
            </div>
        </form>
    )
}

export default AddProduct