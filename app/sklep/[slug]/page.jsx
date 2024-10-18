import { notFound } from 'next/navigation'
import ProductView from '@components/products/single/ProductView'

export async function generateStaticParams() {
    //fetch all paths
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/all/paths`, { method: "GET", cache: 'no-cache' })
    const result = await res.json()

    const products = result ? result.data : undefined

    if (!products) {
        return {}
    }
    // Generate all product paths for static generation
    return products.map((product) => ({
        slug: product.path,
    }))
}

export default async function ProductPage({ params }) {
    const { slug } = params

    const productPromise = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/single?name=${slug}`, { method: "GET", cache: 'no-cache', })

    // fetch product
    const result = await productPromise
    const data = await result.json()
    console.log(data)
    const product = data.data ? data.data[0] : undefined
    // handle case where product is not found
    if (!product) {
        notFound()
    }

    return (
        <ProductView product={product}/>
    )
}
