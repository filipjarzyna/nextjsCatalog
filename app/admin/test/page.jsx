'use client'
import React, {useEffect, useState} from 'react'

function page() {
    const [a, setA] = useState([])

    useEffect(() => {
        testFetch()
    }, [])

    const testFetch = async () => {
        try{
            const res = await fetch("/api/products", {method: "GET"})
            const result = await res.json()
            
            console.log(result.data)
            setA(result.data)
        } catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <div>
            {a.map((item, index) => (
                <p key={index} className='text-white'>{item.name}</p>
            ))}
        </div>
    )
}

export default page